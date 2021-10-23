import { Ref } from 'vue'
import { MaybeRef } from '@vueuse/core'

export interface IFetchResult<T> {
  isFetching: Ref<boolean>
  data: Ref<T | null>
  error: Ref<any>
}

// declare module 'hooks/*' {
//   namespace useArticles {
//     function useArticles(): IArticleHookResult
//   }
//   namespace useFetch {
//     function useFetch<T>(url: MaybeRef<string>): IFetchResult<T>
//   }
// }
