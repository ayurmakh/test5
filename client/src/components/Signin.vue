<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <div class="form" v-if="!sended && !result">
      <input type="text" v-model="login" placeholder="Логин">
      <input type="password" v-model="pass" placeholder="Пароль">
      <button @click="send">Send</button>
    </div>
    <div class="form" v-if="sended && result">
      Вы успешно залогинились!
    </div>
    <div class="form" v-if="sended && !result">
      Не удалось войти в аккаунт
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      login: '',
      pass: '',
      sended: false,
      result: false
    } 
  },
  props: {
    title: String
  },
  name: "Signin",
  methods: {
    send() {
      
      var str = JSON.stringify(this.postBody);
      console.log(str);
      axios.post('http://localhost:3000/signin', {
        login: this.login,
        pass: this.pass
      },
      {
        "Content-Type": "application/x-www-form-urlencoded"
      })
      .then(response => (
        this.sended = true,
        this.result = response.data.result));
    }
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
