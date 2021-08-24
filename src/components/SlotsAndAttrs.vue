<template>
  <div>
    SlotsAndAttrs
    <slot name="custom"></slot>
    <slot></slot>
    <slot name="dataSlot" :data="data.list"></slot>
  </div>
</template>

<script lang="ts" setup>
  import { useSlots, useAttrs, onMounted, reactive } from 'vue'
  const log = console
  const slots = useSlots()
  const attrs = useAttrs()

  interface AttrsProsp {
    mode: undefined | string
  }
  let customAttrs = reactive<AttrsProsp>({
    mode: undefined
  })
  const data = reactive({
    list: [
      { key: 1, msg: 'hello' },
      { key: 2, msg: 'slot-scope' }
    ]
  })

  onMounted(() => {
    log.info('来自父组件的attres：')
    log.dir(attrs)
    customAttrs.mode = attrs.mode as string
    log.info('来自父组件的slots：')
    log.info(slots)
  })
</script>
