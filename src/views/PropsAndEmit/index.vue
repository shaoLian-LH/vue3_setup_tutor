<template>
  <PropsAndEmit 
    :msg="childProps.msg" 
    @reset="watchReset"
    ref="childRef" 
  />
  <button @click="changeMsg">点击改变消息</button>
  <button @click="reset">点击重制消息</button>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import PropsAndEmit from '@/components/PropsAndEmit.vue';

const childRef = ref<any>(null) // 当前结构问题，先用any代替
const childProps = reactive({ msg: '来自父组件的props' })

// mounted的时候，已经使用ref获取到了子组件
onMounted(() => {
  console.log('child - ', childRef.value);
})
// 尝试调用子组件暴露出的reset
const reset = () => {
  childRef.value?.reset() 
}
// 尝试调用子组件暴露出的changeMsg
const changeMsg = () => {
  childRef.value?.changeMsg('由父组件改变信息') 
}
// @reset，子组件emit的时候打印
const watchReset = (text: any) => {
  console.log('并且由自组件emit reset事件 - ', text);
}
</script>