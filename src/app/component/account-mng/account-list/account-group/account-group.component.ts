import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../../../service/account-srv/account.service';
import { AccountModel } from '../../../../model/account.model';
import { BankModel } from '../../../../model/bank.model';

@Component({
  selector: 'app-account-group',
  templateUrl: './account-group.component.html',
  styleUrls: ['./account-group.component.sass']
})
export class AccountGroupComponent implements OnInit {
  @Input() bank: BankModel | undefined = undefined;

  public accountList: AccountModel[] = [];

  constructor(private accountSrv:AccountService) {
  }

  ngOnInit(): void {
    this.accountList = this.accountSrv.GetByBankGuid(this.bank!.guid)
  }
}
