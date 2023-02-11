import { Guid } from "guid-typescript";
import { BankModel } from "src/app/model/bank.model";
import { TransactionService } from "src/app/service/transaction-srv/transaction.service";

export class BankViewModel {
  constructor(public readonly id: number, public readonly guid: Guid, public readonly name: string, public readonly amount: number) {

  }
}