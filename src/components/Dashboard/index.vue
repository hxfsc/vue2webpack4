<template>
  <el-container id="main">
		<el-header></el-header>
		<el-container>
			<el-aside width="200px">
				<el-menu :unique-opened="true">
					<el-submenu v-for="(route, index) in routes" :index="`${route.title}-${index}`" :key="index">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{route.title}}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item v-for="(item, key) in route.children" :index="`${item.title}-${key}`" :key="key">
								<router-link v-if="/^\/router-props\/:id$/.test(item.path)" to="/router-props/112121">{{item.name}}</router-link>
                                <router-link v-else :to="item.path">{{item.name}}</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-main>
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="{ path: item.path}">{{item.title}}</el-breadcrumb-item>
					</el-breadcrumb>
					<hr />

				</el-main>
				<el-footer></el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
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
        text-decoration: none;
	}
}
</style>

<script>
import routes from "./router/routes";
export default {
	data() {
		return {
			text: "",
			routes
		};
	},

	computed: {
		breadcrumb() {
			const { path } = this.$route;
			const { routes:r } = this.$router.options;
      const breadcrumb = r.filter(item => item.path == path);
			return breadcrumb;
		}
	}
};
</script>
