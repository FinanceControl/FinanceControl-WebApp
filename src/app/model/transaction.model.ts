import { Guid } from "guid-typescript";
import { AccountModel } from "./account.model";
import { BankModel } from "./bank.model";
import { CurrencyModel } from "./currency.model";

export class TransactionModel {
  public static BuildCredit(id:number, guid:Guid, item: TransactionItemModel):TransactionModel{
    return new TransactionModel(id, guid,item,undefined)
  }
  public static BuildDebit(id:number, guid:Guid, item: TransactionItemModel):TransactionModel{
    return new TransactionModel(id, guid,undefined,item)
  }
  public static BuildTransfer(id:number, guid:Guid, fromItem: TransactionItemModel, toItem: TransactionItemModel):TransactionModel{
    return new TransactionModel(id, guid, fromItem, toItem)
  }
  constructor(public readonly id:number, public readonly guid:Guid, public readonly fromItem: TransactionItemModel|undefined, public readonly toItem:TransactionItemModel|undefined){
    if (fromItem == undefined && toItem == undefined)
      throw new Error("Row must contain at least one side");
    if (fromItem?.accountId == toItem?.accountId || fromItem?.accountGuid == toItem?.accountGuid)
      throw new Error("From account must be != too account");
      
  }
}
/*
export class TransactionRowModel {
  public static BuildCreditRow(item: TransactionItemModel):TransactionRowModel{
    return new TransactionRowModel(item,undefined)
  }
  public static BuildDebitRow(item: TransactionItemModel):TransactionRowModel{
    return new TransactionRowModel(undefined,item)
  }
  constructor(public readonly fromItem: TransactionItemModel|undefined, public readonly toItem:TransactionItemModel|undefined){
    if (fromItem == undefined && toItem == undefined)
      throw new Error("Row must contain at least one side");
  }
}
*/
export class TransactionItemModel {
  public static BuildForAccount(account:AccountModel, amount:number){
    return new TransactionItemModel(account.id, account.guid, amount)
  }
  constructor(public readonly accountId:number, public readonly accountGuid:Guid, public readonly amount:number){
    if (amount <= 0)
      throw new Error("Amount in Item must be positiove value");
      
  }
}