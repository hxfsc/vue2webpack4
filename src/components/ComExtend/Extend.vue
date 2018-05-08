<template>
	<div>
		{{test}}
	</div>
</template>
<script>
import Base from "./Base.vue";
export default {
	extends:Base,
	data(){
		return {
			test: 2
		}
	}
}
</script>
