<template>
  <p>{{ numberRef }}</p>
  <p>{{ name }} {{ age }}</p>
</template>

<script lang="ts">
  import { reactive, toRefs, watchEffect, defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const numberRef = ref(100)
      const state = reactive({
        name: 'xuemf',
        age: 20
      })
      // 初始化的时候一定会执行一次
      watchEffect(
        () => {
          console.log('state', state.name)
        },
        {
          flush: 'sync'
        }
      )

      return {
        numberRef,
        ...toRefs(state)
      }
    }
  })
</script>

<style></style>
