<template>
	<div>
		<span>{{counter()}}</span>
		<span>{{fullName()}}</span>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions} from "vuex";
export default {

	mounted(){
		this.updateCountSync({
			num: 10,
			time: 2*1000
		})
	},

	methods: {
		...mapState({
			counter: (state) => state.count
		}),
		...mapGetters(["fullName"]),
		...mapActions(["updateCountSync"])
	}

}
</script>

<style>

</style>
