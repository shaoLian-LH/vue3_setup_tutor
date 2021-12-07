import { ITodoListData, dataInitial, storeData } from '@/utils/store'

export const useTodoList = (localStorageName?: string) => {
  let preparedData = dataInitial(localStorageName)
  // data
  const todoListData = reactive<ITodoListData>(preparedData)
  // 增加一个事件
  const submitAThing = () => {
    if (todoListData.thing) {
      const currentMax = todoListData.list.length
        ? Math.max(...todoListData.list.map((conf) => conf.id)) + 1
        : 0
      todoListData.list = todoListData.list.concat({
        id: currentMax,
        content: todoListData.thing
      })
      todoListData.thing = undefined
    }
  }
  // 移除一个事件
  const removeAThing = (id: number) => {
    const index = todoListData.list.findIndex((conf) => conf.id === id)
    todoListData.list.splice(index, 1)
  }
  // 监听list变化
  if (localStorageName) {
    watch(toRef(todoListData, 'list'), () => {
      storeData(localStorageName, todoListData)
    })
  }
  const { thing: thingRef, list: listRef } = toRefs(todoListData)
  return {
    thingRef,
    listRef,
    submitAThing,
    removeAThing
  }
}
