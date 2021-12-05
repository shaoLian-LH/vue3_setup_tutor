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
      Log.out('vue3 - 2 setup', props, context)
      onBeforeMount(() => {
        Log.out('vue3 - 2 onBeforeMount', props, context)
      })
      onMounted(() => {
        Log.out('vue3 - 2 onMounted', props, context)
      })
      onBeforeUpdate(() => {
        Log.out('vue3 - 2 onBeforeUpdate', props, context)
      })
      onUpdated(() => {
        Log.out('vue3 - 2 onUpdated', props, context)
      })
      onBeforeUnmount(() => {
        Log.out('vue3 - 2 onBeforeUnmount', props, context)
      })
      onUnmounted(() => {
        Log.out('vue3 - 2 onBeforeUnmount', props, context)
      })
    },
    beforeCreate() {
      Log.out(
        'vue3 - 2 beforeCreate',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    created() {
      Log.out(
        'vue3 - 2 created',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    beforeMount() {
      Log.out(
        'vue3 - 2 beforeMount',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    mounted() {
      Log.out(
        'vue3 - 2 mounted',
        getCurrentInstance()?.props,
        getCurrentInstance()?.data
      )
    },
    beforeUpdate() {
      Log.out('vue3 - 2 beforeUpdate')
    },
    updated() {
      Log.out('vue3 - 2 updated')
    },
    beforeUnmount() {
      Log.out('vue3 - 2 beforeUnmount')
    },
    unmounted() {
      Log.out('vue3 - 2 unmounted')
    }
  })
</script>

<template>
  <StoryLayout title="Vue3的选择式生命周期带setup" :justTip="true" />
</template>

<style></style>
