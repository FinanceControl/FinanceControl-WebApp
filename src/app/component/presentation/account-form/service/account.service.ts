import { Account } from "../model/account.model"

export abstract class AccountService {
  public abstract save(newStock: Account): boolean
}

export class MockAccountService implements AccountService {
  save(newAccount: Account): boolean {
    console.log(`Get request to save new account: ${JSON.stringify(newAccount)}`)
    return true
  }
}