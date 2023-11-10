<template>
  <div class="app">
    <Navbar />
    <div class="nav-bar-hitbox"></div>
    <div class="content">
      <Codecard v-for="data in cardDatas" :key="'c' + data.title" :title="data.title" :image="data.image" :skill="data.skill" :description="data.description" :card-background-color="data.cardBackgroundColor" :card-expansions-color="data.cardExpansionsColor" :card-nav-hover-color="data.cardNavHoverColor" :main-bar-background-color="data.mainBarBackgroundColor" :main-bar-foreground-color="data.mainBarForegroundColor" :extension-bar-background-color="data.extensionBarBackgroundColor" :extension-bar-foreground-color="data.extensionBarForegroundColor" :extensions="data.extensions" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/navigation/navbar.vue';
import Codecard from './components/code_card/codecard.vue';
import { codeCardDatas } from './assets/data/codeCards.js';


export default {
  components: { Navbar, Codecard },
  data() {
    return {
      cardDatas: [],
    }
  },
  created() {
    this.cardDatas = codeCardDatas;
  }
};
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
