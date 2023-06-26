import axios from 'axios';


const state = {
    posts: []
}

const getters = {
    statePosts : state => state.posts
}

const actions = {
    fetchPosts:  async ({ commit }) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(response.data);
        commit("setPosts", response.data);
    }
}

const mutations = {
    setPosts: (state, payload) => state.posts = payload
}

export default {
    state,
    getters,
    actions,
    mutations
}
