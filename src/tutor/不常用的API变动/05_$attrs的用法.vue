<template>
    <div>
      <attrChild class="attrChild" attrA="child" attrB="attrB" message="子组件">子组件</attrChild>
    </div>
</template>

<script>
  import attrChild from './comps/attrChild'
  export default {
    components: {
      attrChild
    }
  }
</script>
<style lang="less" scoped>
</style>
