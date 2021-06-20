import { Schema, model } from "mongoose";

const Profile = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("profiles", Profile);
