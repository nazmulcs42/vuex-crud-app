import axios from "axios";

const state = {
    todos: [],
};

const getters = {
    stateTodos: state => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        commit("setTodos", response.data);
    }
};

const mutations = {
    setTodos: (state, payload) => (state.todos = payload)
};



export default {
    state,
    getters,
    actions,
    mutations
}