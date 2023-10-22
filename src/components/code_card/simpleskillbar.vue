<template>
    <div class="simple-skill-bar">
        <div class="bar" :style="`background: ${barBackgroundColor};`"></div>
        <div class="bar" :style="`width: ${amount}%; background: ${barForegroundColor};`">
            <p class="percentage">{{ amount }}%</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleSkillBar",
    props: {
        amount: {
            type: Number,
            default: 24,
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

.simple-skill-bar {
    width: 100%;
    height: 15px;

    .bar {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50px;

        .percentage {
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translate(0, -50%);
            font-size: 11px;
        }
    }
}
</style>