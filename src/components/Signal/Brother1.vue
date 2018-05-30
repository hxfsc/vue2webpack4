<template>
    <div class="container contaier-fluid">
        <div class="input-group col-sm-4">
            <label for="">组件一：{{num}}</label>
            <input type="text" class="form-control" v-model="inputData">
            <div class="input-group-prepend">
                <button class="btn btn-danger" @click="changeBrother">修改组件二</button>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "./Bus.vue";
export default {
    data() {
        return {
            num: 1,
            inputData: 0
        }
    },

    mounted() {
        bus.$on("changeBrother", (data) => {
            this.num = this.num + parseInt(data);
        })
    },

    methods: {
        changeBrother() {
            bus.$emit("changeBrother2", this.inputData)
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
