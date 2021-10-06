import state from './state'
import * as getters from './getters'
import * as mutations from './mutation'
import * as actions from './actions'
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}