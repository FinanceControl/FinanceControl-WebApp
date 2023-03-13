import { Guid } from "guid-typescript";

export interface Account{
  guid: Guid
  name: string,

  
}

export function CreateRandomAccount(): Account {
  return {guid: Guid.create(), name:`Acc_${Math.round(Math.random() * 100)}`}
}