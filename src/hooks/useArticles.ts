import { useMyFetch } from './useMyFetch'
import { Ref, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { message } from 'ant-design-vue'
import { IArticle } from '@/@types/articles'
import { IPageInfo } from '@/@types/global'

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
  pageInfo: Ref<ITablePageInfo>
}

type articleFilter = (articles: IArticle[]) => void
export class ArticleService {
  static list(pn: Ref<number>, filter?: articleFilter) {
    return useArticles(pn, filter)
  }
}

export const useArticles = (
  pn: Ref<number>,
  filter?: articleFilter
): IArticleHookResult => {
  // 存储文章列表
  const articles = ref<IArticle[]>([])
  // url改造为响应式
  const url = ref(`/api/article?pn=${pn.value}`)
  // 存储分页信息
  const pageInfo = ref<ITablePageInfo>({
    total: 0,
    pageSize: 8,
    current: pn.value || 1
  })
  // 分页改变时改变url，自动触发获取数据
  watch([pn], ([newPn], [oldPn]) => {
    if (newPn !== oldPn) {
      url.value = `/api/article?pn=${pn.value}`
      pageInfo.value.current = newPn
    }
  })
  // 获取数据
  const { isFetching, error, data } = useMyFetch<IResult>(url)
  watch([isFetching], () => {
    if (!isFetching.value && data.value) {
      const infos = data.value.infos
      const targetValue = infos.list as unknown as IArticle[]
      pageInfo.value.total = infos.total
      articles.value = targetValue
    }
    if (error.value) {
      message.error('请求文章列表失败')
    }
  })

  return {
    isFetching,
    data: filter ? filter(articles.value) : articles,
    pageInfo: pageInfo
  }
}
