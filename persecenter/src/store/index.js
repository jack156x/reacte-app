import Vue from 'vue'
import Vuex from 'Vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const Vuex = new Vuex.Store({
    state,
    actions,
    mutations
})
export default Vuex