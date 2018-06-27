<template>
<div>
	renderError
</div>
</template>

<script>
export default {
	render(h) {
		throw new TypeError("oops");
	},
	renderError(h, err) {
		return h("div", { style: { color: "red" } }, err.stack);
	}
};
</script>

<style>
</style>
