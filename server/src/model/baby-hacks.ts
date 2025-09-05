import mongoose, { Document, Schema } from 'mongoose';
export interface IHack extends Document {
  title: string;
  description?: string;
  category: string;
  steps: string[];
  benefits: string[];
  resources?: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const HackSchema = new Schema<IHack>({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  steps: [{ type: String }],
  benefits: [{ type: String }],
  resources: [{ type: String }],
  tags: [{ type: String }]
}, { timestamps: true });

export default mongoose.model<IHack>('Hack', HackSchema);
    