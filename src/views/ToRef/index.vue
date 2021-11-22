<script lang="ts" setup>
  import { reactive, toRef } from 'vue'
  const state = reactive({
    age: 20,
    name: 'shaoLian'
  })
  const ageRef = toRef(state, 'age') // toRef注入响应式对象将获得引用的特性，普通对象则没用

  setTimeout(() => {
    state.age = 30 // 双向的引用方式，将会影响到ageRef
  }, 2500)

  setTimeout(() => {
    ageRef.value = 40 // 双向的引用方式，将会影响到state.age
  })
</script>
<template>
  <p>tp Ref - {{ ageRef }} - {{ state.name }} {{ state.age }}</p>
</template>

<style></style>
