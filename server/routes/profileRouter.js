const express = require("express");

const Controller = require("../controllers/profileController");

const router = express.Router();

router.post("/", Controller.createProfile);

module.exports = router;
