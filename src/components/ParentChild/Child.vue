<template>
<div>
	<p>{{message}}</p>
	<button @click="btnChange" class="btn btn-primary">change</button>
</div>
</template>

<script>
export default {
	props: ["message"],

	methods: {
		btnChange() {
			this.$emit("changeInput");
		}
	}
};
</script>

<style>
</style>
