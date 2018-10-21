<template>
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">東陽 a 煞氣短網址 🔥</h1>
      <p class="lead">保證很短 der，馬上來體驗 👇</p>

      <hr class="my-4">

      <form
        class="lead"
        @submit.prevent="getShortUrl">

        <div class="form-group">
          <label
            class="col-form-label col-form-label-lg"
            for="inputLarge">🔥 想要縮 der 網址</label>
          <input
            id="inputLarge"
            v-model="link.originalUrl"
            class="form-control form-control-lg"
            type="text"
            placeholder="例如： https://github.com/EastSun5566">
        </div>

        <div class="form-group">
          <label
            class="col-form-label col-form-label-lg"
            for="inputLarge">🔥 想要客製化 der 路徑</label>
          <input
            id="inputLarge"
            v-model="link.customizedPath"
            class="form-control form-control-lg"
            type="text"
            placeholder="例如： chill-out">
        </div>

        <button
          type="submit"
          class="btn btn-primary btn-lg">GOGO 🚀</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      link: {
        originalUrl: '',
        customizedPath: '',
      },
    };
  },
  methods: {
    getShortUrl() {
      console.log(this.link);
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  min-height: 100vh;
  margin-bottom: 0;
  padding-top: 160px;

  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e2e2e2,
    #c9d6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e2e2e2,
    #c9d6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

