<template>
	<div>
		<p>{{text}}</p>
		<ul>
			<li v-for="item in routes" :key="item.name">
				<router-link :to="{ path: item.path }">{{item.name}}</router-link>
			</li>

			<hr>

			<li v-for="item in routes" :key="item.path">
				<router-link :to="item.path">{{item.component}}</router-link>
			</li>
		</ul>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
    data(){
        return {
			text: "",
			routes: [{
				path: "/com-base",
				component: "ComBase"
			},{
				path: "/com-defined",
				component: "ComDefined"
			},{
				path: "/com-error",
				component: "ComError"
			},{
				path: "/com-extend",
				component: "ComExtend"
			},{
				path: "/com-transition",
				component: "ComTransition"
			},{
				path: "/com-vmodel",
				component: "ComVModel"
			},{
				path: "/form",
				component: "Form"
			},{
				path: "/parent-child",
				component: "ParentChild"
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
