<template>
  <p>子组件的msg：{{ msg }}</p>
</template>

<script lang="ts" setup>
  import { withDefaults, ref, onMounted } from 'vue'
  // 定义Props约束
  interface IProps {
    msg?: string
  }

  // 声明props并定义默认值
  const props = withDefaults(defineProps<IProps>(), { msg: '默认消息' })

  // data
  const msg = ref<string>('')

  // 挂载时触发
  onMounted(() => {
    if (props.msg) {
      msg.value = props.msg
    }
  })

  // 声明reset事件，父组件通过@reset注入方法
  const emits = defineEmits<{
    (event: 'reset', text: string): void
  }>()
  const changeMsg = (text: string) => {
    if (typeof text === 'string' && text.length) {
      msg.value = text
    }
  }
  const reset = () => {
    msg.value = '默认消息'
    emits('reset', '来自子组件的消息') // 触发reset
  }

  // 对外暴露方法
  defineExpose({
    reset,
    changeMsg
  })
</script>
