import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { param_AccountId, param_BankId } from 'src/app/appRoutesConst';
import { TransactionModel } from '../../../model/transaction.model';
import { TransactionService } from '../../../service/transaction-srv/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent  implements OnInit {
  transactionList:TransactionModel[] = []
  constructor(private transactionSrv:TransactionService, private route:ActivatedRoute){
  }
  

  ngOnInit(): void {
    this.loadTransactions(this.route.snapshot.params);
    this.route.params.subscribe((params:Params)=>this.loadTransactions(params))
  }

  private loadTransactions(params:Params) {
    let activedAccountId = params[param_AccountId]
    let activedBankId = params[param_BankId]
    if (activedBankId != undefined)
      this.transactionList = this.transactionSrv.GetForBankById(activedBankId)
    else if (activedAccountId != undefined)
      this.transactionList = this.transactionSrv.GetForAccountById(activedAccountId);
    else
      this.transactionList = this.transactionSrv.GetAll();
  }
}
