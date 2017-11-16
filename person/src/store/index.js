import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import menu from './modules/menu'
import blog from './modules/blog'

Vue.use(Vuex)
Vue.use(VueResource)
const ERR_OK = 0

const store = new Vuex.Store({
    state: {
       
    },
    actions: {
        getJsBlog() {
            Vue.http.get('../../static/mock.json', {
                params: {
                    
                }
            })
            .then(response => {
                response = response.body
                this.state.blog.jsBlog = response.jsBlog       
            })
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        increBynum(state, num) {
            state.count = state.count + num
        },
        changeIndex(state, str) {
            state.menu.activeIndex = str
        }
    },
    getters: {
        getSmall: (state, getters) => (age) => {
            return state.personArr.filter(person => person.age < age)
        },
        getSeven: (state, getters) => {
            return state.personArr.filter(person => person.age < 17)
        },
        getIndex: (state, getters) => {
            return state.menu.activeIndex
        }
    },
    modules: {
        menu,
        blog
    }
})
export default store
