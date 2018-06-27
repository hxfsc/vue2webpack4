<template>
<div>
	<p>routers params: <span>{{ params_id }}</span></p>
	<p>routers query: <span>{{ query_id }}</span></p>
</div>
</template>

<script>
export default {
	data() {
		return {};
	},

	props: ["params_id", "query_id"]
};
</script>

<style>
</style>
