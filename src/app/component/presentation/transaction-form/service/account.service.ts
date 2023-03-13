import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Guid } from "guid-typescript";
import { Account } from "../model/account.model";
import { SourceService } from "./source.service";

export abstract class AccountService implements SourceService<Account>{
  public abstract find(filter: string): Account[]
  public abstract get(filter: string): Account
  public abstract isExist(filter: string): boolean
}

export class MockAccountService extends AccountService {
  accounts: Account[] = []
  constructor() {
    super()
    this.accounts.push({ name: "Account_gf_1", guid: Guid.create(), allowMultiStock: false, defaultCurrency: "RUB" })
    this.accounts.push({ name: "Account_gf_2", guid: Guid.create(), allowMultiStock: false, defaultCurrency: "USD" })
    this.accounts.push({ name: "Account_gt_3", guid: Guid.create(), allowMultiStock: true, defaultCurrency: "RUB" })
    this.accounts.push({ name: "Account_gt_4", guid: Guid.create(), allowMultiStock: true, defaultCurrency: "USD" })
  }

  public isExist(filter: string): boolean {
    let uName = filter.toUpperCase()
    let account = this.accounts.find((el) => el.name.toUpperCase() == uName)
    if (account == undefined) {
      return false
    }
    return true
  }
  public find(filter: string): Account[] {
    if (filter == "") {
      return this.accounts
    }
    return this.accounts.slice().filter((acc) => acc.name.includes(filter));
  }

  public get(filter: string): Account {
    let account = this.accounts.find((el) => el.name == filter)
    if (account == undefined) {
      throw Error("Entered account undefined")
    }
    return account
  }
}