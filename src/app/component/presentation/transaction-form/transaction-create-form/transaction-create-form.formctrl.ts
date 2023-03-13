import { FormBuilder, FormGroup } from "@angular/forms"
import { Transaction } from "../model/transaction.model"
import { TransactionHeaderFormCtrl } from "../transaction-header/transaction-header.formctrl"
import { TransactionPositionFormCtrl } from "../transaction-position/transaction-position.formctrl"

export class TransactionFormCtrl extends FormGroup<{
  header: TransactionHeaderFormCtrl,
  positions: TransactionPositionFormCtrl
}>{
  constructor(fb: FormBuilder) {
    super({
      header: new TransactionHeaderFormCtrl(fb),
      positions: new TransactionPositionFormCtrl(fb)
    })
  }
  
  toModel():Transaction{
    return { header: this.controls.header.toModel(), items: this.controls.positions.toModel() }
  }
}