<template>
  <div id="app">
    <header class="main__header">
      <div class="logo">
        Test<span>5</span>
      </div>
      <div class="links">
        <router-link to="/">{{ linkHome | upperCase }}</router-link>
        <router-link to="/signin">{{ linkSignIn | upperCase }}</router-link>
        <router-link to="/signup">{{ linkSignUp | upperCase }}</router-link>
        <router-link to="/users">{{ linkUsers | upperCase }}</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkHome: 'home',
      linkSignIn: 'sign in',
      linkSignUp: 'sign up',
      linkUsers: 'users'
    }
  },
  filters: {
    upperCase: function(value) {
      return value.toUpperCase();
    }
  }
}
</script>


<style lang="scss" scoped>
  .main__header {   
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
  }
  .logo {
    font-size: 25px;
    font-weight: bold;
  }
  .links a {
    text-decoration: none;
    font-weight: 700;
    color: #000;
    margin-right: 30px;
    &:nth-child(4) {
      margin-right: 0;
    }
  }
</style>

<style lang="scss">
  * {
    font-family: sans-serif;
  }
  .title {
    text-align: center;
  }
</style>