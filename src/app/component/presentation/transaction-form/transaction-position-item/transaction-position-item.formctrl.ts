import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from "@angular/forms"
import { Guid } from "guid-typescript";
import { ItemType, TransactionItem } from "../model/item-position.model";

import { AccountService } from "../service/account.service";
import { CurrencyService } from "../service/currency.service";

export class TransactionPositionItemFormCtrl extends FormGroup<{
  guid: FormControl<Guid>,
  type: FormControl<ItemType>,
  account: FormControl<string>,
  amount: FormControl<number>,
  currency: FormControl<string>
}>{
  constructor(fb: FormBuilder, private accountService: AccountService, private currencyService: CurrencyService, itemType: ItemType) {
    super({
      guid: fb.nonNullable.control(Guid.create(), [Validators.required]),
      type: fb.nonNullable.control(itemType, [Validators.required]),
      account: fb.nonNullable.control("", [TransactionPositionItemFormCtrl.accountNameIsExist(accountService)]),
      amount: fb.nonNullable.control(0, [TransactionPositionItemFormCtrl.amountIsPositive()]),
      currency: fb.nonNullable.control("", [TransactionPositionItemFormCtrl.currencyCodeIsExist(currencyService)])
    }, [TransactionPositionItemFormCtrl.positionIsCorrect()])
  }

  toModel(): TransactionItem|null {
    if (this.value.account == "") return null;
    return { guid: this.value.guid!, type:this.value.type!, account: this.accountService.get(this.value.account!).guid, amount: this.value.amount!, currency: this.value.currency!}
  }

  static accountNameIsExist(accountService: AccountService): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == "") return null;
      if (accountService.isExist(control.value)) return null;
      return { "AccountNameUnknown": true };
    };
  }

  static currencyCodeIsExist(currencyService: CurrencyService): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == "") return null;
      if (currencyService.isExist(control.value)) return null;
      return { "AccountNameUnknown": true };
    };
  }
  static amountIsPositive(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == "" || control.value > 0) return null;
      return { "AmountMistake": true };
    };
  }
  static positionIsCorrect(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let itemCtrl = <AbstractControl<{ account: string, amount: number, currency: string }>>control
      if (itemCtrl.value.account == "" && itemCtrl.value.amount == 0) return null
      let error: ValidationErrors = {}
      if (itemCtrl.value.amount == 0) error["ZeroAmount"] = true
      if (itemCtrl.value.currency == "") error["CurrencyNotSetted"] = true
      if (itemCtrl.value.account == "") error["AmountNotSetted"] = true
      if (Object.keys(error).length == 0) return null
      return error
    }
  }
}
