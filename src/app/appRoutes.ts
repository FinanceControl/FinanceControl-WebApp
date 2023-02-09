import { TransactionListComponent } from './component/transaction-mng/transaction-list/transaction-list.component';
import { AccountEditComponent } from './component/account-mng/account-edit/account-edit.component';
import { BankEditComponent } from './component/account-mng/bank-edit/bank-edit.component';
import { Routes } from '@angular/router';
import { param_BankId, param_AccountId } from './appRoutesConst';

export const appRoutes: Routes = [
  { path: "", component: TransactionListComponent },
  { path: `bank/:${param_BankId}`, component: BankEditComponent },
  { path: `bank/:${param_BankId}/transaction`, component: TransactionListComponent },
  { path: "account", component: TransactionListComponent },
  { path: `account/:${param_AccountId}`, component: AccountEditComponent },
  { path: `account/:${param_AccountId}/transaction`, component: TransactionListComponent },
  { path: "transaction", component: TransactionListComponent }
];
