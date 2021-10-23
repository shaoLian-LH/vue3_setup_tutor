import { Module } from 'vuex'

export interface IUser {
  role: string | undefined
  name: string | undefined
}

export interface IUserModule extends IUser {
  info: IUser
}

interface IUserState extends IUser {}

export const User: Module<IUserState, unknown> = {
  namespaced: true,
  state: {
    role: undefined,
    name: undefined
  },
  mutations: {
    SET_USER(state, userInfo: IUserState) {
      Object.keys(userInfo).map((key: unknown) => {
        const _key = key as keyof IUserState
        state[_key] = userInfo[_key]
      })
    }
  },
  getters: {
    info(state) {
      return { ...state }
    }
  }
}
