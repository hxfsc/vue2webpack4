<template>
	<el-container>
		<el-header></el-header>
		<el-container>
			<el-aside>
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

				<dl>
						<dt>Element UI</dt>
						<dd v-for="item in element"><router-link :to="item.path">{{ item.component }}</router-link></dd>
				</dl>

			</el-aside>

			<el-container>
				<el-main>
						<router-view></router-view>
				</el-main>
				<el-footer></el-footer>
			</el-container>
		</el-container>
	</el-container>
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
			},{
                path: "/signal-base",
                component: "Signal"
            },{
                path: "/sync-base",
                component: "Sync"
            },{
                path: "/class-style",
                component: "ClassStyle"
            }],

			routers: [{
				path: "/router-props/123",
				component: "RouterProps",
			}],

			vuexs: [{
				path: "/vuex-base",
				component: "ComVuexBase"
            }],

            element: [{
              path: "/element-page",
              component: "ElementPage"
            },{
							path: "/element-layout",
							component: "ElementLayout"
						}]
        }
    }
}
</script>



