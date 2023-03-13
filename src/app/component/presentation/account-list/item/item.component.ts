import { Component, Input, OnInit } from '@angular/core';
import { AccountItem } from '../model/account-item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  @Input() accountItem: AccountItem | undefined = undefined;
  showChilds = false;
  childs: AccountItem[] = []

  ngOnInit(): void {
    if (this.accountItem?.hasChilds) {
      for (let index = 0; index < 5; index++) {
        this.childs.push(AccountItem.CreateRandom())
      }
    }
  }

  isPositiveBalance() {
    return this.accountItem != undefined && this.accountItem?.balance > 0;
  }

  isNegativeBalance() {
    return this.accountItem != undefined && this.accountItem?.balance < 0;
  }

  onItemClick() {
    this.showChilds = !this.showChilds
  }

  dropDownIconPath(): string {
    if (!this.showChilds && this.accountItem?.hasChilds) { return "assets/arrow-right.svg" }
    else if (this.showChilds && this.accountItem?.hasChilds) { return "assets/arrow-down.svg" }
    else if (!this.accountItem?.hasChilds) { return "assets/minus.svg" }
    console.error("Cann't define type of icon in item line, set default")
    return "assets/minus.svg"
  }

}
