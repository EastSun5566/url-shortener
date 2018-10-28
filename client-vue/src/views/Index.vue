<template>
  <div class="jumbotron">
    <div class="container">
      <h1 class="title display-3 animated fadeInDown">最 Chill der 短網址 🔥</h1>
      <p class="lead animated fadeIn">保證很短 der，馬上來 chill ㄧ波 👇</p>

      <hr class="my-4">

      <transition
        enter-active-class="animated jackInTheBox"
        leave-active-class="animated zoomOut"
        mode="out-in">

        <form
          v-if="!isSubmitted"
          class="lead animated jackInTheBox"
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
            <div
              v-if="errorMessage"
              class="invalid-feedback">{{ errorMessage }}</div>
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

        <div
          v-else
          class="card text-white bg-primary">
          <button
            type="button"
            class="close text-white text-right mr-2"
            @click="isSubmitted = false">&times;</button>
          <h3 class="card-header display-4 text-center">恭喜 🎉</h3>

          <div class="card-body">
            <h4 class="card-title">
              <a
                :href="shortUrl"
                class="text-white"
                target="_blank">{{ shortUrl }}</a>
            </h4>
            <p class="card-text text-center">這是你的超 chill 短網址 👆</p>
          </div>
        </div>
      </transition>

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

      isSubmitted: false,
      isLoading: false,
      errorMessage: '',
    };
  },
  methods: {
    getShortUrl() {
      const { link } = this;
      const { customizedPath } = link;
      this.isLoading = true;

      link.customizedPath = this.parsePath(customizedPath);

      links
        .add(link)
        .then((res) => {
          const { data } = res;
          this.shortUrl = data.shortUrl;

          this.link = {};
          this.errorMessage = '';
          this.isSubmitted = true;
          this.isLoading = false;
        })
        .catch((err) => {
          const { data } = err.response;
          console.error(data);

          this.errorMessage = data;
          this.isLoading = false;
        });
    },
    parsePath(path) {
      return [...path]
        .map(char => ((char === '/' || char === '?') ? '-' : char))
        .join('');
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

.title {
  @media (max-width: 992px) {
    font-size: 54px;
  }
}

.card-title {
  text-transform: none;
  text-align: center;
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

