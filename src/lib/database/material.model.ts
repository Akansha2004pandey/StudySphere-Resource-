import mongoose, { Schema, Document } from "mongoose";
import MaterialLink from "./materialLink.model";
interface IMaterial extends Document {
  year: number;
  sem: number;
  coursecode: string;
  coursename: string;
  ytPlaylist: Schema.Types.ObjectId[];
  ebooks: Schema.Types.ObjectId[];
  notes: Schema.Types.ObjectId[];
  ppts: Schema.Types.ObjectId[];
  pyqs: Schema.Types.ObjectId[];
}

const MaterialSchema: Schema<IMaterial> = new Schema({
  year: { type: Number, required: true },
  sem: { type: Number, required: true },
  coursecode: { type: String, required: true, unique: true },
  coursename: { type: String, required: true },
  ytPlaylist: [{ type: Schema.Types.ObjectId, ref: 'MaterialLink'}],
  ebooks: [{ type: Schema.Types.ObjectId, ref: 'MaterialLink'}],
  notes: [{ type: Schema.Types.ObjectId, ref: 'MaterialLink'}],
  ppts: [{ type: Schema.Types.ObjectId, ref: 'MaterialLink'}],
  pyqs: [{ type: Schema.Types.ObjectId, ref: 'MaterialLink'}],
});

const Material = mongoose.models.Material || mongoose.model<IMaterial>("Material", MaterialSchema);
export default Material;