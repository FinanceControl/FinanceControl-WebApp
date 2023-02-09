import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from  '../../../../model/account.model';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.sass']
})
export class AccountItemComponent implements OnInit {

  @Input() account: AccountModel | undefined = undefined

  constructor(private router: Router){}

  ngOnInit(): void {

  }

}
