import { AvaliableCurrency } from "../model/avaliable-currency.model"

export abstract class CurrencyService {
  public abstract getAll():AvaliableCurrency[]
}

export class MockCurrencyService implements CurrencyService {
  public getAll(): AvaliableCurrency[] {
    return [{code:"RUB", name:"Rubble"}, {code:"USD", name:"Ammerican Dollar"}]
  }
}