<template>
	<div>
		<input type="text" :value="val" @change="inputOnChange" />
		<hr />
		<input type="text" :value="inputInterval()" @change="onChangeAction" />
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
	props: ["val"],
	methods: {
		inputOnChange(data) {
			const store = this.$store;
			const {
				target: { value }
			} = data;
			store.commit("onChange", value);
		},

		...mapState({ inputInterval: state => state.inputInterval }),
		...mapActions(["onChangeAction"])
	},
	computed: {
		//...mapMutations(["onChange"])
	}
};
</script>
