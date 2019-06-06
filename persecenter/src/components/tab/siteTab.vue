<template>
        <!-- 站点公告下面的tab切换 -->
    <div>
        <div class="tabmenu tabmenu-2">
            <ul class="tab-2">
                <li v-for="(tab,index) in tabList" @click="changeTab(tab)" :key="index">
                    <a class="current" :class="{active:tabIndex==index}">{{tab.name}}</a>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'siteTabs',
        props:
        {
            tabList: Array,
            tabIndex: Number
        },
        data () {
            return {
            }
        },
        methods: {
            changeTab: function (tab) {
            this.$emit('changeTab', tab)
            }
        }
    }
</script>

<style scoped>
.tabmenu.tabmenu-2 {
    border: 0;
    margin-left: 20px;
    height: auto;
}
.tabmenu {
    border-bottom: 1px solid #93bdee;
    margin-top: 20px;
    height: 40px;
}
.tabmenu.tabmenu-2 .tab-2 li {
    display: inline-block;
    text-align: center;
    color: #808080;
    font-weight: bold;
    font-size: 15px;
    margin-right: 10px;
    position: relative;
}
.tabmenu.tabmenu-2 .tab-2 a.current.active {
    border: 2px solid transparent;
    color: #fff;
    display: block;
    background: #2772ee;
}
.tabmenu.tabmenu-2 .tab-2 a.current {
    border: 2px solid #eee;
    color: #fff;
    display: block;
    padding: 5px 10px;
    background: #fff;
    color: #808080;
}
</style>