<template>
    <div class="container container-fluid">
        <label for="">组件二：{{num}}</label>
        <button class="btn btn-warning" @changeBrother2 = "changeBrother">修改组件一</button>
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
            console.log(11);
        }
    }
}
</script>

<style lang="scss" scoped>
    label{
        margin-right: 40px;
    }
</style>
