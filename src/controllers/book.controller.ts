import { Request, Response } from "express";
import { Book } from "../models";

const getBooks = async (req: Request, res: Response) => {
  const books = await Book.find();

  res.status(200).json({ books });
};

const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  res.status(200).json({ book });
};

export { getBooks, getBookById };
