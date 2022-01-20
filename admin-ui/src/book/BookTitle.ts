import { Book as TBook } from "../api/book/Book";

export const BOOK_TITLE_FIELD = "authorName";

export const BookTitle = (record: TBook): string => {
  return record.authorName || record.id;
};
