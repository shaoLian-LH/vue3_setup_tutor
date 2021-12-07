<script lang="ts" setup>
  import { ITodoListData } from '@/utils/store'
  // import { cloneDeep } from 'lodash'
  import Log from '@/utils/log'
  // data
  const todoListData = reactive<ITodoListData>({
    thing: undefined,
    list: []
  })
  // 生成ref，建立引用关系
  const thingRef = toRef(todoListData, 'thing')
  const listRef = toRef(todoListData, 'list')
  // #part1
  // 建立监听
  // watch(
  //   thingRef, // toRef将建立一个响应式的对象，并保持引用
  //   (newThing, oldThing) => {
  //     Log.out(
  //       `watch thingRef - newThing - ${newThing} - oldThing - ${oldThing}`
  //     )
  //   },
  //   {
  //     immediate: false, // 初始化之前就进行监听，默认为false
  //     flush: 'pre' // 默认为pre，数据更新时就触发
  //   }
  // )

  // #part2
  // 监听单个源
  // watch(
  //   todoListData.list, // 只监听list
  //   (newList, oldList) => {
  //     // 返回只拿到和list相关的内容，但是因为响应式，两个都是一样的
  //     Log.out(`watch list - `, newList, oldList)
  //   }
  // )

  // #part3
  // 监听reactive的单个源（推荐）
  // watch(
  //   () => [...todoListData.list], // 只监听list
  //   (newList, oldList) => {
  //     // 返回只拿到和list相关的内容，我们在上面使用getter形式获取了解构，这边能正确拿到oldList
  //     Log.out(`watch list - `, newList, oldList)
  //   }
  // )

  // #part4
  // 深层监听reactive的某个非值变量源（deep + cloneDeep）
  // watch(
  //   () => cloneDeep(todoListData.list), // getter返回深拷贝内容
  //   (newList, oldList) => {
  //     Log.out(`watch list - `, newList, oldList)
  //   },
  //   {
  //     deep: true // 如果对象值里面还是对象值，为了完全侦听深度嵌套的对象和数组，我们需要同时设置deep与getter
  //   }
  // )

  // #part5
  // 监听一个响应式对象
  watch(
    () => ({ ...todoListData }), // 监听一整个对象，返回对应ref对象
    (
      { thing: newThing, list: newList },
      { thing: oldThing, list: oldList }
    ) => {
      Log.out(
        `watch todoListData - newThing - ${newThing} - newList - `,
        newList
      )
      Log.out(
        `watch todoListData - oldThing - ${oldThing} - oldList - `,
        oldList
      )
    },
    {
      immediate: false, // 初始化之前就进行监听，默认为false
      /**
       * pre: 默认，数据更新时就触发
       * post: 视图更新结束后触发，nextTick
       * sync: 如果一个reactive对象里面的多个值被一起改变，将分别触发监听
       */
      flush: 'post'
    }
  )

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
    const index = todoListData.list.findIndex((conf) => conf.id === id)
    todoListData.list.splice(index, 1)
  }
</script>

<template>
  <div class="container w-full flex flex-col justify-center content-center">
    <div class="container flex flex-row w-9/12 justify-between items-center">
      <span class="text-black w-2/12">我想要做</span>
      <a-input
        class="w-7/12"
        placeholder="来添加点什么"
        v-model:value="thingRef"
      />
      <a-button class="ml-8 w-1/12" @click="submitAThing" type="primary">
        添加
      </a-button>
    </div>
    <div class="container w-9/12">
      <a-list
        v-if="listRef.length"
        item-layout="horizontal"
        :data-source="listRef"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <div
              class="
                container
                flex flex-row
                w-full
                justify-start
                content-center
              "
            >
              <div class="container w-7/12">
                {{ item.content }}
              </div>
              <div class="container w-4/12 flex flex-row">
                <a-button type="primary" danger @click="removeAThing(item.id)">
                  <span>删除</span>
                </a-button>
              </div>
            </div>
          </a-list-item>
        </template>
      </a-list>
      <div v-else class="container flex py-4 justify-center content-center">
        加点什么
      </div>
    </div>
  </div>
</template>

<style></style>
