import { Book } from "../book/Book";

export type Author = {
  authorName: string;
  books?: Array<Book>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
