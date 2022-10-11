import mongoose, { Schema, Document } from "mongoose";

export interface IDespesa extends Document {
  name: string;
  category: string;
  createdAt: Date;
  value: number;
}

const DespesaSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, required: true },
  value: { type: Number, required: true },
});

export default mongoose.model<IDespesa>("Despesa", DespesaSchema);
