import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
    colorCode : 'red'
  },
  mutations: {
    increaseCounter(state, randomNumber) {

      state.counter += randomNumber

      // if (state.counter <= 10) {
      //   state.counter += randomNumber
      // } else {
      //   alert("can not InCrease a vlue less than 10")
      // }

    },
    decreaseCounter(state, randomNumber) {

      state.counter -= randomNumber
      // if (state.counter === 0) {
      //   alert("can not decrease a vlue less than 0")
      // } else {
      //   state.counter--
      // }
    },
    setColorCode(state, NewValue){
      state.colorCode = NewValue
    }

  },
  actions: {
    increaseCounter({ commit }) {
      // console.log('increateCounter (actions)')
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((res) => {
        commit('increaseCounter', res.data)
      })
    },
    decreaseCounter({ commit }) {
      // console.log('increateCounter (actions)')
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((res) => {
        commit('decreaseCounter', res.data)
      })
    },
    setColorCode({commit}, NewValue){
      commit("setColorCode",NewValue )
    }

  },
  getters:{
  counterSquared(state) {
     return state.counter * state.counter
    }

  },
  modules: {

  }
})