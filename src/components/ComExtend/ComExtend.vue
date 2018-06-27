<template>
<div>
	<h3>Extend Components</h3>
	<Extend />
	<extend2 />
</div>
</template>

<script>
import Extend from "./Extend.vue";
import Extend2 from "./Extend2.vue";
export default {
	components: {
		Extend: Extend,
		Extend2: Extend2
	}
};
</script>

<style>
</style>
