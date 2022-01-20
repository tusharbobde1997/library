import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  authorId?: SortOrder;
  authorName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
