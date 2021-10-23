import { Module } from 'vuex'
import { defineStaticProps } from '@/utils/define'

interface IAppDefine {
  version?: string
  key?: string
  name?: string
}

type IAppKey = keyof IAppDefine

interface IAppState {
  app: IAppDefine
}

export interface IApp extends IAppState {}

export const App: Module<IAppState, unknown> = {
  namespaced: true,
  state: {
    app: {}
  },
  mutations: {
    SET_APP_INFO(state, newInfo: IAppDefine) {
      Object.keys(newInfo).map((key: unknown) => {
        const _key = key as IAppKey
        const value = newInfo[_key]
        defineStaticProps(state.app, _key, value)
      })
    }
  },
  getters: {
    info(state) {
      return state.app
    }
  }
}
