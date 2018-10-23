<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'App',
  components: { Nav },
};
</script>


<style lang="scss" scoped>
@import "~animate.css/animate.min.css";
@import "~@/assets/styles/index";
</style>
