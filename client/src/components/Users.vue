<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <ol>
        <li v-for="user in users" :key="user">{{ user.name + ' ' + user.login }}</li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    } 
  },
  props: {
    title: String
  },
  name: "Users",
  mounted() {
    var str = JSON.stringify(this.postBody);
    console.log(str);
    axios.get('http://localhost:3000/users',
    {
        "Content-Type": "application/x-www-form-urlencoded"
    })
    .then(response => (
    this.users = response.data.rows));
    console.log();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin-top: 10px;
    }
  }
</style>
