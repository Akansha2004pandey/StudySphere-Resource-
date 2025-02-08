import mongoose, { Schema, Document } from "mongoose";

interface ISubject extends Document {
  year: number;
  sem: number
  subjectCode: string;
  subjName: string;
  image?: string;
}

const subjectSchema = new Schema<ISubject>({
  year: { type: Number, required: true },
  sem: { type: Number, required: true },
  subjectCode: { type: String, required: true },
  subjName: { type: String, required: true },
  image: { type: String }, // Optional field for image URLs
});

const Subject =mongoose.models.Subject||mongoose.model<ISubject>("Subject", subjectSchema);
export default Subject;