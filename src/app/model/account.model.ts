import { Guid } from "guid-typescript";
import { BankModel } from "./bank.model";
import { CurrencyModel } from "./currency.model";

export class AccountModel {
  constructor(public readonly id:number,
    public readonly guid:Guid, public name: string, public bankGuid:Guid, public currencyCode:string ){}

}