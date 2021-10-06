import { Schema, model } from "mongoose";

export interface Character {
  name: string;
}

const CharacterSchema = new Schema<Character>(
  {
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "profile", required: true },
    classes: [
      {
        name: { type: String },
        level: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

export default model<Character>("character", CharacterSchema);
