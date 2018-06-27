<template>
    <div class="form-group">
        <input type="text" class="form-control col-sm-2" :value="syncData" @input="changeSyncData($event.target.value)">
    </div>
</template>

<script>
export default {
	props: ["syncData"],

	methods: {
		changeSyncData(data) {
			this.$emit("update:syncData", data);
		}
	}
};
</script>

<style>
</style>
