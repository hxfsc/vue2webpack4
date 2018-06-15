<template>
	<div class="container container-fluid">
		<button @click="show = !show" class="btn btn-primary">Toggle</button>
        <hr>
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

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.container{
    padding-top: 20px;
}

</style>
