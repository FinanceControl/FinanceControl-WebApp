import { Transaction } from "../model/transaction.model";

export abstract class TransactionService {
  public abstract save(transaction: Transaction): void
}

export class MockTransactionService extends TransactionService {

  public save(transaction: Transaction) {
    console.log("Get saveTransaction")
    console.log(transaction)
  }

}