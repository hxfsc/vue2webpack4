<template>
	<div>


		<aside>
			<dl>
				<dt>Base</dt>
				<dd v-for="item in bases" :key="item.path">
					<router-link :to="item.path">{{item.component}}</router-link>
				</dd>
			</dl>

			<dl>
				<dt>Router</dt>
				<dd v-for="item in routers" :key= "item.path"><router-link :to="{ path: item.path, query: { 'query_id': '123' } }">{{ item.component }}</router-link></dd>
			</dl>

			<dl>
				<dt>Vuex</dt>
				<dd v-for="item in vuexs"><router-link :to="item.path"> {{ item.component }} </router-link></dd>
			</dl>
		</aside>

		<article>
			<p>{{text}}</p>
			<router-view></router-view>
		</article>

	</div>
</template>

<script>
export default {
    data(){
        return {
			text: "",
			bases: [{
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
			}],

			routers: [{
				path: "/router-props/123",
				component: "RouterProps",
			}],

			vuexs: [{
				path: "/vuex-base",
				component: "ComVuexBase"
			}]
        }
    }
}
</script>


<style lang="scss" scoped>

	$asidePaddingLeft: 20px;

	aside{
		position: fixed;
		width: 200px;
		min-height: 100%;
		background: #86878e;

		dt,dd{
			padding-left: $asidePaddingLeft;
		}
		dt{
			color: #ccc;
			border-bottom: 1px solid #ccc;
			height: 40px;
			line-height: 40px;
			margin-bottom: 10px;
		}

		dd{
			margin-left: 0;
			line-height: 26px;
			a{
				color: #FFF;
				text-decoration: none;
			}
		}
	}

	article{
		margin-left: 210px;
	}

</style>

<style lang="scss">
	body{
		padding: 0;
		margin: 0;
		font-family: PingFangSC-Regular, Verdana, Arial, 微软雅黑, 宋体;
		p{
			margin: 0;
			padding: 0;
		}

		h1,h3{
			margin: 0;
		}
	}
</style>


