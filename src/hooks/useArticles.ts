import { useMyFetch } from './useMyFetch'
import { Ref } from 'vue'
import { message } from 'ant-design-vue'
import { IPageInfo } from '@/global'

export interface IArticle {
  addTime: string
  fire: number
  id: string
  introduce: string
  tagName: string
  title: string
  typeId: number
}

interface IResult {
  infos: IPageInfo<IArticle>
}

interface ITablePageInfo {
  total: number
  pageSize: number
  current: number
}
export interface IArticleHookResult {
  isFetching: Ref<boolean>
  data: Ref<IArticle[]> | any
  pageInfo: ITablePageInfo
  pageHandler: (id: number, pageSize?: number) => void
}

type articleFilter = (articles: IArticle[]) => void

export const useArticles = (
  pn: number,
  filter?: articleFilter
): IArticleHookResult => {
  // 存储文章列表
  const articles = ref<IArticle[]>([])
  // url改造为响应式
  const url = ref(`/api/article?pn=${pn || 1}`)
  // 存储分页信息
  const pageInfo = reactive<ITablePageInfo>({
    total: 0,
    pageSize: 8,
    current: pn || 1
  })
  // 翻页
  const pageHandler = (pn: number, pageSize?: number) => {
    pageInfo.current = pn || 1
    if (pageSize) {
      pageInfo.pageSize = pageSize
    }
  }
  // 分页改变时改变url，自动触发获取数据
  watch(
    () => ({ ...pageInfo }),
    ({ current: newPn }, { current: oldPn }) => {
      if (newPn !== oldPn) {
        url.value = `/api/article?pn=${newPn}`
        pageInfo.current = newPn
      }
    }
  )
  // 获取数据
  const { isFetching, error, data } = useMyFetch<IResult>(url)
  watch([isFetching], () => {
    if (!isFetching.value && data.value) {
      const infos = data.value.infos
      const targetValue = infos.list as unknown as IArticle[]
      pageInfo.total = infos.total
      articles.value = targetValue
    }
    if (error.value) {
      message.error('请求文章列表失败')
    }
  })

  return {
    isFetching,
    data: filter ? filter(articles.value) : articles,
    pageInfo: pageInfo,
    pageHandler
  }
}
