import mongoose, { Schema, Document } from "mongoose";

interface IMaterial extends Document {
  year: number;
  sem: number
  coursecode: string;
  coursename: string;
  ytPlaylist: string[];
  ebooks: string[];
  notes: string[];
  ppts: string[];
  pyqs: string[];
}

const MaterialSchema: Schema<IMaterial> = new Schema({
  year: { type: Number, required: true },
  sem: { type: Number, required: true },
  coursecode: { type: String, required: true, unique: true },
  coursename: { type: String, required: true },
  ytPlaylist: { type: [String], default: [] },
  ebooks: { type: [String], default: [] },
  notes: { type: [String], default: [] },
  ppts: { type: [String], default: [] },
  pyqs: { type: [String], default: [] },
});

const Material = mongoose.models.Material || mongoose.model<IMaterial>("Material", MaterialSchema);
export default Material;