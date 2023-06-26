import { createStore } from 'vuex'
import todos from './modules/todos';
import posts from './modules/posts';

//Create store
export const store = createStore({
    modules: {
        todos,
        posts
    }
  })

  /**
   * Alternative Code.
   */

// import Vue from 'vue'

// Load vuex
// Vue.use(Vuex);

// Create store
// export default new Vuex.Store({
//     modules: {
//       todos,
//       posts
//     }
// });