<template>
    <div class="container contaier-fluid">
        <div class="input-group col-sm-4">
            <label for="">组件二：{{num}}</label>
            <input type="text" class="form-control" v-model="inputData">
            <div class="input-group-prepend">
                <button class="btn btn-warning" @click="changeBrother2">修改组件一</button>
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
		};
	},

	methods: {
		changeBrother2() {
			bus.$emit("changeBrother", this.inputData);
		}
	},

	mounted() {
		bus.$on("changeBrother2", data => {
			this.num = this.num + parseInt(data);
		});
	}
};
</script>

<style lang="scss" scoped>
label {
	margin-right: 40px;
}
</style>
