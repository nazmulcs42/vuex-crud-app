<template>
    <div>
        <select name="filter_limit" id="filter_limit" @change="handleOnChange">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100" selected>100</option>
        </select>
      </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    setup () {
      const name = "Filter Posts"
        return {
          name
        }
    },
    methods: {
      ...mapActions(["filterPosts"]),
      handleOnChange(e) {
        const limitValue = e.target.value;
        this.filterPosts(limitValue);
      }
    }
}
</script>

<style scoped>

  select {
    width: 120px;
    margin-bottom: 1rem;
    padding: 8px;
    background-color: #FFFFFF;
    border: 1px solid #41b883;
    outline: 0;
  }

</style>