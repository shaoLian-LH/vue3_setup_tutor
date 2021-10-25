<script lang="ts" setup>
  import { useArticles } from 'hooks/useArticles'
  import { ref } from 'vue'
  import { columns } from './tableConfig'
  import { TablePaginationConfig } from 'ant-design-vue/lib/table/index'
  // 函数入参
  const pn = ref<number>(1)
  // 响应组件翻页，改变函数入参
  const handleTableChange = (pagination: TablePaginationConfig) => {
    pn.value = pagination.current || 1
  }
  // pn是响应式的，pn的改变会再次触发useArticles
  const { data, isFetching, pageInfo } = useArticles(pn)
</script>

<template>
  <a-table
    :loading="isFetching"
    :dataSource="data"
    :columns="columns"
    :pagination="pageInfo"
    @change="handleTableChange"
  />
</template>
