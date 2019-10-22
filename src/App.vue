<template>
	<el-container id="main">
		<el-header></el-header>
		<el-container>
			<el-aside width="200px">
				<el-menu>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>基础</span>
						</template>
						<el-menu-item-group>
							<el-menu-item v-for="(item, key) in bases" :index="'1-'+key" :key="key">
								<router-link :to="item.path">{{item.name}}</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>路由</span>
						</template>

						<el-menu-item-group>
							<el-menu-item v-for="(item, key) in routers" :index="'2-'+key" :key="key">
								<router-link :to="item.path">{{item.component}}</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>Vuex</span>
						</template>
						<el-menu-item-group>
							<el-menu-item v-for="(item, key) in vuexs" :index="'3-'+key" :key="key">
								<router-link :to="item.path">{{item.component}}</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>Element UI</span>
						</template>
						<el-menu-item-group>
							<el-menu-item v-for="(item, key) in element" :index="'4-'+key" :key="key">
								<router-link :to="item.path">{{item.component}}</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
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

<style lang="scss">
html,
body {
	height: 100%;
	min-height: 100%;
}
</style>

<style scoped lang="scss">
#main {
	height: 100%;
	min-height: 100%;
}
aside {
	border-right: solid 1px #e6e6e6;
	min-height: 100%;
	overflow: hidden;
}
header {
	background-color: #545c64;
}
.el-menu {
	margin-right: -1px;

	a {
		color: #303133;
		display: inline-block;
		height: 100%;
		width: 100%;
	}
}
</style>

<script>
import bases from "./router/routes";
export default {
	data() {
		return {
			text: "",
			bases: bases.filter(item => item.path !== "/"),
			routers: [
				{
					path: "/router-props/123",
					component: "RouterProps"
				}
			],

			vuexs: [
				{
					path: "/vuex-base",
					component: "ComVuexBase"
				}
			],

			element: [
				{
					path: "/element-page",
					component: "ElementPage"
				},
				{
					path: "/element-layout",
					component: "ElementLayout"
				}
			]
		};
	}
};
</script>



