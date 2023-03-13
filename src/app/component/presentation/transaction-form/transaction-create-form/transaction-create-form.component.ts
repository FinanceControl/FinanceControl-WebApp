import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgModelGroup, Validators } from '@angular/forms';
import { TransactionModel } from 'src/app/model/transaction.model';
import { Transaction } from '../model/transaction.model';
import { TransactionService } from '../service/transaction.service';
import { TransactionFormCtrl } from './transaction-create-form.formctrl';

@Component({
  selector: 'app-transaction-create-form',
  templateUrl: './transaction-create-form.component.html',
  styleUrls: ['./transaction-create-form.component.sass']
})
export class TransactionCreateFormComponent implements OnInit {

  transactionForm: TransactionFormCtrl | undefined;

  constructor(private fb: FormBuilder, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionForm = new TransactionFormCtrl(this.fb)
  }

  onSubmit() {
    let newTransaction: Transaction = this.transactionForm!.toModel()
    this.transactionService.save(newTransaction)
  }
}

