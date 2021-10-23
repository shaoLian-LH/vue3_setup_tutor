import { useMyFetch } from './useMyFetch'
import { Ref, ref, watch } from 'vue'
export interface IArticle {
  addTime: string
  fire: number
  id: string
  introduce: string
  tagName: string
  title: string
  typeId: number
}

export interface IPageInfo {
  pages: number
  pageSize: number
  list: IArticle[]
}
export interface IResult {
  infos: IPageInfo
}
interface IArticleHookResult {
  isFetching: Ref<boolean>
  error: Ref<unknown>
  data: Ref<IArticle[]>
  pageInfo: Ref<IPageInfo>
}

export const useArticles = (pn?: Ref<number>): IArticleHookResult => {
  const { isFetching, error, data } = useMyFetch<IResult>(
    `/api/article?pn=${pn?.value || 1}`
  )
  const articles = ref<IArticle[]>([])
  const pageInfo = ref<IPageInfo>({
    pages: 0,
    pageSize: 8,
    list: []
  })
  watch([isFetching, data], () => {
    if (!isFetching.value && data.value) {
      const targetValue = data.value?.infos.list as unknown as IArticle[]
      pageInfo.value = data.value.infos
      articles.value = targetValue
    }
  })
  return {
    isFetching,
    error,
    data: articles,
    pageInfo: pageInfo
  }
}
