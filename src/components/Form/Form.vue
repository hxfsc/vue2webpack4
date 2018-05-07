<template>
<div>
	<div class="select">
		<h3>选中的值为: {{select}}</h3>
		<select name="" id="" v-model="select">
			<option disabled value="">请选择</option>
			<option v-for="item in selectdata" :value="item.value">{{item.option}}</option>
		</select>
	</div>

	<hr>

	<div class="checkbox">
		<h3>选中值为: {{checkboxName}}</h3>
		<p v-for="item in checkList"> <label for=""><input type="checkbox" name="checkbox" v-model="checkboxName" :value="item">{{item}}</label></p>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return {
			select: "",
			option: "",
			selectdata:[{
				"value": "test1",
				"option": "test1"
			},{
				"value": "test2",
				"option": "test2"
			},{
				"value": "test3",
				"option": "test3"
			},{
				"value": "test4",
				"option": "test4"
			},{
				"value": "test5",
				"option": "test5"
			}],
			checkList: ["一", "二", "三", "四", "五", "六", "七"],
			checkboxName: []
		}
	}
}
</script>

<style>

</style>
