import { Router } from "express";

import {
  createCharacter,
  getCharacters,
  getCharactersByProfileId,
} from "../controllers/characterController";

const router = Router();

router.get("/", getCharacters);
router.post("/", createCharacter);
router.get("/:profileId", getCharactersByProfileId);
router.get("/:profileId/:characterId", getCharactersByProfileId);

export default router;
