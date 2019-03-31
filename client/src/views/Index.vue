<template>
  <div class="jumbotron">
    <div class="container">
      <h1 class="title display-3 animated fadeInDown">
        <span class="title-content" />
      </h1>
      <p class="lead animated fadeIn">保證很長 der，馬上來 chill ㄧ波 👇</p>

      <hr class="my-4">

      <form
        class="lead animated jackInTheBox"
        @submit.prevent="getShortUrl">

        <div class="form-group">
          <label
            class="col-form-label col-form-label-lg"
            for="inputLarge">🔥 想要拉 der 網址</label>
          <input
            id="inputLarge"
            v-model="link.originalUrl"
            class="form-control form-control-lg"
            type="url"
            placeholder="例如： https://github.com/EastSun5566"
            autofocus
            required>
        </div>

        <div class="form-group">
          <label
            class="col-form-label col-form-label-lg"
            for="inputLarge">🔥 想要客製化 der 路徑</label>
          <input
            id="inputLarge"
            v-model="link.customizedPath"
            :class="['form-control', 'form-control-lg', { 'is-invalid': !!errorMessage }]"
            type="text"
            placeholder="例如： chill-out"
            required>
        </div>

        <div
          v-if="errorMessage"
          class="alert alert-dismissible alert-danger">
          <button
            type="button"
            class="close"
            data-dismiss="alert">&times;</button>
          {{ errorMessage }}
        </div>

        <div class="text-right">
          <button
            :disabled="isLoading"
            type="submit"
            class="btn btn-primary btn-lg btn-submit">
            Chill <span :class="{ spin: isLoading }">🚀</span>
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

import links from '@/api/links';

export default {
  name: 'Index',
  data() {
    return {
      link: {},

      isLoading: false,
      errorMessage: '',
    };
  },
  mounted() {
    new Typed('.title-content', {
      strings: [
        '最 Chill der 短網址 ✨',
        '最 Chill der 抱歉，我是說',
        '最 Chill der 長網址 🔥'],
      typeSpeed: 100,
      startDelay: 800,
    });
  },
  methods: {
    getShortUrl() {
      const { link } = this;
      this.isLoading = true;

      links
        .add(link)
        .then((res) => {
          const { data } = res;
          this.isLoading = false;

          this.$router.push({
            path: '/urls',
            query: { url: data.shortUrl },
          });
        })
        .catch((err) => {
          const { data } = err.response;
          console.error(data);

          this.errorMessage = data.message;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  padding-top: 20vh;
  min-height: 100vh;
  background-color: transparent;
}

.title {
  @media (max-width: 992px) {
    font-size: 54px;
  }
}

.btn-submit {
  @media (max-width: 992px) {
    width: 100%;
  }

  .spin {
    display: inline-block;
    animation: spin 2s linear infinite both;
  }
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

