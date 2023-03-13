import { Guid } from "guid-typescript";
import { TransactionItem } from "./transaction-item.model";

export interface Transaction {
  guid:Guid,
  date: string,
  description: string,
  debits: TransactionItem[],
  credits: TransactionItem[]
}