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

    filterPosts:  async ({ commit }, limit) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        // console.log(response.data);
        commit("setPosts", response.data);
    },

    addNewPost:  async ({ commit }, post) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
        console.log("response.data",response.data);
        commit("createPost", response.data);
    },

    updatePost: async ({commit}, post) => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, post);
        console.log(response.data);
        commit("updatePost", response.data);
    }, 

    deletePost:  async ({ commit }, postId) => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        console.log("deletedPostId", postId);
        commit("removePost", postId);
    },
}

const mutations = {
    setPosts: (state, payload) => state.posts = payload,
    createPost: (state, payload) => state.posts.unshift(payload),
    updatePost: (state, payload) => {
        const index = state.posts.findIndex(post => post.id === payload.id)
        if(index !== -1) {
            state.posts.splice(index, 1, payload)
        }
    },
    removePost: (state, payload) => state.posts = state.posts.filter(post => post.id != payload),
}

export default {
    state,
    getters,
    actions,
    mutations
}
