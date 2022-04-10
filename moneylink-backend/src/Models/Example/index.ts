import mongoose, { Document, Schema } from 'mongoose';

export interface IExample extends Document {
  name: string;
};

export interface IExampleModel extends mongoose.Model<IExample> {};

export const ExampleSchema = new Schema({
  name: { type: String, required: true },
});

const Example = mongoose.model<IExampleModel>('Example', ExampleSchema);

export default Example;