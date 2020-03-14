import vue from 'vue'
import vueX from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
vue.use(vueX)
const state = {
    goodsCart:[]
}
const store = new vueX.Store({
    state,
    mutations,
    actions,
    getters
})
export default store 