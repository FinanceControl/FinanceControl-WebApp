import { Currency } from "../model/currency.model";
import { SourceService } from "./source.service";

export abstract class CurrencyService implements SourceService<Currency>{
  public abstract find(filter: string): Currency[]
  public abstract get(filter: string): Currency
  public abstract isExist(filter: string): boolean
}

export class MockCurrencyService implements CurrencyService {
  currency: Currency[] = []
  constructor() {
    this.currency.push({ code: "RUB", description: "Russian ruble" }, { code: "USD", description: "American dollar" }, { code: "USDT", description: "Cripto currency USD" })
  }
  public get(filter: string): Currency {
    let el = this.currency.find((el) => el.code == filter)
    if (el == undefined) {
      throw Error("Entered currency undefined")
    }
    return el
  }
  public isExist(filter: string): boolean {
    let uFilter = filter.toUpperCase()
    let el = this.currency.find((el) => el.code.toUpperCase() == uFilter)
    if (el == undefined) {
      return false
    }
    return true
  }

  public find(filter: string): Currency[] {
    if (filter == "") {
      return this.currency.slice()
    }
    return this.currency.filter((el) => el.code.includes(filter) || el.description.includes(filter))
  }

}