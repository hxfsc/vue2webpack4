<template>
	<button @click="addCounter" class="btn btn-warning">+</button>
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
