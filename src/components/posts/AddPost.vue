<template>
    <div>
        <h3>{{ name }}</h3>
        <form @submit="handlePostFormData" method="POST">
            <div class="mt-3">
                <label for="title">Post Title</label> <br>
                <input type="text" name="title" v-model="post.title" class="post-title" >
            </div>

            <div class="mt-3">
                <label for="body">Post Description</label> <br>
                <textarea name="body" v-model="post.body" class="post-description" cols="30" rows="3"></textarea>
                <!-- <input type="text" name="body" v-model="post.body" class="post-description" > -->
            </div>
            <div class="mt-3">
                <input type="submit" class="btn" value="Save">
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    setup () {
        const name = "Add New Post"
        const post = { title: "", body: ""};
        return {
            name,
            post
        }
    },
    // data(){
    //     return {
    //         name: "Add New Post",
    //         post: {
    //             title: "",
    //             body: ""
    //         }
    //     }
    // },
    methods: {
        handlePostFormData: (event) => {
            event.preventDefault();
            const form = event.target;
            console.log("form", form.title)
            console.log("post", this.post)
            event.reset();
        }
    }
}
</script>

<style scoped>
    input, textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #41b883;
        border-radius: 2px;
        outline: 0;
        box-sizing: border-box;
    }
    .btn {
        color: #F9F9F9;
        background-color: #41b883;
        padding: 8px 11px;
        border-radius: 3px;
        font-size: 18px;
        cursor: pointer;


    }
    .mt-3 {
        margin-top: 16px;
    }
</style>