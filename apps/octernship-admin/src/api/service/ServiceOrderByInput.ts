import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
