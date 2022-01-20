import { Author as TAuthor } from "../api/author/Author";

export const AUTHOR_TITLE_FIELD = "authorName";

export const AuthorTitle = (record: TAuthor): string => {
  return record.authorName || record.id;
};
