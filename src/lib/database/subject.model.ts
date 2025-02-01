import mongoose, { Schema, model } from "mongoose";

const subjectSchema = new Schema({
  year: { type: Number, required: true },
  sem: { type: Number, required: true },
  subjectCode: { type: String, required: true },
  subjName: { type: String, required: true },
  image: { type: String }, // Optional field for image URLs
});

const Subject =mongoose.models.Subject||mongoose.model("Subject", subjectSchema);
export default Subject;