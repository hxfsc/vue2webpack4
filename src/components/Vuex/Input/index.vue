<template>
	<div>
		<SInput :val="val" />
		<hr />
		<div>
			input:
			<span>{{fullName}}</span>
			<span>{{val}}</span>
		</div>
		<div>
			intervalInput:
			<span>{{inputInterval}}</span>
		</div>
	</div>
</template>

<script>
import SInput from "./SInput.vue";
import { mapState, mapGetters } from "vuex";
export default {
	components: { SInput },
	data() {
		return {
			name
		};
	},

	computed: {
		...mapState({
			val: state => state.inputval,
			inputInterval: state => state.inputInterval
		}),
		...mapGetters(["fullName"])
	}
};
</script>

<style lang="scss" scoped>
</style>
