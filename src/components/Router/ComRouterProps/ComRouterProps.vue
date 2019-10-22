<template>
	<div>
		<p>
			routers params:
			<span>{{ id }}</span>
		</p>
		<p>
			routers query:
			<span></span>
		</p>
	</div>
</template>

<script>
export default {
	props: ["id"],
	data() {
		return {};
	}
};
</script>
