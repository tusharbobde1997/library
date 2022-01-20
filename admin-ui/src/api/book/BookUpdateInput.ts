import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BookUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  authorName?: string;
  name?: string;
};
