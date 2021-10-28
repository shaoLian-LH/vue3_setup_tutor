<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
  import { columns } from './tableConfig'
  import { TablePaginationConfig } from 'ant-design-vue/lib/table/index'
  export default defineComponent({
    // 分离定义的数据管理
    data() {
      return {
        columns,
        pn: 1,
        isLoading: true,
        isFetching: false,
        data: [],
        pageInfo: {
          pageSize: 8,
          current: 1,
          total: 0
        }
      }
    },
    methods: {
      getArticleList(pn: number) {
        this.isFetching = true
        axios
          .get(`/api/articles?pn=${pn}`)
          .then((res: any) => {
            // 没有任何限制的any scripts，完全没有静态检查
            const data = res.data
            this.data = data.infos.list
            this.pageInfo.total = data.infos.total
          })
          .finally(() => {
            this.isFetching = false
          })
      },
      // 处理翻页
      handleTableChange(pagination: TablePaginationConfig) {
        this.pageInfo.current = pagination.current || 1
        this.$nextTick(() => {
          this.getArticleList(this.pageInfo.current)
        })
      }
    },
    created() {
      this.getArticleList(1)
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
