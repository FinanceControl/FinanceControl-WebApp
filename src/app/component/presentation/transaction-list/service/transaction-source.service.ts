import { EventEmitter, Injectable, OnDestroy } from "@angular/core";
import { Guid } from "guid-typescript";
import { Subscription } from "rxjs";
import { Account, CreateRandomAccount } from "../model/account.model";
import { Transaction } from "../model/transaction.model";

export abstract class TransactionSourceService {
  public abstract get(accountGuid: Guid | null): Transaction[]
  public onTransactionSelected:EventEmitter<Guid> = new EventEmitter();
}

@Injectable()
export class MockTransactionSourceService extends TransactionSourceService implements OnDestroy {
  transactions: Transaction[] = []
  subscribtion: Subscription;
  constructor() {
    super()
    let acc1: Account = CreateRandomAccount()
    let acc2: Account = CreateRandomAccount()
    let acc3: Account = CreateRandomAccount()

    this.transactions.push(
      {
        guid: Guid.create(),
        date: "2023-03-01", description: "transaction 1",
        debits: [
          { account: acc1, amount: 1, stock: "RUB" },
          { account: acc2, amount: 2, stock: "USD" },
        ],
        credits: [
          { account: acc3, amount: 3, stock: "AAPL" },
        ]
      },
      {
        guid: Guid.create(),
        date: "2023-03-02", description: "transaction 2",
        debits: [
          { account: acc1, amount: 1, stock: "RUB" },
        ],
        credits: []
      },
      {
        guid: Guid.create(),
        date: "2023-03-03", description: "transaction 3",
        debits: [],
        credits: [
          { account: acc3, amount: 3, stock: "AAPL" },
          { account: acc1, amount: 1, stock: "RUB" },
        ]
      })

      this.subscribtion = this.onTransactionSelected.subscribe((el)=>console.log(`Selected transaction with guid: ${el}`))
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  public get(accountGuid: Guid | null): Transaction[] {
    return this.transactions
  }

}