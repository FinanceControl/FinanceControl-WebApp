import { formatDate } from "@angular/common"
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { TransactionHeader } from "../model/transacion-header.model"

export class TransactionHeaderFormCtrl extends FormGroup<{
  date: FormControl<string>,
  description: FormControl<string>
}>{
  constructor(fb: FormBuilder) {
    super({
      date: fb.nonNullable.control(formatDate(Date.now(), "yyyy-MM-dd", 'en'), [Validators.required]),
      description: fb.nonNullable.control("")
    })
  }
  
  toModel():TransactionHeader{
    return {date: this.value.date!, description: this.value.description!}
  }
}