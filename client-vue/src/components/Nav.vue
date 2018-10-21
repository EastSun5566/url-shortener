<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <router-link
      class="navbar-brand"
      to="/">ㄏㄏ</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>

    <div
      id="navbarColor01"
      class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://github.com/EastSun5566"
            target="_blank">
            <i class="fab fa-github"/>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://codepen.io/EastSun5566/"
            target="_blank">
            <i class="fab fa-codepen"/>
          </a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
</style>
