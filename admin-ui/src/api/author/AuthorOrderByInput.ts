import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  authorName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
