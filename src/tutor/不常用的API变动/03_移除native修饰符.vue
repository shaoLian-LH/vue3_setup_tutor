<template>
  <div>
    <child @click="handleClick"></child>
  </div>
</template>

<script>
import child from './comps/child'
  export default {
    components: {
      child
    },
    setup() {
      const handleClick = () => {
        console.log('父组件被点击了')
      }
      return {
        handleClick
      }
    }
  }
</script>
<style lang="less" scoped>
</style>