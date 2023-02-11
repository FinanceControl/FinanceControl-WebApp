import { Component, Input } from '@angular/core';
import { AccountModel } from '../../../../model/account.model';
import { BankModel } from '../../../../model/bank.model';
import { AccountService } from '../../../../service/account-srv/account.service';

@Component({
  selector: 'app-account-side-group',
  templateUrl: './account-side-group.component.html',
  styleUrls: ['./account-side-group.component.sass']
})
export class AccountSideGroupComponent {
  @Input() bank: BankModel | undefined = undefined;

  public accountList: AccountModel[] = [];

  constructor(private accountSrv:AccountService) {
  }

  ngOnInit(): void {
    this.accountList = this.accountSrv.GetByBankGuid(this.bank!.guid)
  }
}
