<template>
  <div class="app">
    <Navbar />
    <div class="nav-bar-hitbox"></div>
    <div class="content">
      <Codecard />
    </div>
  </div>
</template>

<script>
import Navbar from './components/navigation/navbar.vue';
import Codecard from './components/code_card/codecard.vue';


export default { components: { Navbar, Codecard } };
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/main.scss";

* {
  color: $primary_color;
}

.app {
  display: flex;
  flex-direction: row;
  background: $primary_background;
  width: 100%;
  height: 100vh;

  .nav-bar-hitbox {
    width: $nav_width;
    height: 100%;
    pointer-events: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>
