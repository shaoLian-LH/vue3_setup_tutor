<script lang="ts" setup>
  import { ref, defineProps, defineEmits, defineExpose } from 'vue'
  import { IChildProps } from './child'
  // 顶级变量，直接可以用在template
  const countRef = ref(100)
  // 定义属性
  const props = defineProps<IChildProps>()
  // 定义方法
  const emits = defineEmits(['change', 'delete'])
  const deleteHandler = () => {
    emits('delete')
  }

  // 暴露组件信息
  defineExpose({
    countRef
  })
</script>

<template>
  <span>{{ countRef }}</span>
  <p>prop name - {{ props.name }}</p>
  <p>prop age - {{ props.age }}</p>
  <button @click="$emit('change')">change</button>
  <button @click="deleteHandler">change</button>
</template>

<style></style>
