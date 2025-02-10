import mongoose, { Schema, Document } from "mongoose";

interface IMaterialLink extends Document {
    _id: mongoose.Types.ObjectId;
    type: String;
    title: String;
    link: String;
}

const MaterialLinkSchema = new Schema<IMaterialLink>({
    _id: { type: Schema.Types.ObjectId, auto: true },
    type: {type: String, required: true},
    title: {type: String, required: true},
    link: {type: String, required: true},
})

const MaterialLink = mongoose.models.MaterialLink || mongoose.model<IMaterialLink>("MaterialLink", MaterialLinkSchema);
export default MaterialLink;