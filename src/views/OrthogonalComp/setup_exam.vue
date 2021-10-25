<script lang="ts">
  import { watch, ref, defineComponent } from 'vue'
  import { useMyFetch } from 'hooks/useMyFetch'
  import { columns } from './tableConfig'
  import { message } from 'ant-design-vue'
  import { TablePaginationConfig } from 'ant-design-vue/lib/table/index'
  import { IArticle } from 'types/articles'
  import { IPageInfo } from 'types/global'

  // 类型声明
  interface IResult {
    infos: IPageInfo<IArticle>
  }

  interface ITablePageInfo {
    total: number
    pageSize: number
    current: number
  }

  // 定义组件
  export default defineComponent({
    setup() {
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
      watch([isFetching, data], () => {
        if (!isFetching.value && data.value) {
          const articleInfo = data.value.infos
          articles.value = articleInfo.list as unknown as IArticle[]
          pageInfo.value.total = articleInfo.total
        } else if (error.value) {
          message.error(error.value)
        }
      })

      // 处理翻页
      const handleTableChange = (pagination: TablePaginationConfig) => {
        pageInfo.value.current = pagination.current || 1
        url.value = `/api/articles?pn=${pageInfo.value.current}`
      }

      return {
        isFetching,
        data,
        columns,
        pageInfo,
        handleTableChange
      }
    }
  })
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
