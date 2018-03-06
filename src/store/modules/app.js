import is from 'is_js'

// initial state
const state = {
  error: [],
  title: ''
}

// getters
const getters = {
  error: state => state.error,
  title: state => state.title
}

// actions
const actions = {
  updateState (context, data) {
    const {commit} = context
    commit("UPDATE_STATE", data)
  }
}

//處理狀態異動
const mutations = {
  UPDATE_STATE (state, payload) {
    console.log(payload)
    state.title = payload.title

    /*if(is.not.undefined(data) && is.not.array(data) && is.not.function(data)){
      Object.keys(data).forEach((keyName, index) => {
    
      })
    }*/
  }
  // COMMON_REQUEST (state, payload) {
  // },
  // COMMON_SUCCESS (state, payload) {
  // },
  // COMMON_FAILURE (state, payload) {
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}