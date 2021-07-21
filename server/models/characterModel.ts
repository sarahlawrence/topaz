import { Schema, model } from "mongoose";

export interface Character {
  name: string;
}

const CharacterSchema = new Schema<Character>(
  {
    name: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "profile", required: true },
  },
  { timestamps: true }
);

export default model<Character>("character", CharacterSchema);
