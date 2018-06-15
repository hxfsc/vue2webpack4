<template>
    <div class="container container-fluid class-style-wrap">

        <h3>Style inline</h3>
        <hr>
        <div class="alert alert-warning" :style="[styleObject]">改变 Style </div>
        <button class="btn btn-primary" @click="toggleStyle">改变</button>
        <hr>
        <h3>Array class:</h3>
        <hr>
        <div class="alert" :class="[ isActive ? 'alert-primary' : '', hasError ? 'alert-danger' : '' ]">改变状态...</div>
        <button class="btn btn-primary" @click="toggle">改变</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: false,
            styleObject: {
                "backgroundColor": "#ff0000",
                "color": "#FFF"
            }
        }
    },

    methods: {
        toggle() {
            this.isActive = this.isActive ? false : true;
            this.hasError = this.hasError ? false : true;
        },

        toggleStyle(){
            this.styleObject = {
                "backgroundColor": "#ff00ff",
                "color": "#FFF"
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .class-style-wrap {
        padding-top:  20px;
    }
</style>
