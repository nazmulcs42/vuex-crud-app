import { createStore } from 'vuex'
// import Vue from 'vue'
import todos from './modules/todos';


// Load vuex
// Vue.use(Vuex);


export const store = createStore({
    modules: {
        todos
    }
  })

// Create store
// export default  new Vuex.store({
//     modules: {
//         Todos
//     }


// });