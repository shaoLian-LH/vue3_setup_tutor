import { useMyFetch } from './useMyFetch'
import { Ref, ref, watch } from 'vue'
import { IArticleHookResult } from '../@types/hooks'
export interface IResult {
  infos: {
    list: Array<Object>
  }
}

export const useArticles = (pn?: Ref<number>): IArticleHookResult => {
  const { isFetching, error, data } = useMyFetch<IResult>(
    `/api/articles?pn=${pn?.value || 1}`
  )
  const articles = ref<Array<Object>>([])
  watch([isFetching, data], () => {
    if (!isFetching.value) {
      articles.value = data.value !== null ? data.value?.infos?.list : []
    }
  })
  return {
    isFetching,
    error,
    data: articles
  }
}
