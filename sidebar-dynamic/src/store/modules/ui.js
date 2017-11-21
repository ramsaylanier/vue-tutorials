import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  sidebarOpen: false,
  sidebarComponent: null
}

// getters
const getters = {
  sidebarOpen: state => state.sidebarOpen,
  sidebarComponent: state => state.sidebarComponent
}

// actions
const actions = {
  toggleSidebar ({ commit, state }, {component}) {
    commit(types.TOGGLE_SIDEBAR)
    commit(types.SET_SIDEBAR_COMPONENT, component)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR] (state) {
    state.sidebarOpen = !state.sidebarOpen
  },
  [types.SET_SIDEBAR_COMPONENT] (state, component) {
    state.sidebarComponent = component
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
