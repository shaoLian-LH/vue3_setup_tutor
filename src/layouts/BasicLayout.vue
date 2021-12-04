<template>
  <a-layout class="basic-layout">
    <a-layout-sider :width="siderCollapsed ? '120' : '220'">
      <SystemMenu v-model:collapsed="siderCollapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="opacity: 0.96" />
      <a-layout-content style="padding: 12px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import SystemMenu from './Menu/index.vue'
  const siderCollapsed = ref(false)
</script>

<style lang="less" scoped>
  .basic-layout {
    position: relative;
    height: 100vh;
  }
</style>
