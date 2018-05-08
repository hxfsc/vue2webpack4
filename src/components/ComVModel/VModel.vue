<template>
	<div>
		<h3>Vmode: <label for="">{{text}}</label></h3>
		<v-input :text="text" @input="args => { handleInput(args) }" />
	</div>
</template>

<script>
import VInput from "./VInput.vue";
export default {
	data() {
		return {
			text: "121"
		}
	},

	components: {
		"VInput": VInput
	},

	methods: {
		handleInput(args) {
			this.text = args
		}
	}


}
</script>

<style>

</style>
