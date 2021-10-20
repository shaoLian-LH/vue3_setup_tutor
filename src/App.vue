<template>
  <n-config-provider :theme="darkTheme">
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { darkTheme } from 'naive-ui'

  export default defineComponent({
    name: 'App',
    setup() {
      return {
        darkTheme
      }
    }
  })
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
</style>
