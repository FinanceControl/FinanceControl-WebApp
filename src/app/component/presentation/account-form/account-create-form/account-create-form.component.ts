import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AvaliableCurrency } from '../model/avaliable-currency.model';
import { AccountService } from '../service/account.service';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-account-create-form',
  templateUrl: './account-create-form.component.html',
  styleUrls: ['./account-create-form.component.sass']
})
export class AccountCreateFormComponent {
  avaliable_currency: AvaliableCurrency[] = []
  constructor(private currencyService: CurrencyService, private accountService: AccountService){
    this.avaliable_currency = currencyService.getAll()
  }

  onSubmit(form: NgForm) {
    let allowMultiStock = form.value["multiStock"] == true
    let currency = null
    if (!allowMultiStock){
      currency = form.value["currency"]
    }
    this.accountService.save({name:form.value["name"], allowMultiStock:allowMultiStock, currency:currency})
  }

}
