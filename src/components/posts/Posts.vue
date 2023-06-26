<template>
    <div>
        <h3>{{ name }}</h3>
        <FilterLimitComponent></FilterLimitComponent>
        <div class="posts">
            <div v-for="post in statePosts" :key="post.id" class="post">
                <h5>{{ post.title }}</h5>
                <p>{{ post.body }}</p>
                <!-- <i @click="deletePost(post.id)" class="fa fa-trash pull-right"></i> -->
                <div class="action-btn">
                    <i @click="handleDeletePost($event, post.id)" class="fa fa-trash pull-right"></i>
                    <i @click="handleEditPost($event, post.id)" class="fa fa-edit pull-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterLimitComponent from './../common/FilterLimitComponent.vue'

export default {
    setup () {
        const name = "Posts";
        return {
            name
        }
    },
    computed: mapGetters(['statePosts']),
    methods: {
        ...mapActions(["fetchPosts", "deletePost", "updatePost"]),
        handleDeletePost(event, postId){
            event.preventDefault();
            if(confirm("Are you sure?")){
                this.deletePost(postId);
            }
        },
        handleEditPost(event, postId) {
            event.preventDefault();
            this.editPost(postId);
        },
        handleUpdatePost(event, postId) {
            event.preventDefault();
            const post = this.statePosts.filter(post => post.id === postId);
            console.log(post)
            // this.deletePost(postId);
        }
    },
    created () {
        this.fetchPosts();
    },
    components: {
        FilterLimitComponent,
    }
}
</script>

<style scoped>
    .posts {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .post {
       border: 1px solid #ccc;
       background: #41b883;
       padding: 1rem;
       border-radius: 5px;
       text-align: justify;
       position: relative;
       cursor: pointer;
    }

    .action-btn {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }
    .action-btn i {
        font-size: 20px;
        color: #35495e;
    }

    @media screen and (max-width: 992px) {
        .posts {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 600px) {
        .posts {
            grid-template-columns: 1fr;
        }
    }
</style>