import { Stock } from "../model/stock.model";

export abstract class StockService {
  public abstract save(newStock:Stock):boolean
}

export class EmptyStockService implements StockService {
  save(newStock: Stock): boolean {
    console.log(`Get request to save new stock: ${JSON.stringify(newStock)}`)
    return true
  }

}