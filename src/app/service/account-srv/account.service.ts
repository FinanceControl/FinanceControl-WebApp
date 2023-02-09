import { Injectable } from '@angular/core';
import { BankService } from '../bank-srv/bank.service';
import {AccountModel} from '../../model/account.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountList: AccountModel[] = [];
  private static id:number = 0;
  constructor(private bankSrv:BankService) {
    bankSrv.GetAll().forEach(bank => {
      AccountService.id += 1
      this.accountList.push(new AccountModel(AccountService.id, Guid.create(), `${bank?.name}-Счет1`, bank?.guid!, "RUB"))
      AccountService.id += 1
      this.accountList.push(new AccountModel(AccountService.id, Guid.create(), `${bank?.name}-Счет2`, bank?.guid!, "RUB"))
    });
  }
  public GetAll():AccountModel[]{
    return this.accountList.slice()
  }
  public GetByBankId(bankId:number):AccountModel[]{
    return this.GetByBankGuid(this.bankSrv.GetById(bankId).guid)
  }
  public GetByBankGuid(bankGuid:Guid):AccountModel[]{
    return this.accountList.filter((val,idx,arr) => val.bankGuid == bankGuid)
  }

  public GetByGuid(accountGuid:Guid):AccountModel{
    return this.accountList.find((val, idx,arr)=>val.guid == accountGuid)!
  }
  public GetById(Id:number):AccountModel{
    return this.accountList.find((val, idx,arr)=>val.id == Id)!
  }
}
