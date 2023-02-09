import { Guid } from "guid-typescript";

export class BankModel{
  constructor(public readonly id:number, public readonly guid: Guid, public name: string){}
}