import { Component, Input } from '@angular/core';
import { AccountModel } from '../../../../model/account.model';

@Component({
  selector: 'app-account-side-item',
  templateUrl: './account-side-item.component.html',
  styleUrls: ['./account-side-item.component.sass']
})
export class AccountSideItemComponent {
  @Input() account: AccountModel | undefined = undefined

}
