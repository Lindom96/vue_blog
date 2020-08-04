import Vue from 'vue'
import Vuex from 'vuex'
import user from './Modules/user'
import tabsview from './Modules/tabsview'
import language from './Modules/language'
import permission from './Modules/permission'

import VuexPersistence from 'vuex-persist'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
        login: state.login,
        author: state.author
    })
})
export default new Vuex.Store({
    user,
    tabsview,
    language,
    permission,
    state,
    getters,
    mutations,
    actions,
    plugins: [vuexLocal.plugin]
})
