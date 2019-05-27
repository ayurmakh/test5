<template>
  <div class="section__home">
    <h1 class="title">{{ title }}</h1>
    <p class="home__descr">{{ text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      title: 'Главная',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit harum, expedita dolore ipsam, consequatur, quisquam dolores ut modi quod, maxime vitae ex. Natus accusantium laudantium consequuntur sint excepturi perspiciatis!'
    }
  },
  name: "home"
};
</script>

<style lang="scss" scoped>
  .section__home {
    padding: 0 100px;
  }
</style>