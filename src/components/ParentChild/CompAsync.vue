<template>
	<div class="form-group">
		<h3>{{foor}}</h3>
        <hr>
		<input type="text" v-model="foor" @input="changeFoo" class="form-control col-sm-2" />
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
