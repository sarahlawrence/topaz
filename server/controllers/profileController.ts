import { Request } from "express";
import ProfileModel from "../models/profileModel";

const createProfile = (req, res) => {
  const body = req.body;

  if (!body) {
    return res
      .status(400)
      .json({ success: false, error: "No profile provided" });
  }

  const profile = new ProfileModel(body);

  if (!profile) {
    return res
      .status(400)
      .json({ success: false, error: "Profile not created" });
  }

  profile
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Profile created!",
        id: profile._id,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "ERR: Profile not created",
      });
    });
};

const getProfiles = async (req, res) => {
  await ProfileModel.find({}, (err, profiles) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    if (!profiles) {
      res.status(404).json({ message: "Profiles not found" });
    }
    return res.status(200).json({ success: true, profiles });
  });
};

const getProfileById = async (req: Request, res) => {
  const id = req.params.id;
  await ProfileModel.findById(id, (err, profile) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
    }

    return res.status(200).json({ success: true, profile });
  });
};

export { createProfile, getProfiles, getProfileById };
