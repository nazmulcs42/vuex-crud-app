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
        background-color: #2061a6;  
    }
</style>