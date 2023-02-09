import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { AccountModel } from '../../model/account.model';
import { TransactionItemModel, TransactionModel } from '../../model/transaction.model';
import { AccountService } from '../account-srv/account.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private static id:number = 0;
  private transactions: TransactionModel[] = []
  constructor(private accountSrv: AccountService) {
    let accounts = accountSrv.GetAll();
    accounts.forEach((val, idx, arr) => {
      /*
      let rows: TransactionRowModel[] = [this.CreateRow(val, idx, arr)]
      if (idx % 4 == 0) {
        rows.push(this.CreateRow(val, idx, arr, true))
      }
      */
      this.transactions.push(this.CreateRow(val, idx, arr))
      this.transactions.push(this.CreateRow(val, idx, arr, true))
    })
  }

  private CreateRow(acc: AccountModel, accIdx: number, accounts: AccountModel[], isSecond:boolean = false): TransactionModel {
    TransactionService.id += 1
    let add = isSecond ? 0:1    
    let ost = accIdx % (3+add)
    if (ost != accIdx && ost < accounts.length) {
      return TransactionModel.BuildTransfer(TransactionService.id, Guid.create(),
                                            TransactionItemModel.BuildForAccount(acc, (accIdx + 1) * 3), 
                                            TransactionItemModel.BuildForAccount(accounts[ost], (ost + 1) * 3))
    } else {
      if (accIdx % (2+add) == 0)
        return TransactionModel.BuildDebit(TransactionService.id, Guid.create(),
                                           TransactionItemModel.BuildForAccount(acc, (accIdx + 1) * 3))
      else
        return TransactionModel.BuildCredit(TransactionService.id, Guid.create(),
                                            TransactionItemModel.BuildForAccount(acc, (accIdx + 1) * 3))
    }

  }

  public GetAll(){
    return this.transactions.slice();
  }

  public GetForAccountById(accountId:number){
    return this.transactions.filter((val,idx,arr)=>val.fromItem?.accountId == accountId || val.toItem?.accountId == accountId)
  }

  public GetForBankById(bankId:number){
    let accountGuids = this.accountSrv.GetByBankId(bankId).map((val,idx,arr)=>val.guid);
    return this.transactions.filter((val,idx,arr)=> (val.fromItem?.accountGuid != undefined && accountGuids.includes(val.fromItem?.accountGuid))
                                                   || (val.toItem?.accountGuid != undefined && accountGuids.includes(val.toItem?.accountGuid)))
  }
}
