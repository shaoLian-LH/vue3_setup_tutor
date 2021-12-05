<script lang="ts" setup>
  // 搭配 READEME.md 食用
  import { ref, reactive, watch, watchEffect } from 'vue'
  const numberRef = ref(100)
  const state = reactive({
    name: 'xuemf',
    age: 20
  })
  watch(
    numberRef,
    (newNumber, oldNumber) => {
      console.log('ref watch', newNumber, oldNumber)
    },
    {
      immediate: false // 初始化之前就进行监听
    }
  )
  setTimeout(() => {
    numberRef.value = 200
  }, 1400)
  watch(
    () => state.age, // 只监听age
    (newState, oldState) => {
      // 返回只拿到和age相关的内容
      console.log('state watch', newState, oldState)
    }
  )
  setTimeout(() => {
    state.age = 21
    state.name = 'shaolian'
  }, 1600)
  watchEffect(
    () => {
      console.log('state', state.name)
    },
    {
      flush: 'sync'
    }
  )
</script>
<template></template>

<style></style>
