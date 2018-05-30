<template>
    <div class="container contaier-fluid">
        <label for="">组件一：{{num}}</label>
        <button class="btn btn-danger" @changeBrother1 = "changeBrother" @click="changeBrother">修改组件二</button>
    </div>
</template>

<script>
import {bus} from "./Bus.vue";
export default {
    data() {
        return {
            num: 1
        }
    },

    methods: {
        changeBrother() {
            bus.$emit("changeBrother2")
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        margin-bottom: 20px;

        label{
            margin-right: 40px;
        }
    }
</style>
