import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BankModel } from '../../model/bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private bankList: BankModel[] = []
  private static bankId:number = 0
  constructor() {
    BankService.bankId +=1
    this.bankList.push(new BankModel(BankService.bankId, Guid.create(), "BKC", BankService.bankId * 10));
    BankService.bankId +=1
    this.bankList.push(new BankModel(BankService.bankId, Guid.create(), "Тиньков", BankService.bankId * 10));
    BankService.bankId +=1
    this.bankList.push(new BankModel(BankService.bankId, Guid.create(), "Наличные", BankService.bankId * 10));
  }

  public GetAll(): BankModel[] {
    return this.bankList.slice();
  }

  public GetByGuid(bankGuid: Guid): BankModel {
    return this.bankList.find((val, idx, arr) => val.guid == bankGuid)!
  }
  public GetById(bankId: number): BankModel {
    return this.bankList.find((val, idx, arr) => val.id == bankId)!
  }
}
