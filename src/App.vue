<template>
    <mtd-container class="container">
        <mtd-aside width="200px" class="container-aside">
            <mtd-menu v-model="activeName" @select="handleSelectMenu">
                <mtd-menu-item v-for="(item, index) in menuData" :key="index" :name="item.value">
                    {{ item.label }}
                </mtd-menu-item>
            </mtd-menu>
        </mtd-aside>
        <mtd-container>
            <mtd-header class="container-header">
                <span class="container-header-logo">
                    <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="" />
                </span>
                <span>form最佳实践</span>
            </mtd-header>
            <mtd-main class="container-main">
                <div class="container-view">
                    <router-view />
                </div>
            </mtd-main>
        </mtd-container>
    </mtd-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { find } from 'lodash';
import { getValueInCollection } from '@datafe/tools';

@Component
export default class App extends Vue {
    activeName = '1';

    menuData = [
        {
            value: '1',
            label: '基础表单',
            name: 'form'
        },
        {
            value: '2',
            label: '表格+表单',
            name: 'form-table'
        },
        {
            value: '3',
            label: '多表单',
            name: 'composite'
        },
        {
            value: '4',
            label: '念念碎',
            name: 'readme'
        }
    ];

    @Watch('$route', { deep: true, immediate: true })
    onRouteChange(to) {
        const { name } = to;
        this.activeName = getValueInCollection(name, this.menuData, {
            key: 'name',
            valueKey: 'value'
        });
    }

    handleSelectMenu(item) {
        const itemMenu = find(this.menuData, { value: item.name });
        this.$router.push({ name: itemMenu.name });
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    .container-aside {
        box-shadow: 0 1px 3px 0 rgba(8, 28, 66, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.06);
        z-index: 1;
    }
    .container-header {
        background-color: #fff;
        color: #000;
        line-height: 60px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 8px 0 rgba(93, 98, 106, 0.1);
        .container-header-logo {
            display: inline-block;
            width: 47px;
            height: 46px;
            overflow: hidden;
            margin-right: 10px;
            img {
                width: 126px;
                height: 46px;
            }
        }
    }
    .container-main {
        background-color: #f7f8fc;
        padding: 10px;
        .container-view {
            background-color: #fff;
            padding: 10px;
            min-height: 100%;
        }
    }
}
</style>

<style>
html,
body {
    height: 100%;
}
</style>
