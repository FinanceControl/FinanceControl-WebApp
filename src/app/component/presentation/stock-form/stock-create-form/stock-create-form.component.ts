import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockType } from '../model/stock-type.model';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-stock-create-form',
  templateUrl: './stock-create-form.component.html',
  styleUrls: ['./stock-create-form.component.sass'],
  
})
export class StockCreateFormComponent {

  stock_types: StockType[] = [{ key: "currency", name: "Currency" }, { key: "stock", name: "Stock" }]
  defaultStock: string = this.stock_types[0].key;

  constructor(private stockService:StockService){

  }

  onSubmit(form: NgForm) {
    this.stockService.save({code: form.value["code"], name:form.value["name"], type:form.value["type"]})
  }

}
