import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { TransactionItem } from "../model/item-position.model";
import { TransactionPositionItemFormCtrl } from "../transaction-position-item/transaction-position-item.formctrl";

export class TransactionPositionFormCtrl extends FormGroup<{
  debit: TransactionPositionArrFormCtrl,
  credit: TransactionPositionArrFormCtrl
}>{
  constructor(fb: FormBuilder) {
    super({
      debit: new TransactionPositionArrFormCtrl(fb),
      credit: new TransactionPositionArrFormCtrl(fb)
    })
  }

  toModel(): TransactionItem[] {
    return this.controls.debit.toModel().concat(this.controls.credit.toModel()) 
  }
}

export class TransactionPositionArrFormCtrl extends FormArray<TransactionPositionItemFormCtrl>{
  constructor(fb: FormBuilder) {
    super([])
  }

  toModel(): TransactionItem[] {
    return <TransactionItem[]>this.controls.map((el) => el.toModel()).filter((el)=> el != null)
  }
}