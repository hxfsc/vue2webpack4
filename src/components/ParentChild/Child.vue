<template>
<div>
	<p>{{message}}</p>

	<button @click="btnChange">change</button>
</div>
</template>

<script>
export default {


	props: [
		'message'
	],

	methods: {
		btnChange(){
			this.$emit("changeInput");
		}
	}
}
</script>

<style>

</style>
