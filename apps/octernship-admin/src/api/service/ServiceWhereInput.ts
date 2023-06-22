import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServiceWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
