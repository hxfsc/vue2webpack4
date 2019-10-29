<template>
	<div>
		<el-dialog title="提示" :visible="visible" :before-close="closeDialog">
            <TContent></TContent>
        </el-dialog>
	</div>
</template>

<script>
import TContent from "./TContent";

export default {
	components: { TContent },
	props: ["visible"],
	data() {
		return {};
	},
	methods: {
		closeDialog() {
			this.$emit("closeDialog");
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
