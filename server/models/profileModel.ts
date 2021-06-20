import { Schema, model, ObjectId } from "mongoose";

export interface Profile {
  name: string;
  characters: ObjectId[];
}

const ProfileSchema = new Schema<Profile>(
  {
    name: { type: String, required: true },
    characters: [{ type: Schema.Types.ObjectId, ref: "character" }],
  },
  { timestamps: true }
);

export default model<Profile>("profiles", ProfileSchema);
