import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionCreateFormComponent } from './transaction-create-form/transaction-create-form.component';
import { TransactionHeaderComponent } from './transaction-header/transaction-header.component';
import { TransactionPositionComponent } from './transaction-position/transaction-position.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionPositionItemComponent } from './transaction-position-item/transaction-position-item.component';
import { AccountService, MockAccountService } from './service/account.service';
import { CurrencyService, MockCurrencyService } from './service/currency.service';
import { MockTransactionService, TransactionService } from './service/transaction.service';



@NgModule({
  declarations: [
    TransactionCreateFormComponent,
    TransactionHeaderComponent,
    TransactionPositionComponent,
    TransactionPositionItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TransactionCreateFormComponent
  ],
  providers: [
    { provide: AccountService, useClass: MockAccountService },
    { provide: CurrencyService, useClass: MockCurrencyService },
    { provide: TransactionService, useClass: MockTransactionService }]
})
export class TransactionFormModule { }
