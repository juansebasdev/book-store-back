import { Schema, model } from "mongoose";

const BookSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  countInStock: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
  },
});

BookSchema.methods.toJSON = function () {
  const { __v, _id, ...book } = this.toObject();
  book.id = _id;
  return book;
};

const Book = model("Book", BookSchema);

export { Book };
