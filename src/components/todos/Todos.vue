<template>
    <div class="todos">
        <div v-for="todo in stateTodos" :key="todo.id" class="todo">
            <h5>{{ todo.title }}</h5>
            <button>{{ todo.completed ? "Completed" : "Incompleted" }}</button>

        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
        computed: mapGetters(['stateTodos']),
        methods: {
            ...mapActions(['fetchTodos']),
        },
        created(){
            this.fetchTodos();
        }
    }
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .todo {
       border: 1px solid #ccc;
       background: #41b883;
       padding: 1rem;
       border-radius: 5px;
       text-align: center;
       position: relative;
       cursor: pointer;
    }
</style>