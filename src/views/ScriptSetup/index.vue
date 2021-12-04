<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import Child from './child.vue'
  // 顶级变量，直接可以用在template
  const countRef = ref(100)

  const handleChange = () => {
    console.log('countRef change - ', countRef.value)
  }

  const handleDelete = () => {
    console.log('countRef change - ', countRef.value)
  }
  const childRef = ref(null)
  onMounted(() => {
    // 获取child信息
    console.log(childRef.value)
  })
</script>

<template>
  <span>{{ countRef }}</span>
  <Child
    ref="childRef"
    name="xuemf"
    :age="32"
    @change="handleChange"
    @delete="handleDelete"
  />
</template>

<style></style>
