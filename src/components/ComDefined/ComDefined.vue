<template>
<div>
	<h1>{{test}}</h1>
	<child-defined :props-one="test" @changeText=" c => { handleChange(c) }" />
	<child-defined @changeText=" c => { handleChange(c) }" />
</div>
</template>

<script>
import ChildDefined from "./ChildDefined.vue";
export default {
	data(){
		return {
			test: 10
		}
	},

	components:{
		ChildDefined: ChildDefined
	},

	methods: {
		handleChange(e){
			this.test = e
		}
	}
}
</script>

<style>

</style>
