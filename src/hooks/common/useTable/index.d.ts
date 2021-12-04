export interface IPage {
  index?: number
  size?: number
}

export type SortOrder = 'ascend' | 'descend'
export interface ISort {
  primaryKey: string
  order: SortOrder
  compareFn: (a: unknown, b: unknown) => number
}

export interface ISearch {
  text: string
  isReg: boolean
  keys: string[]
}

export interface IDefaultParams {
  page?: Partial<Page>
  search?: Partial<Search>
  sort?: Partial<Sort>
}

export interface IParams {
  page: Page
  search: Search
  sort: Sort
}
