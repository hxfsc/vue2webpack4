<template>
	<div class="form-group container container-fluid">
		<h3>Vmode: <label for="">{{text}}</label></h3>
        <hr>
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

<style scoped lang = "scss">
    .form-group {
        padding-top: 30px;
    }
</style>
