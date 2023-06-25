<template>
  <div>
    <Header></Header>
    <Master></Master>
    <Footer></Footer>
    

  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'
import Master from './components/layouts/Master.vue'

  export default {
    data() {
      return {
        
      }
    },
    components: {
      Header,
      Footer,
      Master
    }
    
  }
</script>

<style scoped>

</style>