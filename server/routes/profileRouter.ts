import { Router } from "express";

import {
  createProfile,
  getProfiles,
  getProfileById,
} from "../controllers/profileController";

const router = Router();

router.post("/", createProfile);
router.get("/", getProfiles);
router.get("/:id", getProfileById);

export default router;
