import { Guid } from "guid-typescript";
export class AccountItem {
  constructor(public guid: Guid, public name: string, public currencyCode: string, public balance: number, public hasChilds: boolean) { }

  static CreateRandom(): AccountItem {
    let cur_rand = Math.random();
    let cur = "RUB"
    if (cur_rand < 0.3) {
      cur = "USD"
    } else if (cur_rand < 0.7) {
      cur = "EUR"
    }

    let negativeFactor_rand = Math.random()
    let negativeFactor = 0
    if (negativeFactor_rand < 0.4) {
      negativeFactor = 1
    } else if (negativeFactor_rand < 0.8) {
      negativeFactor = -1
    }

    return new AccountItem(Guid.create(), `ItemName_${Math.round(Math.random() * 100)}`, cur, negativeFactor * Math.round(Math.random() * 10000) / 100, Math.random() > 0.5)
  }
}