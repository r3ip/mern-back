import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: String,
  author: String,
  copies: Number,
  imageUrl: String
})

const Books = model('books', bookSchema);

export default Books;