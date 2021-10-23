<script lang="ts" setup>
  import { watch, ref } from 'vue'
  import { useMyFetch } from 'hooks/useMyFetch'
  // fetch结果定义
  interface IResult {
    infos: {
      list: Array<Object>
    }
  }
  // 控制翻页
  const pn = ref(1)
  // 获取数据
  const { isFetching, error, data } = useMyFetch<IResult>(
    `/api/articles?pn=${pn?.value || 1}`
  )
  const articles = ref<Array<Object>>([])
  watch([isFetching, data], () => {
    if (!isFetching.value && !error.value) {
      articles.value = data.value !== null ? data.value?.infos?.list : []
    }
  })
</script>

<template>
  <div v-if="isFetching">
    <a-empty>
      <span>Loading ...</span>
    </a-empty>
  </div>
  <div v-else>
    <a-table> </a-table>
  </div>
</template>

<style lang="less" scoped></style>
