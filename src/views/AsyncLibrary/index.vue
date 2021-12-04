<template>
  <div>async</div>
</template>

<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue'

  const Antd = defineAsyncComponent({
    loader: () =>
      import('https://cdn.bootcdn.net/ajax/libs/antd/4.16.9/antd.js')
  })
</script>

<style></style>
