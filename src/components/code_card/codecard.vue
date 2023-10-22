<template>
    <div class="full-card-container" ref="fullCardContainer">
        <div class="card-container" @click="showExpandedCard(true)">
            <div class="code-card" :style="`background: ${cardBackgroundColor};`">
                <div class="title-container">
                    <img class="icon" :src="image" />
                    <p class="title">{{ title }}</p>
                </div>
                <Skillbar :barBackgroundColor="mainBarBackgroundColor" :barForegroundColor="mainBarForegroundColor" />
            </div>
            <div class="expansions-container">
                <div class="expansions" :style="`background: ${cardExpansionsColor};`">
                    <div v-for="(item, index) in extensions" :key="'ex' + index" class="expansion">
                        <div class="title-container">
                            <img class="icon" :src="item.image" />
                            <p class="title">{{ item.title }}</p>
                        </div>
                        <SimpleSkillBar :amount="item.skill" :barBackgroundColor="extensionBarBackgroundColor" :barForegroundColor="extensionBarForegroundColor" />
                    </div>
                </div>
            </div>
        </div>
        <div class="expanded-card" :class="expandedCardClass" :style="`background: ${cardBackgroundColor};`">
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
        }
    },
    methods: {
        showExpandedCard(show) {
            this.expandedCardOpen = show;
        }
    },
    data() {
        return {
            expandedCardOpen: true,
        }
    },
    mounted() {
        document.addEventListener('click', (event) => {
            const componentElement = this.$refs.fullCardContainer;
            // Check if user clicked outside of this component
            if (componentElement && !componentElement.contains(event.target)) {
                this.showExpandedCard(false);
            }
        });
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
        cardBackgroundColor: {
            type: String,
            default: "rgb(53, 77, 134)"
        },
        cardExpansionsColor: {
            type: String,
            default: "rgb(23, 62, 94)"
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
            default: [{
                title: "QT6",
                image: "icons/code/qt.webp",
                skill: 50,
            }, {
                title: "QT6",
                image: "icons/code/qt.webp",
                skill: 20,
            }, {
                title: "QT6",
                image: "icons/code/qt.webp",
                skill: 90,
            }, {
                title: "QT6",
                image: "icons/code/qt.webp",
                skill: 15,
            }]
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

    &::selection {
        background: none;
    }
}

.expanded-card {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 650px;
    min-height: 550px;
    max-width: 100%;
    padding: 20px 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: $card_border_radius;
    z-index: 200;
    transform-origin: center center;
    transition: all 0.3s;
    box-shadow: $card_shadow_hover;

    &.expanded {
        transform: translate(-50%, -50%) scale(1);
    }
}

.card-container {
    display: flex;
    flex-direction: column;
    width: 250px;
    box-shadow: $card_shadow;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: $card_shadow_hover;

        .code-card {
            transition-duration: 0.05s;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        .expansions {
            max-height: $extensions_down_max_height;
            box-shadow: $card_shadow_hover !important;
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
    transition-duration: 1s;
    z-index: 10;

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

.expansions {
    border-bottom-left-radius: $card_border_radius;
    border-bottom-right-radius: $card_border_radius;
    width: 100%;
    top: 100%;
    max-height: 0;
    overflow: hidden;
    position: absolute;
    box-shadow: $card_shadow;

    .expansion {
        margin: 20px;

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
            }

            .icon {
                width: 15px;
                aspect-ratio: 1;
            }
        }
    }
}
</style>