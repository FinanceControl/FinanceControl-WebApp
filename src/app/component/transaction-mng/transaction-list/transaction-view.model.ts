import { AccountModel } from "src/app/model/account.model";
import { TransactionModel } from "src/app/model/transaction.model";
import { AccountService } from "src/app/service/account-srv/account.service";

export class TransactionViewModel {
  public static BuildFromModel(transactionModel: TransactionModel, accountSrv: AccountService) {
    let from_side = transactionModel.fromItem == undefined ?
      undefined :
      new TransactionSideViewModel(accountSrv.GetByGuid(transactionModel.fromItem.accountGuid), transactionModel.fromItem.amount)
    let to_side = transactionModel.toItem == undefined ?
      undefined :
      new TransactionSideViewModel(accountSrv.GetByGuid(transactionModel.toItem.accountGuid), transactionModel.toItem.amount)
    return new TransactionViewModel(transactionModel.id, from_side, to_side)
  }

  constructor(public readonly id: number, public readonly fromSide: TransactionSideViewModel | undefined, public readonly toSide: TransactionSideViewModel | undefined) {
  }
}

export class TransactionSideViewModel {
  constructor(public readonly account: AccountModel, public readonly amount: number) {
  }
}