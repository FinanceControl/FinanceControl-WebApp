import { Guid } from "guid-typescript"

export enum ItemType {
  Debit = 1,
  Credit = 2
}
export interface TransactionItem {
  guid: Guid,
  type: ItemType,
  account: Guid,
  amount: number,
  currency: string
}