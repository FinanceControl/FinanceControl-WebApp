import { Guid } from "guid-typescript";

export interface Account {
  name: string,
  guid: Guid,
  allowMultiStock: boolean,
  defaultCurrency: string}