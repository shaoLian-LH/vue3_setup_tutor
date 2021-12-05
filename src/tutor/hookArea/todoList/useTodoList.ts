interface IThing {
  id: number
  content: string
}
interface ITodoListData {
  thing: string | undefined
  list: IThing[]
}

export const useTodoList = () => {
  // data
  const todoListData = reactive<ITodoListData>({
    thing: undefined,
    list: []
  })
  // 增加一个事件
  const submitAThing = () => {
    if (todoListData.thing) {
      const currentMax = todoListData.list.length
        ? Math.max(...todoListData.list.map((conf) => conf.id)) + 1
        : 0
      todoListData.list.push({
        id: currentMax,
        content: todoListData.thing
      })
      todoListData.thing = undefined
    }
  }
  // 移除一个事件
  const removeAThing = (id: number) => {
    todoListData.list = todoListData.list.filter((conf) => conf.id !== id)
  }
  return {
    ...toRefs(todoListData),
    submitAThing,
    removeAThing
  }
}
