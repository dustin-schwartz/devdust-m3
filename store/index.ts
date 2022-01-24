import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

// import * as submodule from './submodule'

export const state = () => ({
  mobileNavShow: false,
})

type RootState = ReturnType<typeof state>

export const getters = {
  mobileNavShow: (state: RootState) => state.mobileNavShow,
}

export const mutations = mutationTree(state, {
  setMobileNavShow(state, newValue: boolean) {
    state.mobileNavShow = newValue
  },

  initialiseStore() {
    console.log('initialised')
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async nuxtServerInit(_vuexContext, nuxtContext: Context) {
      console.log(nuxtContext.req)
    },
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    // submodule,
  },
})
