export interface IThing {
  id: number
  content: string
}

export enum THING_STATUS {
  WAITING = 'WAITING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export interface IThingEnhanced extends IThing {
  status: THING_STATUS
}

export interface ITodoListData {
  thing: string | undefined
  list: IThing[]
}

export const dataInitial = (localStorageName?: string) => {
  if (localStorageName) {
    const preData = localStorage.getItem(
      `__USE_TODO_LIST_${localStorageName.toUpperCase()}__`
    )
    if (preData) {
      return {
        list: JSON.parse(preData).list,
        thing: undefined
      } as ITodoListData
    }
  }
  return {
    thing: undefined,
    list: []
  } as ITodoListData
}

export const storeData = (localStorageName: string, data: ITodoListData) => {
  localStorage.setItem(
    `__USE_TODO_LIST_${localStorageName.toUpperCase()}__`,
    JSON.stringify({
      list: data.list,
      thing: undefined
    })
  )
}
