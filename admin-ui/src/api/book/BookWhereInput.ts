import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BookWhereInput = {
  author?: AuthorWhereUniqueInput;
  authorName?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
};
