import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { AccountModel } from 'src/app/model/account.model';
import { BankModel } from 'src/app/model/bank.model';
import { SavingModel } from 'src/app/model/saving.model';
import { AccountService } from '../account-srv/account.service';
import { BankService } from '../bank-srv/bank.service';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  constructor(private accountSrv: AccountService, private bankSrv: BankService) { }

  public GetByGuid(guid: Guid): SavingModel {
    let acc = this.accountSrv.GetByGuid(guid)
    if (acc != undefined)
      return this.getSavingModelForAccount(acc)

    let bank = this.bankSrv.GetByGuid(guid)
    if (bank != undefined)
      return this.getSavingModelForBank(bank);

    throw new Error("Unknown guid");

  }
  private getSavingModelForBank(bank: BankModel): SavingModel {
    return new SavingModel(bank.guid, bank.name, bank.baseCurrency, bank.balance, this.accountSrv.GetByBankGuid(bank.guid).map((val, idx, arr) => val.guid))
  }
  private getSavingModelForAccount(acc: AccountModel): SavingModel {
    return new SavingModel(acc.guid, acc.name, acc.currencyCode, acc.balance)
  }
}
