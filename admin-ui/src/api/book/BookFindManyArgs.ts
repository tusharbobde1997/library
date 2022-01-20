import { BookWhereInput } from "./BookWhereInput";
import { BookOrderByInput } from "./BookOrderByInput";

export type BookFindManyArgs = {
  where?: BookWhereInput;
  orderBy?: BookOrderByInput;
  skip?: number;
  take?: number;
};
