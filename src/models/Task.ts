import mongoose, { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  context: { type: String, enum: ['Home', 'Work', 'DeepFocus'] },
  energyRequired: Number,
  deadline: Date,
  completed: Boolean
}, { timestamps: true });

export const Task = models.Task || model('Task', TaskSchema);
