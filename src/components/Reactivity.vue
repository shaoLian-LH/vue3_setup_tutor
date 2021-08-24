<template>
  <p>我是ref的counter：{{ refCounter }}</p>
  <p>我是{{ refObj.name }}的name, 我的number：{{ refObj.number }}</p>
  <button @click="counter">点我+1</button>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  const refCounter = ref(0) // 使用ref管理一个变量
  const refObj = reactive({
    number: 0,
    name: 'refObj'
  }) // 使用reactive管理一个对象

  const counter = () => {
    refCounter.value = refCounter.value + 1 // 更改Ref对象，需要指定它的value
    refObj.number = refObj.number + 1 // 更改reactive对象，可以按照普通对象对待
  }
</script>
