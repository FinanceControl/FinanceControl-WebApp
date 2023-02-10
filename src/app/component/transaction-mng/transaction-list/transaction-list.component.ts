import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { param_AccountId, param_BankId } from 'src/app/appRoutesConst';
import { AccountService } from 'src/app/service/account-srv/account.service';
import { TransactionModel } from '../../../model/transaction.model';
import { TransactionService } from '../../../service/transaction-srv/transaction.service';
import { TransactionViewModel } from './transaction-view.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent  implements OnInit {
  transactionList:TransactionViewModel[] = []
  constructor(private transactionSrv:TransactionService, private route:ActivatedRoute, private accountSrv:AccountService){
  }
  

  ngOnInit(): void {
    this.loadTransactions(this.route.snapshot.params);
    this.route.params.subscribe((params:Params)=>this.loadTransactions(params))
  }

  private loadTransactions(params:Params) {
    let activedAccountId = params[param_AccountId]
    let activedBankId = params[param_BankId]
    let transactionModelArr: TransactionModel[] = []
    if (activedBankId != undefined)
      transactionModelArr =  this.transactionSrv.GetForBankById(activedBankId)
    else if (activedAccountId != undefined)
      transactionModelArr = this.transactionSrv.GetForAccountById(activedAccountId);
    else
      transactionModelArr = this.transactionSrv.GetAll();
    this.transactionList = transactionModelArr.map((val,idx,arr)=>TransactionViewModel.BuildFromModel(val, this.accountSrv))
  }
}
