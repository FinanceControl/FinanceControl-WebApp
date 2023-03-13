import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { AccountListComponent } from './account-list/account-list.component';



@NgModule({
  declarations: [
    ItemComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountListComponent
  ]
})
export class AccountListModule { }
