<script lang="ts" setup>
  import { watch, ref } from 'vue'
  import { useMyFetch } from 'hooks/useMyFetch'
  import { columns } from './tableConfig'
  import { message } from 'ant-design-vue'
  import { IArticle } from '@/@types/articles'
  import { IPageInfo } from '@/@types/global'
  import { TablePaginationConfig } from 'ant-design-vue/lib/table/index'

  // 定义类型
  interface IResult {
    infos: IPageInfo<IArticle>
  }

  interface ITablePageInfo {
    total: number
    pageSize: number
    current: number
  }

  // UI数据管理
  const articles = ref<IArticle[]>([])
  const pageInfo = ref<ITablePageInfo>({
    total: 0,
    pageSize: 8,
    current: 1
  })
  const url = ref(`/api/articles?pn=${pageInfo.value.current}`)

  // 获取数据
  const { isFetching, error, data } = useMyFetch<IResult>(url)

  // 监听并处理原始数据
  watch(
    [isFetching, data],
    () => {
      if (!isFetching.value && data.value) {
        const articleInfo = data.value.infos
        articles.value = articleInfo.list as unknown as IArticle[]
        pageInfo.value.total = articleInfo.total
      } else if (error.value) {
        message.error(error.value)
      }
    },
    { immediate: false }
  )

  // 处理翻页
  const handleTableChange = (pagination: TablePaginationConfig) => {
    pageInfo.value.current = pagination.current || 1
    // 修改url触发Fetch
    url.value = `/api/articles?pn=${pageInfo.value.current}`
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
