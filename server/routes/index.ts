import { Router } from "express";
import profile from "./profileRouter";
import character from "./characterRouter";

const router = Router();

router.use("/profile", profile);
router.use("/character", character);

export default router;
