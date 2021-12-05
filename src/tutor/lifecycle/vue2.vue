<script lang="ts">
  import { defineComponent, getCurrentInstance } from 'vue'
  import Log from '@/utils/log'
  export default defineComponent({
    data() {
      return {
        test: '111'
      }
    },
    beforeCreate() {
      Log.out(
        'vue2 beforeCreate',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    created() {
      Log.out(
        'vue2 created',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    beforeMount() {
      Log.out(
        'vue2 beforeMount',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    mounted() {
      Log.out(
        'vue2 mounted',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    beforeUpdate() {
      Log.out('vue2 beforeUpdate')
    },
    updated() {
      Log.out('vue2 updated')
    },
    beforeUnmount() {
      Log.out('vue2 beforeUnmount')
    },
    unmounted() {
      Log.out('vue2 unmounted')
    }
  })
</script>

<template>
  <StoryLayout title="Vue2的生命周期" :justTip="true" />
</template>

<style></style>
