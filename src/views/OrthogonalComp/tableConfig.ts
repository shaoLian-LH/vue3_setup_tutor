import { TableColumnProps } from 'ant-design-vue'
export const columns: TableColumnProps[] = [
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
