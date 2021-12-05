<template>
  <keep-alive>
    <a-config-provider :locale="zhCN">
      <router-view />
    </a-config-provider>
  </keep-alive>
</template>

<script lang="ts" setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>

<style>
  #app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    height: 100vh;
  }
  p,
  span {
    color: white;
  }
</style>
