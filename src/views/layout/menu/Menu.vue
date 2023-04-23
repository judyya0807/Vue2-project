<template>
    <div>
        <!-- <h2>navigation</h2> -->
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#112f50" text-color="#fff"
            active-text-color="#ffd04b" router :collapse="this.$store.state.changeMenu.isCollapse">
            <el-menu-item>
                <span slot="title">生鲜采购系统</span>
            </el-menu-item>
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/product">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>产品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/product/prod-list">产品列表</el-menu-item>
                    <el-menu-item index="/product/category">产品分类</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/orders">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/orders/orders-list">订单列表</el-menu-item>
                    <el-menu-item index="/orders/summary">汇总清单</el-menu-item>
                    <el-menu-item index="/orders/review">订单审核</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/ad">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>广告管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/ad/ad-list">广告列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="" disabled>
                <i class="el-icon-document"></i>
                <span>导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    // data() {
    //     return (){
    //         isCollapse = false
    //     }
    // },
    computed: {
        isCollapse() {
            return this.$store.state.isCollapse
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu {
    border-right: 0;

    /deep/ .is-active {
        background-color: #1e78bf !important;
        color: #fff !important;
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>