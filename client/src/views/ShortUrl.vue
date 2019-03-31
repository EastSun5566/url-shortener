<template>
  <main class="container">
    <div class="card text-white bg-primary animated zoomIn">
      <h3 class="card-header display-4 text-center">恭喜 🎉</h3>

      <div class="card-body">
        <h4 class="card-title">
          <a
            :href="shortUrl"
            class="text-white"
            target="_blank">{{ shortUrl }}</a>
        </h4>

        <hr>

        <p class="card-text text-center">
          這是你的超 chill 長網址 👆
          <br>
          <span class="note" />
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'ShortUrl',
  computed: {
    shortUrl() {
      return this.$route.query.url;
    },
  },
  mounted() {
    new Typed('.note', {
      strings: ['（力馬點進去並分享 chill ㄧ發 🔥✨🚀）'],
      typeSpeed: 100,
      startDelay: 800,
    });
  },
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 20vh;
  padding-bottom: 20vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  padding: 24px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
}

.card-title {
  text-transform: none;
  text-align: center;
}

hr {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
