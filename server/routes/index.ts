import { Router } from "express";
import profile from "./profileRouter";

const router = Router();

router.use("/profile", profile);

export default router;
