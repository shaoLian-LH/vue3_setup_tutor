<script lang="ts" setup>
  import { ref, reactive, onMounted } from 'vue'
  const ageRef = ref(20) // 值类型是Number，响应式的对象
  const nameRef = ref('shaoLian') // 值类型是String，响应式的对象

  const state = reactive({
    age: ageRef,
    name: nameRef
  })

  setTimeout(() => {
    ageRef.value = 21 // 使用.value修改值
    nameRef.value = 'shaoLianFK'
  }, 3500)

  onMounted(() => {
    const myDomRef = ref<null | HTMLSpanElement>(null)
    console.log('myDomRef - innerHTML - ', myDomRef.value?.innerHTML)
  })
</script>
<template>
  <p>{{ ageRef }}</p>
  <p>{{ nameRef }}</p>
  <p>{{ state }}</p>
  <p ref="myDomRef">myDom</p>
</template>

<style></style>
