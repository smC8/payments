export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  payee: string | null;
  payer: string | null;
  updatedAt: Date;
};
