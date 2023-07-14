import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "payee";

export const TransactionTitle = (record: TTransaction): string => {
  return record.payee || String(record.id);
};
