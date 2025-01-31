import mongoose, { Schema, Document } from "mongoose";

interface IMaterial extends Document {
  year: number;
  coursecode: string;
  coursename: string;
  ytPlaylist: string[];
  ebooks: string[];
  notes: string[];
  ppts: string[];
  pyqs: string[];
}

const MaterialSchema: Schema = new Schema({
  year: { type: Number, required: true },
  coursecode: { type: String, required: true, unique: true },
  coursename: { type: String, required: true },
  ytPlaylist: { type: [String], default: [] },
  ebooks: { type: [String], default: [] },
  notes: { type: [String], default: [] },
  ppts: { type: [String], default: [] },
  pyqs: { type: [String], default: [] },
});

export default mongoose.models.Material || mongoose.model<IMaterial>("Material", MaterialSchema);
