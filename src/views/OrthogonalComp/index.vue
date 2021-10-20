<script lang="ts" setup>
  import { useArticles } from 'hooks/useArticles'
  import { watch, ref } from 'vue'

  const pn = ref(1)
  const { data, isFetching } = useArticles(pn)
  watch([data, isFetching], () => {
    console.log('监听到data - ', data)
  })
</script>

<template></template>

<style lang="less" scoped></style>
