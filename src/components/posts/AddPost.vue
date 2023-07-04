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
                <!-- <input type="submit" class="btn" value="Save"> -->
                <button type="submit" class="btn">Save</button>
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
    methods: {
        ...mapActions(["addNewPost"]), 
        handlePostFormData (e) {
            e.preventDefault();
            this.addNewPost(this.post);
            this.post = { title: "", body: ""};
            e.target.reset();
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
    /* .btn {
        color: #F9F9F9;
        background-color: #41b883;
        padding: 8px 11px;
        border-radius: 3px;
        font-size: 18px;
        cursor: pointer;


    } */
    .btn {
        background: linear-gradient(-240deg, #595959 0%, #42b883aa 100%);
        border-radius: 6px;
        color: #000;
        padding: 12px 28px;
        font-size: 16px;
        font-weight: bold;
    }
    .btn:hover {
        /* background: linear-gradient(-240deg, #595959, #595959, #33b178aa);
        box-shadow: 3px 3px 1px #595959; */
        filter: drop-shadow(0 0 1rem #42b883aa);
    }
    .mt-3 {
        margin-top: 16px;
    }
</style>