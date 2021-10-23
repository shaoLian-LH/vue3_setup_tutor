<template>
  <a-layout class="basic-layout" has-sider>
    <a-layout-sider>
      <SystemMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>一些组件示例</a-layout-header>
      <a-layout-content style="padding: 12px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
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
