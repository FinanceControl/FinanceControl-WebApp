import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { param_BankId } from '../../../appRoutesConst';
import { BankModel } from '../../../model/bank.model';
import { BankService } from '../../../service/bank-srv/bank.service';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.sass']
})
export class BankEditComponent implements OnInit{
  public bank:BankModel|undefined = undefined
  constructor(private bankSrv:BankService, private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.loadBankModel(this.route.snapshot.params[param_BankId]);
    this.route.params.subscribe((params:Params)=>this.loadBankModel(params[param_BankId]))
  }

  private loadBankModel(bankId: number) {
    this.bank = this.bankSrv.GetById(bankId);
  }
}
