import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCreateFormComponent } from './stock-create-form/stock-create-form.component';
import { FormsModule } from '@angular/forms';
import { EmptyStockService, StockService } from './service/stock.service';



@NgModule({
  declarations: [
    StockCreateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StockCreateFormComponent
  ],
  providers:[{ provide: StockService, useClass: EmptyStockService }]
})
export class StockFormModule { }
