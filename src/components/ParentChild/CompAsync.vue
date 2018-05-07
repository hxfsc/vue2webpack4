<template>
	<div>
		<h3>{{foor}}</h3>
		<input type="text" v-model="foor" @input="changeFoo" />
	</div>
</template>

<script>
export default {
	data(){
		return {
			foor: this.$props.foo
		}
	},
	props: [
		"foo"
	],

	methods:{
		changeFoo(){
			this.$emit("update:foo", this.foor)
		}
	}
}
</script>

<style>

</style>
