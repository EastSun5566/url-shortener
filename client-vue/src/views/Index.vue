<template>
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">東陽 a 煞氣短網址 🔥</h1>
      <p class="lead">保證很短 der，馬上來體驗 👇</p>

      <hr class="my-4">

      <form
        v-if="!submitted"
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
            type="url"
            placeholder="例如： https://github.com/EastSun5566"
            required>
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
            placeholder="例如： chill-out"
            required>
        </div>

        <div class="text-right">
          <button
            :disabled="loading"
            type="submit"
            class="btn btn-primary btn-lg">GOGO 🚀</button>
        </div>
      </form>

      <div
        v-else
        class="card text-white bg-primary">
        <button
          type="button"
          class="close text-white text-right mr-2"
          @click="submitted = false">&times;</button>
        <h3 class="card-header display-4">恭喜 🎉</h3>

        <div class="card-body">
          <h4 class="card-title">
            <a
              :href="shortUrl"
              class="text-white"
              target="_blank">{{ shortUrl }}</a>
          </h4>
          <p class="card-text">這是你的超潮短網址 🔥</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import links from '@/api/links';

export default {
  name: 'Index',
  data() {
    return {
      link: {},
      shortUrl: '',

      submitted: false,
      loading: false,
    };
  },
  methods: {
    getShortUrl() {
      const { link } = this;
      this.loading = true;

      links
        .add(link)
        .then((res) => {
          const { data } = res;
          this.shortUrl = data.shortUrl;

          this.link = {};
          this.loading = false;
          this.submitted = true;
        })
        .catch((err) => {
          console.error(err);
          this.loading = false;
        });
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

button:focus {
  outline: none;
}
</style>

