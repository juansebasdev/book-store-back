import { Router } from "express";
import { getBooks, getBookById } from "../controllers";

const booksRouter: Router = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBookById);

export { booksRouter };
