import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ItemType } from '../model/item-position.model';
import { AccountService } from '../service/account.service';
import { CurrencyService } from '../service/currency.service';
import { TransactionPositionItemFormCtrl } from '../transaction-position-item/transaction-position-item.formctrl';
import { TransactionPositionFormCtrl } from './transaction-position.formctrl';

@Component({
  selector: 'app-transaction-position',
  templateUrl: './transaction-position.component.html',
  styleUrls: ['./transaction-position.component.sass']
})
export class TransactionPositionComponent implements OnInit {

  @Input() formData: TransactionPositionFormCtrl | undefined
  constructor(private fb: FormBuilder, private accountService: AccountService, private currencyService: CurrencyService) {

  }

  ngOnInit(): void {
    this.onAddDebit();
    this.onAddCredit();
  }

  onAddDebit() {
    this.formData!.controls.debit.push(new TransactionPositionItemFormCtrl(this.fb, this.accountService, this.currencyService, ItemType.Debit))
  }
  onAddCredit() {
    this.formData!.controls.credit.push(new TransactionPositionItemFormCtrl(this.fb, this.accountService, this.currencyService, ItemType.Credit))
  }
  onDebitRemoved($event: TransactionPositionItemFormCtrl) {
    this.onItemRemoved(this.formData!.controls.debit, $event)
  }
  onCreditRemoved($event: TransactionPositionItemFormCtrl) {
    this.onItemRemoved(this.formData!.controls.credit, $event)
  }
  onItemRemoved(FormArrayCtrl: FormArray<TransactionPositionItemFormCtrl>, $event: TransactionPositionItemFormCtrl) {
    const index = FormArrayCtrl.controls.indexOf($event, 0);
    if (index < 0) {
      throw new Error("Cannot find TransactionPositionItemFormCtrl to delete");
    }
    FormArrayCtrl.controls.splice(index, 1);
  }

}
