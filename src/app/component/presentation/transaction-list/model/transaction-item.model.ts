import { Guid } from "guid-typescript"
import { Account } from "./account.model"

export interface TransactionItem {
  account: Account,
  amount: number,
  stock: string
}
