const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("profiles", Profile);
