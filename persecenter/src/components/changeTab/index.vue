<template>
    <div>
        <!-- 修改密码的tab项目 -->
        <div class="change-link-wrap">
            <a class="change-link" v-for="(tab,index) in tabList" @click="changeTab(tab)" :class="{active:tabIndex==index}" :key="index">{{tab.name}}</a>
        </div>
        <slot></slot>
            
    </div>
</template>

<script>
    export default {
        name:'TabSchange',
        props:{
                tabList: Array,
                tabIndex: Number
            },
        data() {
            return {
            }
        },
         methods: {
            changeTab(tab) {
               this.$emit('changeTab', tab)
            }
        }
    }
</script>

<style scoped>
.change-password-wrap .change-link-wrap {
    text-align: center;
    word-spacing: -4px;
    margin: 0 0 20px 0;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
}
.change-password-wrap .change-link-wrap .change-link:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 0;
}
.change-password-wrap .change-link-wrap .change-link.active {
    background: #3b82f7;
    border: 1px solid #3b82f7;
    color: #fff;
}
.change-password-wrap .change-link-wrap .change-link {
    display: inline-block;
    width: 150px;
    height: 45px;
    line-height: 44px;
    text-align: center;
    border: 1px solid #ddd;
    color: #999;
}
.change-password-wrap .change-link-wrap .change-link:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: none;
}
</style>