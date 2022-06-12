import { Model, model, Schema } from "mongoose";

export interface IHealthDeclaration extends Document {
  name: string;
  temperature: number;
  symptoms: { [k: string]: boolean }[];
  closeContact: boolean;
}

const healthDeclarationSchema: Schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  temperature: {
    type: Schema.Types.Number,
    required: true,
  },
  symptoms: {
    type: Schema.Types.Array,
  },
  closeContact: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const HealthDeclaration: Model<IHealthDeclaration> = model(
  "health_declarations",
  healthDeclarationSchema
);

export default HealthDeclaration;
