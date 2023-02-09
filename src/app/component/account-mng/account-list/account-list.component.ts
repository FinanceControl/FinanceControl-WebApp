import { Component } from '@angular/core';
import { BankModel } from '../../../model/bank.model';
import { BankService } from '../../../service/bank-srv/bank.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.sass']
})
export class AccountListComponent {
  bankList: BankModel[] = []

  constructor(private bankSrv:BankService) {
    this.bankList = bankSrv.GetAll()
  }

  ngOnInit() {
  }
}
