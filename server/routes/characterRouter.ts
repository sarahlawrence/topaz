import { Router } from "express";

import {
  createCharacter,
  getCharacters,
  getCharactersByProfileId,
  getCharacterById,
} from "../controllers/characterController";

const router = Router();

router.get("/", getCharacters);
router.post("/", createCharacter);
router.get("/all/:profileId", getCharactersByProfileId);
router.get("/:characterId", getCharacterById);

export default router;
