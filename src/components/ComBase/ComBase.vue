<template>
<div>
	<p>{{text}}</p>
	<p>{{ptext}}</p>
</div>
</template>

<script>
export default {
	data() {
		return {
			text: 0
		};
	},

	computed: {
		ptext() {
			return this.text;
		}
	},

	mounted() {
		setInterval(() => {
			this.text++;
		}, 1 * 1000);
	}
};
</script>
