import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreateFormComponent } from './account-create-form/account-create-form.component';
import { FormsModule } from '@angular/forms';
import { CurrencyService, MockCurrencyService } from './service/currency.service';
import { AccountService, MockAccountService } from './service/account.service';

@NgModule({
  declarations: [
    AccountCreateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AccountCreateFormComponent
  ],
  providers: [{provide: CurrencyService, useClass:MockCurrencyService}, {provide:AccountService, useClass:MockAccountService}],
})
export class AccountCreateModule { }
