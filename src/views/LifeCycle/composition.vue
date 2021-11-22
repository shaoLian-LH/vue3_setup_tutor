<template></template>

<script lang="ts">
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
  } from 'vue'
  export default {
    setup(props: any) {
      console.log('props - ', props)
      onBeforeMount(() => {
        console.log('onBeforeMount')
      })
      onMounted(() => {
        console.log('onMounted')
      })
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
      })
      onUpdated(() => {
        console.log('onUpdated')
      })
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
      })
      onUnmounted(() => {
        console.log('onUnmounted')
      })
    },
    props: {
      msg: String
    }
  }
</script>

<style></style>
