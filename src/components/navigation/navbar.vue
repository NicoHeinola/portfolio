<template>
    <div class="nav-bar" :class="menuOpenClass" @mouseleave="setMenuOpen(false)">
        <div class="nav-items" @mouseenter="setMenuOpen(true)">
            <Navlink @click="setSelectedMenu('code')" link="#" class="nav-link" title="Coding skills" image="icons/code.png" :selected="isSelectedItem('code')"></Navlink>
            <Navlink @click="setSelectedMenu('projects')" link="#" class="nav-link" title="Projects" image="icons/project.png" :selected="isSelectedItem('projects')"></Navlink>
        </div>
    </div>
</template>

<script>
import Navlink from './navlink.vue';

export default {
    name: "NavBar",
    data() {
        return {
            menuIsOpen: false,
            selectedMenu: "",
        }
    },
    components: { Navlink },
    computed: {
        menuOpenClass() {
            return this.menuIsOpen ? "open" : "";
        },

    },
    methods: {
        isSelectedItem(name) {
            return this.selectedMenu == name;
        },
        setSelectedMenu(name) {
            this.selectedMenu = name;
        },
        setMenuOpen(isOpen) {
            this.menuIsOpen = isOpen;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.nav-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $nav_background;
    width: $nav_width;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    transition: all 0.2s;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.644);
    z-index: 100;

    &.open {
        width: $nav_full_width;
    }

    .nav-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>