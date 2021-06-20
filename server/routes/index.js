const express = require("express");
const rootRouter = express.Router();

const profile = require("./profileRouter");

rootRouter.use("/profile", profile);

module.exports = rootRouter;
