<template>
	<div>
		<div class="base-signal">
			<input v-model="inputMessage" />
			<Child message = "parent-child" @click.native="doTheThing" />
			<Child :message= "inputMessage" @changeInput="changeInput" />
		</div>

		<div class="counter-box">
			<h3>{{counter}}</h3>
			<BtnCounter @addCounter="addCounter" />
			<BtnCounter @addCounter="addCounter" />
		</div>

		<div class="comp-async">
			<hr>
			<p>Parent: {{foo}} </p>
			<CompAsync :foo.sync="foo" />
		</div>
	</div>
</template>

<script>
import Child from './Child.vue';
import BtnCounter from "./BtnCounter.vue";
import CompAsync from "./CompAsync.vue";
export default {

	data(){
		return {
			inputMessage: "inputMessage",
			counter: 0,
			foo: "bar",
		}
	},

	components: {
		Child: Child,
		BtnCounter: BtnCounter,
		CompAsync: CompAsync
	},

	methods: {
		doTheThing(e){
			console.log(e)
		},

		changeInput(){
			this.inputMessage = "Child -> inputMessage"
		},

		addCounter(){
			this.counter++
		}
	}
}
</script>

<style>

</style>
