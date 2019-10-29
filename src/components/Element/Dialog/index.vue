<template>
	<div>
		<el-input v-model="title" @change="changeProvide"></el-input>
		<el-divider></el-divider>
		<div>Title: {{title}}</div>
		<el-divider></el-divider>
		<el-button type="primary" @click="testDialog">{{dialog}}</el-button>
		<Tdialog :visible="visible" v-on:closeDialog="closeDialog"></Tdialog>
	</div>
</template>

<script>
import Tdialog from "./Tdialog";
export default {
	components: { Tdialog },

	provide() {
		return {
			title:this.title
		};
	},

	data() {
		return {
			title: "abs",
			dialog: "测试",
			visible: false
		};
	},


    watch:{
        title:(v)=>{
            console.log(v)
            return v
        }
    },

	methods: {
		changeProvide(data) {
			this.title = data;
		},

		testDialog() {
			this.visible = true;
		},

		closeDialog() {
			this.visible = false;
		}
	},

	computed: {}
};
</script>

<style lang="scss" scoped>
</style>
