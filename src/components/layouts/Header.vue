<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default { 
        data() {
            return {
                title: "Vuex"
            }
        },
    }
</script>

<style scoped>
    h1 {
        margin: 0;
        padding: 8px 11px;
        text-align: left;
        color: #f9f9f9;
        /* background: linear-gradient(-240deg, #28895d,#33b178aa, #6c6ce7b8); */
        /* background: linear-gradient(-240deg, #595959,#33b178aa, #6c6ce7b8); */
        background: linear-gradient(-240deg, #595959,#33b178aa, #595959);
    }
</style>