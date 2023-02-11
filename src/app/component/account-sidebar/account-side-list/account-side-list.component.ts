import { Component } from '@angular/core';
import { BankModel } from '../../../model/bank.model';
import { BankService } from '../../../service/bank-srv/bank.service';

@Component({
  selector: 'app-account-side-list',
  templateUrl: './account-side-list.component.html',
  styleUrls: ['./account-side-list.component.sass']
})
export class AccountSideListComponent {
  bankList: BankModel[] = []

  constructor(private bankSrv:BankService) {
    this.bankList = bankSrv.GetAll()
  }

  ngOnInit() {
  }
}
