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
  [x: string]: any;
  @Input() bank: BankModel | undefined = undefined;

  public accountList: AccountModel[] = [];
  showAccounts: boolean = false
  constructor(private accountSrv:AccountService) {
  }

  ngOnInit(): void {
    this.accountList = this.accountSrv.GetByBankGuid(this.bank!.guid)
  }

  onClickCollapsed() {
    this.showAccounts = !this.showAccounts
  }
}
