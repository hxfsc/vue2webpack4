<template>
	<div>
		<input v-model="inputMessage" />
		<Child message = "parent-child" />
		<Child :message= "inputMessage" @changeInput="changeInput" />
	</div>
</template>

<script>
import Child from './Child.vue';
export default {

	data(){
		return {
			inputMessage: "inputMessage"
		}
	},

	components: {
		Child: Child
	},

	methods: {
		changeInput(){
			this.inputMessage = "Child -> inputMessage"
		}
	}
}
</script>

<style>

</style>
