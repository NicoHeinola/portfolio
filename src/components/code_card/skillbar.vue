<template>
    <div class="skill-bar" :style="`border-color: ${barBackgroundColor};`">
        <div class="inner-bar" :style="`background: ${barBackgroundColor};`">
            <div class="progress" :style="`width: ${amount}%; background: ${barForegroundColor};`">
                <p class="text">{{ amount }}%</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SkillBar",
    props: {
        amount: {
            type: Number,
            default: 85,
        },
        barBackgroundColor: {
            type: String,
            default: "rgb(24, 32, 48)"
        },
        barForegroundColor: {
            type: String,
            default: "rgb(211, 172, 45)"
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.skill-bar {
    $border_size: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - $border_size * 2);
    height: 25px;
    background: none;
    border: $border_size solid;
    border-radius: 50px;

    * {
        &::selection {
            background: none;
        }
    }


    .inner-bar {
        width: calc(100% - $border_size * 2);
        height: calc(100% - $border_size * 2);
        background: $progress_bar_background;
        border-radius: 50px;

        .progress {
            height: 100%;
            background: $progress_bar_foreground;
            border-radius: 50px;

            .text {
                position: absolute;
                font-weight: bold;
                top: 50%;
                right: 5px;
                transform: translate(0, -50%);
                font-size: 11px;
                color: $progress_bar_background;
            }
        }

    }
}
</style>