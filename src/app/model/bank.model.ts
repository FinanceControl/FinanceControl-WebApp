import { Guid } from "guid-typescript";

export class BankModel {
  constructor(public id: number, public guid: Guid, public name: string, public balance: number) { }
}