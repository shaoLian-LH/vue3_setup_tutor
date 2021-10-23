import { createStore, Store } from 'vuex'
import { App, IApp } from './modules/app'
import { User, IUserModule } from './modules/user'

interface IStoreState {
  app: IApp
  user: IUserModule
}
export interface IStore extends Store<IStoreState> {
  state: IStoreState
}

export default createStore<IStore>({
  modules: {
    app: App,
    user: User
  }
})
