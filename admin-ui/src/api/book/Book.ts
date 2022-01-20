import { Author } from "../author/Author";

export type Book = {
  author?: Author | null;
  authorName: string;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};
