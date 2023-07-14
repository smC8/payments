import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  payee?: SortOrder;
  payer?: SortOrder;
  updatedAt?: SortOrder;
};
