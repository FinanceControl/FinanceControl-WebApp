import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { MockTransactionSourceService, TransactionSourceService } from './service/transaction-source.service';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';



@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TransactionListComponent
  ],
  providers: [
    {provide: TransactionSourceService, useClass: MockTransactionSourceService}]
})
export class TransactionListModule { }
