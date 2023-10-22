<template>
    <a :href="link" class="nav-link" :class="selectedClass">
        <div class="icon-container">
            <img class="icon" :src="image" />
        </div>
        <div class="text-container">
            <p class="text">{{ title }}</p>
        </div>
    </a>
</template>

<script>
export default {
    name: "NavLink",
    props: {
        title: {
            type: String,
            default: "<No Title>"
        },
        link: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default: ""
        },
        selected: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        selectedClass() {
            return this.selected ? "selected" : "";
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.nav-link {
    $link_height: 30px;
    $link_width: calc($nav_full_width);

    display: flex;
    align-items: center;
    width: $link_width;
    height: $link_height;
    background: $nav_background;
    padding: 10px 0;
    transition: all 0.1s;

    &.selected {
        background: $nav_item_selected;
    }

    &:hover {
        background: $nav_item_hover;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: $nav-width;
        max-width: $nav-width;
        height: 100%;

        .icon {
            height: 100%;
            aspect-ratio: 1;
        }
    }

    .text-container {
        width: 100%;
        padding: 0 20px;

        .text {
            pointer-events: none;
            margin: auto;
        }
    }
}
</style>