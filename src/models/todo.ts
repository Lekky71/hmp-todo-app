import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String, required: true, min: 5, max: 40 },
  content: String,
  tags: [String],
  author: String,
}, {
  timestamps: true,
});

export const TodoModel = mongoose.model('todos', TodoSchema);
