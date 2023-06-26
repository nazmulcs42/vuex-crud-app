<template>
    <div>
        <h3>{{ name }}</h3>
        <div class="posts">
            <div v-for="post in statePosts" :key="post.id" class="post">
                <h5>{{ post.title }}</h5>
                <p>{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    setup () {
        const name = "Posts";
        return {
            name
        }
    },
    computed: mapGetters(['statePosts']),
    methods: {
        ...mapActions(["fetchPosts"])
    },
    created () {
        this.fetchPosts();
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