import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './appRoutes';
import { TestComponent } from './component/test/test.component';
import { AccountListModule } from './component/presentation/account-list/account-list.module';
import { AccountCreateModule } from './component/presentation/account-form/account-form.module';
import { StockFormModule } from './component/presentation/stock-form/stock-form.module';
import { TransactionFormModule } from './component/presentation/transaction-form/transaction-form.module';
import { TransactionListModule } from './component/presentation/transaction-list/transaction-list.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AccountListModule,
    AccountCreateModule,
    StockFormModule,
    TransactionFormModule,
    TransactionListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
