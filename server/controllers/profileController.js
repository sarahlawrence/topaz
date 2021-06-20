const ProfileModel = require("../models/profileModel");

createProfile = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      error: "No profile provided",
    });
  }

  const profile = new ProfileModel(body);

  if (!profile) {
    return res.status(400).json({ success: false, error: err });
  }

  profile
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Profile created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "ERR: Profile not created",
      });
    });
};

module.exports = {
  createProfile,
};
