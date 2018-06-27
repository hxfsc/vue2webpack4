<template>
<div :style="wrapStyle" class="container container-fluid">
    <h3>Sync</h3>
    <hr>
    <label for="">Sync: {{syncParentData}}</label>
    <SyncChild :syncData.sync="syncParentData" />
</div>
</template>

<script>
import SyncChild from "./SyncChild.vue";
export default {
	data() {
		return {
			wrapStyle: {
				paddingTop: "20px"
			},

			syncParentData: 0
		};
	},

	components: {
		SyncChild: SyncChild
	}
};
</script>

<style>
</style>
