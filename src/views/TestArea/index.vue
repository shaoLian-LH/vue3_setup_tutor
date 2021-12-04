<template>
  <!-- <Watch /> -->
  <!-- <NormalComponent /> -->
  <span>{{ info.name }} {{ info.age }}</span>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  const test = reactive({
    info: {
      name: 'xuemf',
      age: 21
    }
  })
  const { info } = test
  console.log('info from test - ', info)
  setTimeout(() => {
    info.name = 'shaolian'
    info.age = 22
  }, 2500)
</script>

<style></style>
