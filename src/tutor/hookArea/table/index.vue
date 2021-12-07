<script lang="ts" setup>
  import { useArticles } from 'hooks/useArticles'
  import { columns } from './tableConfig'
  import { TablePaginationConfig } from 'ant-design-vue/lib/table/index'
  // 从hook获取提供给组件的内容
  const { data, isFetching, pageInfo, pageHandler } = useArticles(1)
  // 处理table分页翻页
  const handleTableChange = (pagination: TablePaginationConfig) => {
    if (pagination.current) {
      pageHandler(pagination.current)
    }
  }
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
