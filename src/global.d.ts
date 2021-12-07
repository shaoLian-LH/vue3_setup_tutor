export interface IPageInfo<T> {
  pages: number
  pageSize: number
  list: T[]
  total: number
}
