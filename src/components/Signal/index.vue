<template>
	<div class="container-fluid">
		<h4>父子通信</h4>
		<hr />
		<div class="col-sm-6">
			<div class="form-group">
				<input type="text" v-model="textData" class="form-control form-inline" />
			</div>
		</div>
		<SignalChild :propsData="textData" @changeData="changeData" />
		<hr />
		<h4>兄弟之间通信</h4>
		<hr />
		<Brother1 />
		<Brother2 />
	</div>
</template>

<script>
import SignalChild from "./SignalChild.vue";
import Brother1 from "./Brother1.vue";
import Brother2 from "./Brother2.vue";

export default {
	components: { SignalChild, Brother1, Brother2 },
	data() {
		return {
			textData: null
		};
	},

	methods: {
		changeData(data) {
			this.textData += parseInt(data);
		}
	}
};
</script>
