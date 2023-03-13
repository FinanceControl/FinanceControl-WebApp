import { TransactionItem } from "./item-position.model";
import { TransactionHeader } from "./transacion-header.model";

export interface Transaction {
  header: TransactionHeader,
  items: TransactionItem[]
}