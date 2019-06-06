import Vue from 'vue'
import Router from 'vue-router'
const home = resolve => require(['@/pages/home'], resolve)
const withdrawList = resolve => require(['@/pages/withdrawList'], resolve)
const moneyRecord = resolve => require(['@/pages/moneyRecord'], resolve)
const gameNotice = resolve => require(['@/pages/gameNotice'], resolve)
const personal = resolve => require(['@/pages/personal'], resolve)
const promotion = resolve => require(['@/pages/promotion'], resolve)
const changepassword = resolve => require(['@/pages/changepassword'], resolve)
const betting = resolve => require(['@/pages/betting'], resolve)
const preferential = resolve => require(['@/pages/preferential'], resolve)
const transfrom = resolve => require(['@/pages/transform'], resolve)
const withdrawal = resolve => require(['@/pages/withdrawal'], resolve)
const payzone = resolve => require(['@/pages/payzone'], resolve)
Vue.use(Router)

const router = new Router({
    mode: "history",
    // base: '/dist',
    routes: [{
            path: '/',
            name: "home",
            text: "财务中心",
            classname: "",
            component: home,
            redirect: '/transfrom',
            children: [
                { path: "/transfrom", classname: "home", name: "额度转换", text: "额度转换", component: transfrom },
                {
                    path: '/withdrawal',
                    name: "存款专区",
                    classname: "deposit",
                    meta: {
                        text: "存款专区",
                    },
                    component: withdrawal,
                    children: [{
                        path: '/withdrawal/:paytype',
                        name: "存款专区",
                        classname: "deposit",
                        meta: {
                            text: "存款专区 / 存款专区详情",
                        },
                        component: payzone
                    }]
                },
                {
                    path: "/withdrawList",
                    name: "取款专区",
                    classname: "withdraw",
                    meta: {
                        text: "取款专区",
                    },
                    component: withdrawList
                },
                {
                    path: "/moneyRecord",
                    name: "资金记录",
                    classname: "capital",
                    meta: {
                        text: "资金记录",
                    },
                    component: moneyRecord
                },
                {
                    path: "/betting",
                    name: "投注记录",
                    classname: "gamerecord",
                    meta: {
                        text: "投注记录",
                    },
                    component: betting
                },
                {
                    path: "/preferential",
                    name: "优惠记录",
                    classname: "sale",
                    meta: {
                        text: "优惠记录",
                    },
                    component: preferential
                }
            ]
        },
        {
            path: "/",
            name: "personcenter",
            classname: "",
            text: "个人中心",
            component: home,
            children: [{
                    path: "/gameNotice",
                    name: "消息公告",
                    classname: "info",
                    meta: {
                        text: "消息公告",
                    },
                    component: gameNotice
                },
                {
                    path: "/personal",
                    name: "个人资料",
                    classname: "accout",
                    meta: {
                        text: "个人资料",
                    },
                    component: personal
                },
                {
                    path: "/promotion",
                    name: "全民推广",
                    classname: "recommend",
                    meta: {
                        text: "全民推广",
                    },
                    component: promotion
                },
                {
                    path: "/changepassword",
                    name: "修改密码",
                    classname: "recommend",
                    meta: {
                        text: "修改密码",
                    },
                    component: changepassword
                }
            ]
        },
        { path: '*', redirect: '/' }
    ]
});
router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    if (isChunkLoadFailed) {
        router.reload();
    }
});
export default router