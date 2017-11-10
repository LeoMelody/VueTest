import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
        name: 'wyh',
        personArr: [{
            name: 'aaa',
            age: 18
        }, {
            name: 'bbb',
            age: 16
        }, {
            name: 'ccc',
            age: 19
        }]
    },
    actions: {

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
        }
    },
    getters: {
        getSmall: (state, getters) => (age) => {
            return state.personArr.filter(person => person.age < age)
        },
        getSeven: (state, getters) => {
            return state.personArr.filter(person => person.age < 17)
        }
    }
})
export default store
