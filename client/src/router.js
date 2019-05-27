import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      props: {
        title: "Вход в аккаунт"
      },
      component: () => import('./components/Signin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      props: {
        title: "Регистрация"
      },
      component: () => import('./components/Signup.vue')
    },
    {
      path: '/users',
      name: 'users',
      props: {
        title: "Пользователи"
      },
      component: () => import('./components/Users.vue')
    }
  ]
})
