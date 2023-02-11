import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AccountListComponent } from './component/account-mng/account-list/account-list.component';
import { AccountItemComponent } from './component/account-mng/account-list/account-item/account-item.component';
import { AccountGroupComponent } from './component/account-mng/account-list/account-group/account-group.component';
import { TransactionListComponent } from './component/transaction-mng/transaction-list/transaction-list.component';
import { TransactionItemComponent } from './component/transaction-mng/transaction-list/transaction-item/transaction-item.component';
import { AccountEditComponent } from './component/account-mng/account-edit/account-edit.component';
import { BankEditComponent } from './component/account-mng/bank-edit/bank-edit.component';
import { TransactionEditComponent } from './component/transaction-mng/transaction-edit/transaction-edit.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './appRoutes';
import { AccountSideListComponent } from './component/account-sidebar/account-side-list/account-side-list.component';
import { AccountSideGroupComponent } from './component/account-sidebar/account-side-list/account-side-group/account-side-group.component';
import { AccountSideItemComponent } from './component/account-sidebar/account-side-list/account-side-item/account-side-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountListComponent,
    AccountItemComponent,
    TransactionListComponent,
    TransactionItemComponent,
    AccountGroupComponent,
    AccountEditComponent,
    BankEditComponent,
    TransactionEditComponent,
    AccountSideListComponent,
    AccountSideGroupComponent,
    AccountSideItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
