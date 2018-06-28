<template>
	<el-container>
		<el-header>
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                评论
                <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                回复
                <el-badge class="mark" :value="3" />
                </el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </el-header>
		<el-container>

			<el-container>
				<el-main>main</el-main>
				<el-footer>footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
export default {};
</script>

<style>
</style>
