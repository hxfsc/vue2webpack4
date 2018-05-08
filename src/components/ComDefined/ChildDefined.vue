<template>
<div>
	child-defined {{ propsOne }}
	<label for="">输入修改: <input type="text" v-model="changeText" @change="handleChange()" /></label>
</div>
</template>

<script>
export default {
	data(){
		return {
			changeText: this.$props.propsOne
		}
	},

	props:{
		"propsOne":{
			default : 1
		}
	},

	methods: {
		handleChange(){
			this.$emit("changeText", this.changeText)
		}
	}
}
</script>

<style>

</style>
