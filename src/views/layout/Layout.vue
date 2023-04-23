<template>
    <div class="layout">
        <!-- <h2>layout page</h2> -->
        <!-- navigation part -->
        <div class="menu">
            <Menu></Menu>
        </div>

        <!-- right content part -->
        <div class="content" :class="{ small: this.$store.state.changeMenu.isCollapse }">
            <Content></Content>
        </div>

    </div>
</template>

<script>
import Menu from './menu/Menu.vue'
import Content from './content/Content.vue'

export default {
    components: {
        Menu,
        Content
    }

}
</script>

<style lang="less" scoped>
.layout {
    // display: flex;

    .menu {
        // width: 200px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #112f50;
    }

    .content {
        // flex: 1;
        padding-left: 200px;
        background-color: aqua;
        transition: padding-left 300ms;
    }

    .small {
        padding-left: 64px;
        transition: padding-left 300ms;
    }
}
</style>