import { Component, Input } from '@angular/core';
import { AccountItem } from '../model/account-item.model';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.sass']
})
export class AccountListComponent {
  @Input() itemList: AccountItem[] | undefined = undefined;
}
