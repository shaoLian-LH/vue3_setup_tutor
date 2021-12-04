import { Ref, ComputedRef } from 'vue'
import { IParams, IDefaultParams, IPage, ISort, ISearch } from './index.d'

const defaultCompareFn = (a: any, b: any) => {
  return a < b ? -1 : 1
}

const defaultParams: IParams = {
  page: {
    index: 1,
    size: 10
  },
  search: {
    text: '',
    isReg: false,
    keys: [] as string[]
  },
  sort: {
    key: '',
    direction: 'ascend',
    compareFn: defaultCompareFn
  }
}

// 表格通用 hook
export const useTable = <T>(
  data: Ref<T[]> | T[],
  options?: IDefaultParams
): {
  data: Ref<T[]>
  page: Ref<IPage>
  sort: Ref<ISort>
  search: Ref<ISearch>
  pagedData: ComputedRef<T[]>
  total: ComputedRef<number>
} => {}
