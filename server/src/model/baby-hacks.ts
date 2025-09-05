import mongoose, { Document, Schema } from 'mongoose';
export interface IHack extends Document {
  title: string;
  category: string;
  summary?: string;
  steps: string[];
  applicability: string[];
  tags: string[];
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const HackSchema = new Schema<IHack>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String },
  steps: [{ type: String }],
  applicability: [{ type: String }],
  tags: [{ type: String }],
  notes: { type: String }
}, { timestamps: true });

export default mongoose.model<IHack>('Hack', HackSchema);
    