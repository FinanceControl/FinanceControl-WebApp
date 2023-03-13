import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Account } from '../model/account.model';
import { Currency } from '../model/currency.model';
import { TransactionItem } from '../model/item-position.model';
import { AccountService } from '../service/account.service';
import { CurrencyService } from '../service/currency.service';
import { TransactionPositionItemFormCtrl } from './transaction-position-item.formctrl';

@Component({
  selector: 'app-transaction-position-item',
  templateUrl: './transaction-position-item.component.html',
  styleUrls: ['./transaction-position-item.component.sass']
})
export class TransactionPositionItemComponent implements OnInit, OnDestroy {
  @Input() position: number | undefined;
  @Input() formData: TransactionPositionItemFormCtrl | undefined
  @Output() removed = new EventEmitter<TransactionPositionItemFormCtrl>();
  avaliable_accounts: Account[] = []
  avaliable_currencies: Currency[] = []
  subscriptions: Subscription[] = []
  setted_account: Account | undefined = undefined

  constructor(private accountService: AccountService, private currencyService: CurrencyService) {
    this.onAccountChanged("")
    this.onCurrencyChanged("")
  }

  ngOnInit(): void {
    this.subscriptions.push(this.formData!.controls.account.valueChanges.subscribe((v) => this.onAccountChanged(v)))
    this.subscriptions.push(this.formData!.controls.currency.valueChanges.subscribe((v) => this.onCurrencyChanged(v)))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((el) => el.unsubscribe())
  }

  onAccountChanged(new_value: string) {
    this.avaliable_accounts = this.accountService.find(new_value);
  }

  onCurrencyChanged(new_value: string) {
    this.avaliable_currencies = this.currencyService.find(new_value)
  }

  onAccountSetted() {
    if (this.formData?.controls.account.valid) {
      this.setted_account = this.accountService.get(this.formData.value.account!)
      this.formData.controls.currency.setValue(this.setted_account.defaultCurrency)
    } else {
      this.setted_account = undefined
    }
  }

  isHelpBlockNeed(formCtrl: AbstractControl): boolean {
    return !formCtrl.valid && formCtrl.touched
  }
  raiseRemovedEvent() {
    this.removed.emit(this.formData)
  }

  uniqueComponentId(): string {
    return `${this.formData?.value.type}+${this.position!}`
  }


}
