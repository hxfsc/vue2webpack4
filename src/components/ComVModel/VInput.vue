<template>
<div>
	<input class="form-control col-sm-2" type="text" v-model="vinputText" @input="handleInput" />
</div>
</template>

<script>
export default {
	data() {
		return {
			vinputText: this.$props.text
		};
	},

	props: ["text"],

	methods: {
		handleInput() {
			this.$emit("input", this.vinputText);
		}
	}
};
</script>

<style>
</style>
