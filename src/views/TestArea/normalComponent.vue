<template>
  <h1>get Instance</h1>
  <p>Composition, x : {{ x }}, y: {{ y }}</p>
</template>

<script lang="ts">
  import { defineComponent, getCurrentInstance, onBeforeMount } from 'vue'
  export default defineComponent({
    setup() {
      const instance = getCurrentInstance()
      // 但是在这个时候是拿不到实例上的data的，我们需要至少在 onBeforeMount 中获取
      onBeforeMount(() => {
        console.log('this component.data - ', instance?.data)
      })
    },
    data() {
      return {
        x: 1,
        y: 2
      }
    }
  })
</script>

<style></style>
