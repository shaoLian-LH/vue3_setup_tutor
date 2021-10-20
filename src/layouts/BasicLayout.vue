<template>
  <n-layout class="basic-layout" has-sider>
    <n-layout-sider>
      <SystemMenu />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>一些组件示例</n-layout-header>
      <n-layout-content style="padding: 12px">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
  import SystemMenu from '@/components/SystemMenu.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      SystemMenu
    }
  })
</script>

<style lang="less" scoped>
  .basic-layout {
    position: relative;
    height: 100vh;
  }
</style>
