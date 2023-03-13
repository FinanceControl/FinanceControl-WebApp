
import { Routes } from '@angular/router';
import { param_BankId, param_AccountId } from './appRoutesConst';
import { TestComponent } from './component/test/test.component';

export const appRoutes: Routes = [
  //{ path: "", component: TransactionListComponent },
  //{ path: `bank/:${param_BankId}`, component: BankEditComponent },
  //{ path: `bank/:${param_BankId}/transaction`, component: TransactionListComponent },
  //{ path: "account", component: AccountListComponent },
  //{ path: `account/:${param_AccountId}`, component: AccountEditComponent },
  //{ path: `account/:${param_AccountId}/transaction`, component: TransactionListComponent },
  //{ path: "transaction", component: TransactionListComponent },
  { path: "test", component: TestComponent }
];
