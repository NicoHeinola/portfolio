<template>
    <div class="full-card-container" ref="fullCardContainer">
        <div class="card-container" @mouseleave="() => { setHoveredExtension(''); setCanHoverCard(true); }" :class="expandedCardClass">
            <div class="code-card" @click="toggleExpandedCard()" :style="`background: ${cardBackgroundColor};`" @mouseenter="setHoveredExtension(title)">
                <div class="title-container">
                    <img class="icon" :src="image" />
                    <p class="title">{{ title }}</p>
                </div>
                <Skillbar :amount="skill" :barBackgroundColor="mainBarBackgroundColor" :barForegroundColor="mainBarForegroundColor"></Skillbar>
            </div>

            <div class="expansions-container">
                <div class="expansions" :style="`background: ${cardExpansionsColor};`" :class="canHoverCardClass">
                    <div v-for="(item, index) in extensions" :key="'ex' + index" class="expansion" @mouseenter="setHoveredExtension(item.title)">
                        <div class="hover-item" :class="getHoveredExtensionDescriptionClass(item.title) + ' ' + expandedCardClass" :style="`background: ${cardNavHoverColor}`"></div>
                        <div class="title-container">
                            <img class="icon" :src="item.image" />
                            <p class="title">{{ item.title }}</p>
                        </div>
                        <SimpleSkillBar :amount="item.skill" :barBackgroundColor="extensionBarBackgroundColor" :barForegroundColor="extensionBarForegroundColor"></SimpleSkillBar>
                    </div>
                </div>
            </div>
            <div class="description-box" :class="hoveredExtensionClass">
                <div v-for="(extension, index) in extensions" :key="'ex-desc' + index" class="extension-description" :class="getHoveredExtensionDescriptionClass(extension.title)">
                    <div class="description" v-for="(text, index) in extension.description" :key="'hover-desc' + index" :style="`background: ${cardBackgroundColor};`">
                        <img class="icon" src="icons/list-item.png" />
                        <p class="text">
                            {{ text.text }}
                        </p>
                    </div>
                </div>
                <div class="extension-description" :class="getHoveredExtensionDescriptionClass(title)">
                    <div class="description" v-for="(text, index) in description" :key="'hover-desc' + index" :style="`background: ${cardBackgroundColor};`">
                        <img class="icon" src="icons/list-item.png" />
                        <p class="text">
                            {{ text.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Skillbar from './skillbar.vue';
import SimpleSkillBar from './simpleskillbar.vue';

export default {
    name: "CodeCard",
    components: {
        Skillbar, SimpleSkillBar
    },
    computed: {
        expandedCardClass() {
            return this.expandedCardOpen ? "expanded" : "";
        },
        selectedItemDescription() {
            let item = this.extensions.find(extension => this.selectedNavItem == extension.title);
            return item ? item.description : this.description;
        },
        hoveredExtensionDescription() {
            if (this.hoveredExtensionName == "") {
                return [];
            }
            let item = this.extensions.find(extension => this.hoveredExtensionName == extension.title);
            return item ? item.description : this.description;
        },
        hoveredExtensionClass() {
            return this.hoveredExtensionName != "" ? "show" : "";
        },
        canHoverCardClass() {
            return this.canHoverCard ? "" : "disable-hover";
        }
    },
    methods: {
        getHoveredExtensionDescription(itemName) {
            if (itemName == "") {
                return [];
            }
            let item = this.extensions.find(extension => itemName == extension.title);
            return item ? item.description : this.description;
        },
        showExpandedCard(show) {
            this.expandedCardOpen = show;
        },
        toggleExpandedCard() {
            this.expandedCardOpen = !this.expandedCardOpen;
            this.setCanHoverCard(false);
            if (!this.expandedCardOpen && this.hoveredExtensionName != this.title) {
                this.setHoveredExtension("");
            }
        },
        selectNavItem(itemName) {
            this.selectedNavItem = itemName;
        },
        navItemSelectedStyle(itemName) {
            return this.selectedNavItem == itemName ? `background: ${this.cardBackgroundColor}` : "";
        },
        setHoveredExtension(itemName) {
            if (itemName != this.title && itemName != "" && !this.expandedCardOpen) {
                return
            }

            if (this.getHoveredExtensionDescription(itemName) == "") {
                this.hoveredExtensionName = "";
                return;
            }

            this.hoveredExtensionName = itemName;
        },
        shouldShowExtensionDescription(itemName) {
            return this.hoveredExtensionName == itemName;
        },
        getHoveredExtensionDescriptionClass(itemName) {
            return this.shouldShowExtensionDescription(itemName) ? "show" : "";
        },
        setCanHoverCard(canHover) {
            this.canHoverCard = canHover;
        }
    },
    data() {
        return {
            expandedCardOpen: false,
            selectedNavItem: this.title,
            hoveredExtensionName: "",
            canHoverCard: true,
        }
    },
    props: {
        title: {
            type: String,
            default: "Python"
        },
        image: {
            type: String,
            default: "icons/code/python.png",
        },
        skill: {
            type: Number,
            default: 0
        },
        description: {
            default: [
                {
                    text: "Aenean cursus turpis euismod et. "
                },
                {
                    text: "turpis euismod et. Aenean cursus "
                }
            ],
        },
        cardBackgroundColor: {
            type: String,
            default: "rgb(53, 77, 134)"
        },
        cardExpansionsColor: {
            type: String,
            default: "rgb(23, 62, 94)"
        },
        cardNavHoverColor: {
            type: String,
            default: "#2a73af"
        },
        mainBarBackgroundColor: {
            type: String,
            default: "rgb(24, 32, 48)"
        },
        mainBarForegroundColor: {
            type: String,
            default: "rgb(211, 172, 45)"
        },
        extensionBarBackgroundColor: {
            type: String,
            default: "rgb(24, 32, 48)"
        },
        extensionBarForegroundColor: {
            type: String,
            default: "rgb(211, 172, 45)"
        },
        extensions: {
            default: []
        },
    },

}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

$card_border_radius: 10px;
$card_height: 120px;
$extensions_down_max_height: 300px;
$card_shadow: 0 0 15px 0 rgba(0, 0, 0, 0.37);
$card_shadow_hover: 0 0 25px 1px rgba(0, 0, 0, 0.466);

* {
    transition: all 0.3s;
}

.shadow-overlay {
    opacity: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.295);
    z-index: 200;
    pointer-events: none;

    &.expanded {
        opacity: 1;
        pointer-events: all;
    }
}

.card-container {
    display: flex;
    flex-direction: column;
    width: 250px;
    box-shadow: $card_shadow;

    &:hover {
        box-shadow: $card_shadow_hover;

        .expansions:not(.disable-hover) {
            max-height: 30px;
        }
    }

    &.expanded {

        .code-card {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        .expansions {
            filter: none;
            top: 100%;
            max-height: $extensions_down_max_height !important;
            box-shadow: $card_shadow_hover !important;

            .expansion {
                filter: none;
            }
        }
    }


    .description-box {
        position: absolute;
        left: 100%;
        z-index: 0;

        .extension-description {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            pointer-events: none;
            min-height: 400px;

            &.show {
                opacity: 1;
                pointer-events: all;

                .description {
                    left: 40px;
                }
            }

            .description {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20px;
                width: 400px;
                padding: 20px;
                left: 0px;
                top: 0;
                margin-bottom: 20px;
                border-radius: $card_border_radius;
                box-shadow: $card_shadow;

                &:hover {
                    box-shadow: $card_shadow_hover;
                }

                .icon {
                    height: 25px;
                    aspect-ratio: 1;
                }
            }
        }
    }
}

.code-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: $card_height;
    background: $code_card_background;
    border-radius: $card_border_radius;
    padding: 0 20px;
    transition-duration: 0.6s;
    z-index: 10;

    &:hover {
        cursor: pointer;
    }

    *::selection {
        background: none;
    }

    .title-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        align-items: center;
        width: 100%;
        height: 50%;

        .title {
            font-weight: bold;
            font-size: 25px;
        }

        .icon {
            height: 65%;
            aspect-ratio: 1;
        }
    }
}


.expansions-container {
    z-index: 5;


    *::selection {
        background: none;
    }

    .expansions {
        border-bottom-left-radius: $card_border_radius;
        border-bottom-right-radius: $card_border_radius;
        width: 100%;
        top: 100%;
        max-height: 0;
        position: absolute;
        overflow: hidden;
        box-shadow: $card_shadow;
        top: -15px;
        filter: brightness(70%);

        .expansion {
            margin: 20px;
            filter: blur(1.2px);

            &:hover {
                .hover-item.show {
                    opacity: 1;
                }
            }

            .hover-item {
                position: absolute;
                width: 100%;
                height: 100%;
                padding: 5px 10px;
                border-radius: $card_border_radius;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;

                &.show {
                    opacity: 1;
                }
            }

            .title-container {
                display: flex;
                flex-direction: row;
                gap: 10px;
                align-items: center;
                width: 100%;
                height: 50%;
                margin-bottom: 5px;

                .title {
                    font-weight: normal;
                    font-size: 15px;
                    pointer-events: none;
                }

                .icon {
                    width: 15px;
                    aspect-ratio: 1;
                }
            }
        }
    }
}
</style>