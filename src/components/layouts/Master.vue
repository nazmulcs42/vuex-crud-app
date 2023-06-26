<template>
    <div id="app-content">
        <div id="content-menu"> 
            <ul>
                <li><a href="#">Content Menu 1</a></li>
                <li><a href="#">Content Menu 2</a></li>
                <li><a href="#">Content Menu 3</a></li>
                <li><a href="#">Content Menu 4</a></li>
                <li><a href="#">Content Menu 5</a></li>
                <li><a href="#">Content Menu 6</a></li>
                <li><a href="#">Content Menu 7</a></li>
            </ul>
        </div>
        <div id="content-body"> 
            <h3>Welcome to vuex practice session</h3>
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur eius consequatur est voluptates. Animi vel adipisci repellat voluptatem natus, dolores quo harum vitae, dolore quidem, neque voluptatum velit. Asperiores.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repellat suscipit doloremque iure corporis. Nobis debitis inventore repudiandae, laborum voluptatem exercitationem error non adipisci assumenda voluptatibus, consequatur quisquam repellat ea!</p>
            -->

            <!-- <Todos></Todos> -->

            <!-- https://jsonplaceholder.typicode.com/posts -->
            <Posts></Posts>

        </div>
    </div>
</template>

<script>
import Todos from './../todos/Todos.vue'
import Posts from './../posts/Posts.vue'
    export default {
        components: {
            Todos,
            Posts
        }
    }
</script>

<style scoped>
    #app-content {
        margin: 0;
        padding: 0;
        min-height: 85vh;
        display: flex;
        box-sizing: border-box;
    }
    #content-menu {
        width: 20%;
        /* min-height: 100%; */
        margin: 0;
        padding: 5px 18px;
        /* border-right: 1px solid silver; */
    }
    #content-menu ul li {
        padding: 4px 6px;
        list-style: none;
    }
    #content-menu ul li a {
        text-decoration: none;
    }
    #content-body {
        width: 80%;
        margin: 0;
        padding: 5px 18px;
    }
</style>