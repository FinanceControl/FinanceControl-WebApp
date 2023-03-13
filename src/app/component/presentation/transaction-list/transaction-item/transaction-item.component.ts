import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import { TransactionSourceService } from '../service/transaction-source.service';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.sass']
})
export class TransactionItemComponent implements OnInit {


  @Input() transaction: Transaction | undefined

  constructor(private transactionService: TransactionSourceService) {

  }

  ngOnInit(): void {
    console.log(`TransactionItemComponent recieve:`)
    console.log(this.transaction)
  }
  onTransactionSelected() {
    this.transactionService.onTransactionSelected.emit(this.transaction!.guid)
  }
}
