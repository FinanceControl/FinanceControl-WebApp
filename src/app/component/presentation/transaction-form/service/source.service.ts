export interface SourceService<T> {
  find(filter: string): T[]
  get(filter: string): T
  isExist(filter: string): boolean
}