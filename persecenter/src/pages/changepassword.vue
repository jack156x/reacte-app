<template>
    <!-- 修改密码 -->
    <div>
        <div class="hintotal float-not change-password-wrap">
        <form id="editForm">
            <change-tab :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
                <keep-alive>
                    <component :is="currentContent">
                    </component>
                </keep-alive>
            </change-tab> 
            </form>
        </div>
    </div>
</template>

<script>
    import changeTab from "@/components/changeTab"
    import password from "@/components/changeTab/editpassword"
    import savepassword from "@/components/changeTab/editsavepassword"
    export default {
        name:'passwords',
        data() {
            return {
            tabIndex: 0,
            currentContent:'password',
            tabList: [
                {
                index: 0,
                name: '修改登陆密码',
                component: 'password'
                },
                {
                index: 1,
                name: '修改安全密码',
                component: 'savepassword'
                }
            ]
            }
        },
        methods:{
             changeTab: function (tab) {
                this.tabIndex = tab.index;
                this.currentContent = tab.component;
            }
        },
        components:{
            changeTab,
            "password":password,
            "savepassword":savepassword
        }
    }
</script>

<style scoped>

</style>