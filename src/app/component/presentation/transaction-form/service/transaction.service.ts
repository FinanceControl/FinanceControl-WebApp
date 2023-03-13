import { Transaction } from "../model/transaction.model";

export abstract class TransactionService {
  public abstract saveTransaction(transaction: Transaction): void
}

export class MockTransactionService extends TransactionService {

  public saveTransaction(transaction: Transaction) {
    console.log("Get saveTransaction")
    console.log(transaction)
  }

}