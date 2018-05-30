<template>
    <div class="row container">
        <p class="col-2">来自父组件的值 {{propsData}}</p>
        <button @click="changeParent" class="btn btn-primary col-2">修改</button>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },

    methods: {
        changeParent() {
            this.$emit("changeData", 10);
        }
    },

    props: [
        "propsData"
    ]
}
</script>

<style>

</style>
