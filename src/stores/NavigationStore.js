import { observable } from 'mobx'

class NavigationStore {
  @observable data = null

  fakeFetch2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data = 'Fake 2'
        resolve('Fake 2')
      }, 800)
    })
  }

  fakeFetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Navigation')
      }, 500)
    })
  }
}

const store = new NavigationStore()
export default store
