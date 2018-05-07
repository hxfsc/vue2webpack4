<template>
	<button @click="addCounter">+</button>
</template>

<script>
export default {
	methods: {
		addCounter(){
			this.$emit("addCounter")
		}
	}
}
</script>

<style>

</style>
