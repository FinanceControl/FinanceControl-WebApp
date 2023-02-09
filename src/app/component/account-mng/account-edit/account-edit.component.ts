import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { param_AccountId } from '../../../appRoutesConst';
import { AccountModel } from  '../../../model/account.model';
import { BankModel } from '../../../model/bank.model';
import { AccountService } from '../../../service/account-srv/account.service';
import { BankService } from '../../../service/bank-srv/bank.service';
@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.sass']
})
export class AccountEditComponent implements OnInit {

  public account:AccountModel|undefined = undefined;
  public bank:BankModel|undefined = undefined
  constructor(private accountSrv:AccountService, private bankSrv:BankService, private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.loadAccountModel(this.route.snapshot.params[param_AccountId]);
    this.route.params.subscribe((params:Params)=>this.loadAccountModel(params[param_AccountId]))
  }

  private loadAccountModel(accountId: number) {
    this.account = this.accountSrv.GetById(accountId);
    this.bank = this.bankSrv.GetByGuid(this.account.bankGuid);
  }
}
