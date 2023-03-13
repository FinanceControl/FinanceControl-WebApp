import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Transaction } from '../model/transaction.model';
import { TransactionSourceService } from '../service/transaction-source.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent implements OnInit {

  @Input() accountGuid: Guid | undefined;
  transactions: Transaction[] = []
  constructor(private transactionService:TransactionSourceService){ }

  ngOnInit(): void {
    this.transactions = this.transactionService.get(this.accountGuid!)
  }
}
