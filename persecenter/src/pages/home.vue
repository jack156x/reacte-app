<template>
    <div>
         <top-header/>
         <div id="page-content" class="wrapper">
                <div class="sidebar">
                    <navleft/>
                </div>
                <div class="main-wrap" id="mainFrame">
                    <div>
                        <div class="notice">
                            <div class="notice-left">
                                <em class="path"></em>
                            </div>
                            <div class="path-right">
                                <a class="cursor">
                                    {{$route.meta.text}}
                                </a>
                            </div>
                        </div>
                        <router-view></router-view>
                    </div>
                </div>
        </div>  
    </div>
</template>

<script>
    import topHeader from "@/components/top_header";
    import navleft from "@/components/nav/left"
    export default {
        name:'home',
        components:{
            topHeader,
            navleft
        }
    }
</script>

<style scoped>
.wrapper {
    height: 100%;
    box-shadow: 0 6px 9px rgba(225,225,225,0.5);
}
.wrapper {
    margin: 0 auto;
    background: #fff;
    background: #f6f6f6;
    border: 1px solid #e1e1e1;
    width: 1198px;
    height: auto;
}
.wrapper:before, .wrapper:after {
    display: table;
    content: " ";
}
.wrapper .sidebar {
    width: 212px;
    float: left;
    border-right: 1px solid #e8ecef;
    border-bottom: 1px solid #e1e1e1;
    height: 100%;
    overflow: hidden;
    background: #fff url("../assets/images/left-t-t.png") no-repeat top left;
}
.wrapper>.main-wrap {
    min-height: 800px;
}
.wrapper{
    overflow: hidden;
    min-height: 800px;
}
.main-wrap {
    width: 985px;
    float: left;
    border-left: 1px solid #e1e1e1;
    padding-bottom: 20px;
    margin-left: -1px;
    background: #fff;
}
.main-wrap .notice {
    height: 48px;
    line-height: 44px;
    background: #f7f8fa;
}
.main-wrap .notice-left {
    float: left;
}
.main-wrap .notice .path {
    background: url("../assets/images/path.png") no-repeat 0 5px;
    padding-left: 20px;
    margin-left: 20px;
}
.main-wrap .notice .path-right {
    padding-top: 2px;
    float: left;
    width: 60%;
}
.main-wrap .notice .path-right a {
    color: #999;
}
.banner .right .nav-menu li a:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 29px;
    background: rgba(255,255,255,0.3);
    vertical-align: middle;
    margin-left: 7px;
}
</style>