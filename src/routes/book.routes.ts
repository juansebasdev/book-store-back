import { Router } from "express";
import { getBookById, getBooks } from "../controllers";

const booksRouter: Router = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBookById);

export { booksRouter };
