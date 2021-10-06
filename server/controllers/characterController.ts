import { Request } from "express";
import { Types } from "mongoose";
import CharacterModel from "../models/characterModel";
import ProfileModel from "../models/profileModel";

const createCharacter = async (req: Request, res) => {
  const body = req.body;
  if (!body || !body.profile) {
    return res.status(400).json({ success: false, error: "No data provided" });
  }

  const { profile: profileId, ...rest } = body;

  const profile = await ProfileModel.findById(profileId);
  if (!profile) {
    return res.status(401).json({ success: false, error: "Profile not found" });
  }

  const character = new CharacterModel({ owner: profile._id, ...rest });
  if (!character) {
    return res
      .status(400)
      .json({ success: false, error: "Character not created" });
  }

  character
    .save()
    .then(() => {
      const existing = profile.characters;
      profile.characters = [...existing, character._id];
      profile.save();

      return res.status(201).json({
        success: true,
        message: "Character created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "ERR: Character not created",
      });
    });
};

const getCharacters = (req, res) => {
  CharacterModel.find({}, (err, characters) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    if (!characters) {
      res.status(404).json({ message: "Characters not found" });
    }

    return res.status(200).json({ success: true, characters });
  });
};

const getCharactersByProfileId = (req, res) => {
  const profile = req.params.profileId;
  CharacterModel.find({ owner: Types.ObjectId(profile) }, (err, characters) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    if (!characters) {
      res.status(404).json({ message: "Characters not found" });
    }

    return res.status(200).json({ success: true, characters });
  });
};

const getCharacterById = (req, res) => {
  const characterId = req.params.characterId;
  CharacterModel.findById(characterId, (err, character) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    if (!character) {
      res.status(404).json({ message: "Character not found" });
    }

    return res.status(200).json({ success: true, character });
  });
};

export {
  getCharacters,
  createCharacter,
  getCharactersByProfileId,
  getCharacterById,
};
