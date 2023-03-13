import { Guid } from "guid-typescript";

export class SavingModel {
  constructor(public readonly guid: Guid,
    public readonly name: string,
    public readonly currency: string,
    public readonly balance: number,
    public readonly subItems: Guid[] = []) { }
}