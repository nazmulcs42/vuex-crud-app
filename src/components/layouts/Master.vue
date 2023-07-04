<template>
    <div id="app-content">
        <div id="content-menu"> 
            <h3 class="menu-title">Welcome to Vuex 3</h3>
            <ul class="menu-items">
                <a class="menu-link" href="/">
                    <li class="menu-item">Posts</li>
                </a>

                <a class="menu-link" href="/">
                    <li class="menu-item">Todos</li>
                </a>

                <a class="menu-link" href="/">
                    <li class="menu-item">Comments</li>
                </a>

                <a class="menu-link" href="/">
                    <li class="menu-item">Users</li>
                </a>
            </ul>
        </div>
        <div id="content-body"> 
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur eius consequatur est voluptates. Animi vel adipisci repellat voluptatem natus, dolores quo harum vitae, dolore quidem, neque voluptatum velit. Asperiores.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repellat suscipit doloremque iure corporis. Nobis debitis inventore repudiandae, laborum voluptatem exercitationem error non adipisci assumenda voluptatibus, consequatur quisquam repellat ea!</p>
            -->

            <!-- <Todos></Todos> -->

            <!-- https://jsonplaceholder.typicode.com/posts -->
            <AddPost></AddPost>
            <Posts></Posts>

        </div>
    </div>
</template>

<script>
import Todos from './../todos/Todos.vue'
import Posts from './../posts/Posts.vue'
import AddPost from './../posts/AddPost.vue'

    export default {
        components: {
            Todos,
            Posts,
            AddPost,
        }
    }
</script>

<style scoped>
    #app-content {
        margin: 0;
        padding: 0;
        min-height: 85vh;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        box-sizing: border-box;
    }
    #content-menu {
        grid-column-start: 1;
        grid-column-end: 2;
        /* min-height: 100%; */
        margin: 0;
        padding-right: 18px;
        /* border-right: 1px solid silver; */
    }
    #content-menu .menu-title {
        color:#41b883;
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        background: linear-gradient(to right, #f32170,
                #ff6b08, #cf23cf, #eedd44);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    #content-menu .menu-items {
        margin: 0;
        padding: 15px;
    }
    #content-menu .menu-items .menu-link .menu-item {
        width: 100%;
        list-style: none;
        color:#f9f9f9;
        /* background: #41b883; */
        background: linear-gradient(-240deg, #595959,#33b178aa); /* , #6c6ce7b8); */
        /* background: linear-gradient(-240deg, #0e0d0d,  #595959,#d0d453e8, #4c4cc5cd); */
        font-weight: 600;
        padding: 8px 11px;
        margin-top:  5px;
        border-radius: 3px;
    }
    #content-menu .menu-items .menu-link .menu-item:hover {
        background: linear-gradient(-240deg,  #595959, #595959,#33b178aa);
    }
    #content-menu .menu-items .menu-link {
        text-decoration: none;
    }
    #content-menu .menu-items .menu-item .menu-item:hover {
        background: linear-gradient(-240deg, #595959);
    }
    #content-body {
        grid-column-start: 2;
        grid-column-end: 5;
        margin: 0;
        padding: 5px 18px;
    }

    @media screen and (max-width: 600px) {
        #app-content {
            grid-template-columns: 1fr;
        }
        #content-menu,
        #content-body {
            grid-column-start: 1;
            grid-column-end: 2;
        }

    }
</style>