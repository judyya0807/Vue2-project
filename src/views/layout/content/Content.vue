<template>
    <div>
        <!-- <h2>right content</h2> -->
        <!-- header part -->
        <div class="header">
            <div class="open">
                <span v-if="!this.$store.state.changeMenu.isCollapse" class="iconfont icon-left-indent"
                    @click="collapseMenu"></span>
                <span v-else="this.$store.state.changeMenu.isCollapse" class="iconfont icon-right-indent"
                    @click="collapseMenu"></span>
            </div>
        </div>
        <!-- bottom part -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        // 折叠菜单
        collapseMenu() {
            const isActive = !this.$store.state.changeMenu.isCollapse
            this.$store.commit('changeMenu/collapseChange', isActive)
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    height: 50px;
    background-color: #1e78bf;

    .iconfont {
        cursor: pointer;
        font-size: 22px;
    }
}
</style>