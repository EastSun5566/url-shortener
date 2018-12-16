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
        <p class="card-text text-center">
          這是你的超 chill 短網址 👆
          <br>
          （力馬點進去 chill ㄧ發 🔥）
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ShortUrl',
  computed: {
    shortUrl() {
      return this.$route.query.url;
    },
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

.card-title {
  text-transform: none;
  text-align: center;
}
</style>
