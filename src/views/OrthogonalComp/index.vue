<script lang="ts" setup>
  import { useArticles, IArticle, IPageInfo } from 'hooks/useArticles'
  import { watch, ref } from 'vue'
  import { message, TableColumnProps } from 'ant-design-vue'

  const pn = ref(2)
  const tableList = ref<IArticle[]>([])
  const pageConfig = ref<IPageInfo>({
    pageSize: 8,
    pages: 0,
    list: []
  })
  const columns: TableColumnProps[] = [
    {
      key: 'title',
      dataIndex: 'title',
      title: '文章标题'
    },
    {
      key: 'tagName',
      dataIndex: 'tagName',
      title: '类型'
    },
    {
      key: 'introduce',
      dataIndex: 'introduce',
      title: '简介'
    },
    {
      key: 'fire',
      dataIndex: 'fire',
      title: '热度'
    },
    {
      key: 'addTime',
      dataIndex: 'addTime',
      title: '添加时间'
    }
  ]
  const { data, isFetching, error, pageInfo } = useArticles(pn)
  watch([data, isFetching], () => {
    if (!isFetching.value && !error.value) {
      tableList.value = data.value
      pageConfig.value = pageInfo.value
    } else if (error.value) {
      message.error('请求文章列表失败')
    }
  })
</script>

<template>
  <suspense>
    <template #fallback>
      <a-empty> Loading ... </a-empty>
    </template>
    <template #default>
      <a-table :dataSource="tableList" :columns="columns" />
    </template>
  </suspense>
</template>

<style lang="less" scoped></style>
