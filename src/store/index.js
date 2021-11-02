import { createStore} from "vuex";

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex)


// export const store = new Vuex.Store({
//   state: {
//         counter: 0
//       },
// })

export default createStore({
  state: {
    counter:  0
  },
  mutations: {
    increaseCounter(state) {
      if (state.counter >= 10) {
        alert("can not decrease a vlue less than 0")
      } else {
        state.counter++
      }

    },
    decreaseCounter(state) {
      if (state.counter === 0) {
        alert("can not decrease a vlue less than 0")
      } else {
        state.counter--
      }
    }

  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})