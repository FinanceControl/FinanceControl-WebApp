import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-header',
  templateUrl: './transaction-header.component.html',
  styleUrls: ['./transaction-header.component.sass']
})
export class TransactionHeaderComponent {

  @Input() formData: FormGroup<{
    date: FormControl<string>,
    description: FormControl<string>
  }> | undefined

}
