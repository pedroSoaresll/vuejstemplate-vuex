import Vue from 'vue'
import Vuex from 'vuex'
import example from './modules/example'
import breadcrumb from './modules/breadcrumb'
import searchsalesman from './modules/searchsalesman'
import searchtransaction from './modules/searchtransaction'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        example,
        breadcrumb,
        searchsalesman,
        searchtransaction
    },
})