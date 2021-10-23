import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { IStore } from '@/store/index'
import { IUser } from '@/store/modules/user'
import { useMyFetch } from './useMyFetch'

export const useUserInfo = () => {
  const store = useStore() as unknown as IStore
  const user = ref<IUser>(store.state.user)
  if (!store.state.user.name) {
    const { isFetching, data } = useMyFetch<IUser>('/mock/usr/token', 'get', {
      token:
        '%22eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4NzEwODkwNTciLCJpYXQiOjE2MTU3ODMxNjcsImV4cCI6MTYxNTkzODY4N30.nJ1sdy6bdYYBUJIuewqJUUNfOKFbU9238hhxL2BaIJNEhRncnIlfu66Up6PSul0M7AWXdRdwVxVNcIM7woupMQ%22'
    })
    watch([isFetching, data], () => {
      if (!isFetching.value) {
        user.value = data.value || { name: undefined, role: undefined }
        store.commit('user/SET_USER', data.value || {})
      }
    })
  }
  return user
}
