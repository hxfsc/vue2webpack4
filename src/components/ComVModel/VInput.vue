<template>
<div>
	<input type="text" v-model="vinputText" @input="handleInput" />
</div>
</template>

<script>
export default {

	data() {
		return {
			vinputText: this.$props.text
		}
	},

	props: [
		"text"
	],

	methods: {
		handleInput(){
			this.$emit("input", this.vinputText)
		}
	}
}
</script>

<style>

</style>
