<template>
	<div>
		<button @click="show = !show">Toggle</button>
		<transition name="fade">
			<TransitionChild v-if="show" />
		</transition>
	</div>
</template>

<script>
import TransitionChild from "./TransitionChild.vue";
export default {
	data(){
		return {
			show: true
		}
	},

	components: {
		TransitionChild: TransitionChild
	}
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
