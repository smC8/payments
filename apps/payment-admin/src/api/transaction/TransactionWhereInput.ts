import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  payee?: StringNullableFilter;
  payer?: StringNullableFilter;
};
