import { Component, Input } from '@angular/core';
import { TransactionModel } from '../../../../model/transaction.model';
import { TransactionViewModel } from '../transaction-view.model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.sass']
})
export class TransactionItemComponent {
  @Input() transaction: TransactionViewModel|undefined = undefined
}
