<script lang="ts">
  import { defineComponent, getCurrentInstance } from 'vue'
  import Log from '@/utils/log'
  export default defineComponent({
    data() {
      return {
        test: '111'
      }
    },
    setup(props, context) {
      Log.out('vue3 - 1 setup', props, context)
    },
    // beforeCreate() {
    //   Log.clear().out(
    //     'vue3 - 1 beforeCreate',
    //     getCurrentInstance()?.props,
    //     getCurrentInstance()?.data
    //   )
    // },
    created() {
      Log.out(
        'vue3 - 1 created',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    beforeMount() {
      Log.out(
        'vue3 - 1 beforeMount',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    mounted() {
      Log.out(
        'vue3 - 1 mounted',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    beforeUpdate() {
      Log.out('vue3 - 1 beforeUpdate')
    },
    updated() {
      Log.out('vue3 - 1 updated')
    },
    beforeUnmount() {
      Log.out('vue3 - 1 beforeUnmount')
    },
    unmounted() {
      Log.out('vue3 - 1 unmounted')
    }
  })
</script>

<template>
  <StoryLayout title="Vue3的选择式生命周期" :justTip="true" />
</template>

<style></style>
