<template>
	<div>
		<span>{{count}}</span>
		<span>{{fullName}}</span>
	</div>
</template>

<script>
import { mapState, mapGetters} from "vuex";
export default {

	computed: {
		...mapState(['count']),
		...mapGetters(['fullName'])
		// count(){
		// 	return this.$store.state.count
		// },
		// fullName(){
		// 	return this.$store.getters.fullName
		// }
	}
}
</script>

<style>

</style>
