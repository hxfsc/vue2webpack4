<template>
<div class="container container-fluid defined-wrap">
	<h1>{{test}}</h1>
    <hr>
	<child-defined :props-one="test" @changeText=" c => { handleChange(c) }" />
	<child-defined @changeText=" c => { handleChange(c) }" />
</div>
</template>

<script>
import ChildDefined from "./ChildDefined.vue";
export default {
	data() {
		return {
			test: 10
		};
	},

	components: {
		ChildDefined: ChildDefined
	},

	methods: {
		handleChange(e) {
			this.test = e;
		}
	}
};
</script>

<style scoped lang="scss">
.defined-wrap {
	padding-top: 20px;
}
</style>
