<script lang="ts" setup>
  import Log from '@/utils/log'
  // watchEffect: 自动收集响应式的依赖
  const nameRef = ref('cat')
  const dayRef = ref(100)

  const changeName = () =>
    nameRef.value === 'cat' ? (nameRef.value = 'dog') : (nameRef.value = 'cat')

  // # part1
  const changeDay = () => dayRef.value++
  // 第一次就进行监听
  // watchEffect(() => {
  //   Log.out(`watchEffect - name - ${nameRef.value} - day - ${dayRef.value}`)
  // })

  // # part2
  // 组件卸载时去除在watchEffect里面的副作用，或者调用返回函数来清除
  // const stop = watchEffect((onInvalidate) => {
  //   Log.out(`watchEffect - name - ${nameRef.value} - day - ${dayRef.value}`)
  //   const timer = setInterval(() => {
  //     dayRef.value++
  //     Log.out(`watchEffect - ${dayRef.value}`)
  //   }, 1000)
  //   // 在入参函数里清除
  //   onInvalidate(() => {
  //     clearInterval(timer)
  //   })
  // })
  // 手动清除
  // const changeDay = () => {
  //   if (dayRef.value++ > 120) {
  //     stop()
  //   }
  // }

  // #part3
  // watchEffect也可以注入flush
  watchEffect(
    () => {
      Log.out('watchEffect - ', nameRef.value)
    },
    {
      /**
       * pre: 默认，数据更新时就触发
       * post: 视图更新结束后触发，nextTick
       * sync: 如果一个reactive对象里面的多个值被一起改变，将分别触发监听
       */
      flush: 'sync'
    }
  )
</script>

<template>
  <StoryLayout title="怎么使用WatchEffect" :just-tip="true">
    <template #story>
      <div
        class="
          container
          flex flex-col
          content-center
          justify-center
          items-center
          w-full
        "
      >
        <h2>{{ nameRef }}的第{{ dayRef }}天</h2>
        <a-button type="primary" class="mt-4" @click="changeName">
          修改name
        </a-button>
        <a-button type="primary" class="mt-4" @click="changeDay">
          day+1
        </a-button>
      </div>
    </template>
  </StoryLayout>
</template>

<style scoped></style>
