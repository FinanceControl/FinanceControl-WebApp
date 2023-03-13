import { Component } from '@angular/core';
import { SavingModel } from 'src/app/model/saving.model';
import { BankService } from 'src/app/service/bank-srv/bank.service';
import { SavingService } from 'src/app/service/saving/saving.service';
import { AccountItem } from '../presentation/account-list/model/account-item.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent {
  items: AccountItem[] = []
  constructor(private bankSrv: BankService, private savingSrv: SavingService) {
    for (let index = 0; index < 10; index++) {
      this.items.push(AccountItem.CreateRandom())
    }
  }
}
