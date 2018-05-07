<template>
	<div>
		<p>{{text}}</p>
		<ul>
			<li v-for="item in items" :key="item.name">
				<span>{{item.name}}</span>
				<i>{{item.age}}</i>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    data(){
        return {
			text: "A111pp222",
			items: [{
				name: "test1",
				age: "1"
			}, {
				name: "test2",
				age: "2"
			}, {
				name: "test3",
				age: "3"
			},{
				name: "test4",
				age: "4"
			}]
        }
    }
}
</script>

<style lang="scss" scoped>
	body{
		ul{
			padding: 0;
		}
		li{
			list-style-type: none;
		}
	}
</style>
