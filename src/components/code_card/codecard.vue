<template>
    <div class="full-card-container" ref="fullCardContainer">
        <div class="card-container" @click="showExpandedCard(true)" :class="expandedCardClass">
            <div class="code-card" :style="`background: ${cardBackgroundColor};`">
                <div class="title-container">
                    <img class="icon" :src="image" />
                    <p class="title">{{ title }}</p>
                </div>
                <Skillbar :barBackgroundColor="mainBarBackgroundColor" :barForegroundColor="mainBarForegroundColor"></Skillbar>
            </div>
            <div class="expansions-container">
                <div class="expansions" :style="`background: ${cardExpansionsColor};`">
                    <div v-for="(item, index) in extensions" :key="'ex' + index" class="expansion">
                        <div class="title-container">
                            <img class="icon" :src="item.image" />
                            <p class="title">{{ item.title }}</p>
                        </div>
                        <SimpleSkillBar :amount="item.skill" :barBackgroundColor="extensionBarBackgroundColor" :barForegroundColor="extensionBarForegroundColor"></SimpleSkillBar>
                    </div>
                </div>
            </div>
        </div>
        <div @click="showExpandedCard(false)" class="shadow-overlay" :class="expandedCardClass"></div>
        <div class="expanded-card" :class="expandedCardClass">
            <div class="nav" :style="`background: ${cardExpansionsColor};`">
                <div @click="selectNavItem(title)" class="item" :style="navItemSelectedStyle(title)">
                    <div class="hover-item" :style="`background: ${cardNavHoverColor}`"></div>
                    <img class="icon" :src="image" />
                    <p class="text">{{ title }}</p>
                </div>
                <div class="underline"></div>
                <div v-for="(item, index) in extensions" @click="selectNavItem(item.title)" :key="'expanded-nav-item' + index" class="item" :style="navItemSelectedStyle(item.title)">
                    <div class="hover-item" :style="`background: ${cardNavHoverColor}`"></div>
                    <img class="icon small" :src="item.image" />
                    <p class="text">{{ item.title }}</p>
                </div>
            </div>
            <div class="content" :style="`background: ${cardBackgroundColor}`">
                <div class="text-box" v-for="(item, index) in selectedItemDescription" :key="'desc-' + index">
                    <img class="list-icon" src="icons/list-item.png" />
                    <div class="box" :style="`background: ${cardNavHoverColor}`">
                        <p class="text">{{ item.text }}</p>
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
        }
    },
    methods: {
        showExpandedCard(show) {
            this.expandedCardOpen = show;
        },
        selectNavItem(itemName) {
            this.selectedNavItem = itemName;
        },
        navItemSelectedStyle(itemName) {
            return this.selectedNavItem == itemName ? `background: ${this.cardBackgroundColor}` : "";
        }
    },
    data() {
        return {
            expandedCardOpen: true,
            selectedNavItem: this.title,
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
            default: [{
                title: "QT6(1)",
                image: "icons/code/qt.webp",
                skill: 50,
                description: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis nulla. Nam purus magna, dignissim et justo quis, tempus imperdiet nisl. Nunc ligula dui, tristique quis laoreet vitae, volutpat non lacus. Vivamus dignissim aliquam magna ac volutpat. Sed in felis varius, mollis orci sed, feugiat mauris. Praesent luctus hendrerit neque, ut pellentesque nisl gravida porttitor. Nam nibh risus, varius id hendrerit vitae, convallis imperdiet velit. Maecenas faucibus erat id mauris egestas, a tincidunt nibh pulvinar. Suspendisse porta, augue at convallis dictum, augue leo molestie lorem, ut placerat augue enim et erat. ",
                    }
                ]
            },
            {
                title: "QT6(2)",
                image: "icons/code/qt.webp",
                skill: 20,
                description: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis nulla. Nam purus magna, dignissim et justo quis, tempus imperdiet nisl. Nunc ligula dui, tristique quis laoreet vitae, volutpat non lacus. Vivamus dignissim aliquam magna ac volutpat. Sed in felis varius, mollis orci sed, feugiat mauris. Praesent luctus hendrerit neque, ut pellentesque nisl gravida porttitor. Nam nibh risus, varius id hendrerit vitae, convallis imperdiet velit. Maecenas faucibus erat id mauris egestas, a tincidunt nibh pulvinar. Suspendisse porta, augue at convallis dictum, augue leo molestie lorem, ut placerat augue enim et erat. ",
                    }
                ]
            },
            {
                title: "QT6(3)",
                image: "icons/code/qt.webp",
                skill: 90,
                description: [
                    {
                        text: " , tempus  et erat. ",
                    },
                    {
                        text: "Lorem  venenatis nulla. Nam purus magna, dignissim et justo quisipsum dolor sit amet, consectetur adipiscing elit. Duis nec"
                    },
                    {
                        text: "imperdiet nisl. Nunc ligula dui, tristique quis laoreet vitae, volutpat non lacus. Vivamus dignissim aliquam magna ac volutpat. Sed in felis varius, mollis orci sed, feugiat mauris. Praesent luctus hendrerit neque, ut pellentesque nisl gravida porttitor. Nam nibh risus, varius id hendrerit vitae, convallis imperdiet velit. Maecenas faucibus erat id mauris egestas, a tincidunt nibh pulvinar. Suspendisse porta, augue at convallis dictum, augue leo molestie lorem, ut placerat augue enim"
                    }
                ]
            },
            {
                title: "QT6(4)",
                image: "icons/code/qt.webp",
                skill: 15,
                description: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis nulla. Nam purus magna, dignissim et justo quis, tempus imperdiet nisl. Nunc ligula dui, tristique quis laoreet vitae, volutpat non lacus. Vivamus dignissim aliquam magna ac volutpat. Sed in felis varius, mollis orci sed, feugiat mauris. Praesent luctus hendrerit neque, ut pellentesque nisl gravida porttitor. Nam nibh risus, varius id hendrerit vitae, convallis imperdiet velit. Maecenas faucibus erat id mauris egestas, a tincidunt nibh pulvinar. Suspendisse porta, augue at convallis dictum, augue leo molestie lorem, ut placerat augue enim et erat. ",
                    }
                ]
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

.expanded-card {
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 650px;
    height: 450px;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: $card_border_radius;
    z-index: 200;
    transform-origin: center center;
    box-shadow: $card_shadow_hover;

    &.expanded {
        transform: translate(-50%, -50%) scale(1);
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-top-right-radius: $card_border_radius;
        border-bottom-right-radius: $card_border_radius;
        overflow-y: scroll;
        padding: 20px;
        width: calc(100% - 20px * 2);
        height: calc(100% - 20px * 2);

        .text-box {
            display: flex;
            gap: 20px;
            width: 100%;
            margin-bottom: 20px;

            .list-icon {
                height: 20px;
                margin: auto;
                aspect-ratio: 1;
            }

            .box {
                padding: 10px;
                border-radius: $card_border_radius;
                width: 100%;
            }

            .text {}
        }
    }

    .nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 100%;
        border-top-left-radius: $card_border_radius;
        border-bottom-left-radius: $card_border_radius;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.644);
        z-index: 50;

        *::selection {
            background: none;
        }

        .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            width: 100%;
            height: 40px;
            transition: all 0.3s;

            &:hover {
                cursor: pointer;

                .hover-item {
                    opacity: 1;
                }
            }

            .hover-item {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                opacity: 0;
            }

            .icon {
                height: 65%;
                aspect-ratio: 1;
                margin-left: 10px;

                &.small {
                    height: 50%;
                }
            }
        }

        .underline {
            width: 90%;
            margin: 10px 0;
        }

    }
}

.card-container {
    display: flex;
    flex-direction: column;
    width: 250px;
    box-shadow: $card_shadow;
    transition: all 0.3s;

    *::selection {
        background: none;
    }

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

    &.expanded {
        opacity: 0.2;
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