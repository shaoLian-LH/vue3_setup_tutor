<script lang="ts">
  import { defineComponent } from 'vue'
  import Log from '@/utils/log'
  export default defineComponent({
    setup(props, context) {
      Log.out('vue3 - 3 setup', props, context)
      onBeforeMount(() => {
        Log.out('vue3 - 3 onBeforeMount', props, context)
      })
      onMounted(() => {
        Log.out('vue3 - 3 onMounted', props, context)
      })
      onBeforeUpdate(() => {
        Log.out('vue3 - 3 onBeforeUpdate', props, context)
      })
      onUpdated(() => {
        Log.out('vue3 - 3 onUpdated', props, context)
      })
      onBeforeUnmount(() => {
        Log.out('vue3 - 3 onBeforeUnmount', props, context)
      })
      onUnmounted(() => {
        Log.out('vue3 - 3 onUnmounted', props, context)
      })
    }
  })
</script>

<template>
  <StoryLayout title="Vue3 setup hook" :justTip="true" />
</template>

<style></style>
