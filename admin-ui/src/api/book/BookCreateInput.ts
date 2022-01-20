import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BookCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  authorName: string;
  name: string;
};
