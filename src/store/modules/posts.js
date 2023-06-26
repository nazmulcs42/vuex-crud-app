import axios from 'axios';


const state = {
    posts: [],
    post: {}
}

const getters = {
    statePosts : state => state.posts
}

const actions = {
    fetchPosts:  async ({ commit }) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(response.data);
        commit("setPosts", response.data);
    },

    addNewPost:  async ({ commit }, post) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
        console.log("response.data",response.data);
        commit("newPost", response.data);
    },

    deletePost:  async ({ commit }, postId) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        console.log("deletedPostId", postId);
        commit("removePost", postId);
    }
}

const mutations = {
    setPosts: (state, payload) => state.posts = payload,
    newPost: (state, payload) => state.posts.unshift(payload),
    removePost: (state, payload) => state.posts = state.posts.filter(post => post.id != payload),
}

export default {
    state,
    getters,
    actions,
    mutations
}
