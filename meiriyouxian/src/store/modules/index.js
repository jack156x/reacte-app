import Vue from "vue";
import Vuex from "vuex";
import getData from "./data"
Vue.use(Vuex);
const state = {
    listProduct: [
        {
            topImage:
                "https://j-image.missfresh.cn/mis_img_20180927122330041.png?mryxw=1125&mryxh=170",
            listStyleArray: [
                {
                    productImage:
                        "https://fms-image.missfresh.cn/cccaff07228c460c803b32d435a3600a.jpg?iopcmd=thumbnail&type=4&width=200",
                    freshImage:
                        "https://j-image.missfresh.cn/img_20180906151521657.png",
                    subTitle: "库尔勒香梨5个475g起",
                    messTitle: "落地即碎的多汁脆梨",
                    tagTxt: "限时特惠",
                    tagIcon: "",
                    upPriceName: "",
                    upPrice: "14.9",
                    downPrice: "12.9",
                    downPriceName: ""
                },
                {
                    productImage:
                        "https://fms-image.missfresh.cn/83c5f9d8ea3f4c389fd28d9e369da6dd.jpg?iopcmd=thumbnail&type=4&width=200",
                    freshImage:
                        "https://j-image.missfresh.cn/img_20180906151521657.png",
                    subTitle: "库尔勒香梨5个48g起",
                    messTitle: "落地即碎的多汁脆梨",
                    tagTxt: "限时特惠",
                    tagIcon: "",
                    upPriceName: "",
                    upPrice: "14.9",
                    downPrice: "12.9",
                    downPriceName: ""
                },
                {
                    productImage:
                        "https://image.missfresh.cn/833b2c3d99e94c058761c3556918b7e8.jpg?iopcmd=thumbnail&type=4&width=200",
                    freshImage:
                        "https://j-image.missfresh.cn/img_20180906151521657.png",
                    subTitle: "库尔勒香梨5个65g起",
                    messTitle: "落地即碎的多汁脆梨",
                    tagTxt: "限时特惠",
                    tagIcon: "",
                    upPriceName: "",
                    upPrice: "14.9",
                    downPrice: "12.9",
                    downPriceName: ""
                }
            ]
        },
        {
            topImage:
                "https://j-image.missfresh.cn/mis_img_20190221221934181.jpg?mryxw=750&mryxh=167",
            listStyleArray: [
                {
                    productImage:
                        "https://fms-image.missfresh.cn/cccaff07228c460c803b32d435a3600a.jpg?iopcmd=thumbnail&type=4&width=200",
                    freshImage:
                        "https://j-image.missfresh.cn/img_20180906151521657.png",
                    subTitle: "库尔勒香梨5个475g起",
                    messTitle: "落地即碎的多汁脆梨",
                    upPrice: "14.9",
                    downPrice: "12.9",
                    tagTxt: "限时特惠",
                    tagIcon: "",
                    upPriceName: "",
                    downPriceName: ""
                },
                {
                    productImage:
                        "https://fms-image.missfresh.cn/83c5f9d8ea3f4c389fd28d9e369da6dd.jpg?iopcmd=thumbnail&type=4&width=200",
                    freshImage:
                        "https://j-image.missfresh.cn/img_20180906151521657.png",
                    subTitle: "库尔勒香梨5个48g起",
                    messTitle: "落地即碎的多汁脆梨",
                    upPrice: "14.9",
                    downPrice: "12.9",
                    tagTxt: "限时特惠",
                    tagIcon: "",
                    upPriceName: "",
                    downPriceName: ""
                },
                {
                    productImage:
                        "https://image.missfresh.cn/833b2c3d99e94c058761c3556918b7e8.jpg?iopcmd=thumbnail&type=4&width=200",
                    freshImage:
                        "https://j-image.missfresh.cn/img_20180906151521657.png",
                    subTitle: "库尔勒香梨5个65g起",
                    messTitle: "落地即碎的多汁脆梨",
                    upPrice: "14.9",
                    downPrice: "12.9",
                    tagTxt: "限时特惠",
                    tagIcon: "特价商品不支持红包",
                    upPriceName: "",
                    downPriceName: ""
                }
            ]
        }
    ],
    added: [],
    getData: getData,
    imageList: [
        "https://j-image.missfresh.cn/img_20181213003703821.jpg",
        "https://j-image.missfresh.cn/img_20181213004855362.jpg"
    ],
    navList: [
        { navName: '热卖', rewardUrl: '/classify' },
        { navName: '囤年货', rewardUrl: '/city' },
        { navName: '拼好物', rewardUrl: '/city' },
        { navName: '水果', rewardUrl: '/city' },
        { navName: '蔬菜', rewardUrl: '/city' },
        { navName: '轻食', rewardUrl: '/city' },
        { navName: '粮油', rewardUrl: '/city' },
        { navName: '乳品', rewardUrl: '/city' },
        { navName: '肉蛋', rewardUrl: '/city' },
        { navName: '水产', rewardUrl: '/city' },
        { navName: '零食', rewardUrl: '/city' },
        { navName: '熟食', rewardUrl: '/city' },
        { navName: '酒饮', rewardUrl: '/city' },
        { navName: '日百', rewardUrl: '/city' }
    ],
    options: {
        container: "mySlide",
        slideData: [
            "热卖",
            "囤年货",
            "拼好物",
            "水果",
            "蔬菜",
            "轻食",
            "粮油",
            "乳品",
            "肉蛋",
            "水产",
            "零食",
            "酒饮",
            "熟食",
            "日百"
        ],
        slideId: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14"
        ],
        index: 0
    }
};
const getters = {
    listProduct: state => state.listProduct,
    imageList: state => state.imageList,
    navList: state => state.navList,
    options: state => state.options,
    getData: state => state.getData,
    cartProducts: state => {
        return state.added.map(({ id, num }) => {
            //在actions中只有的id和num的字段在原始数据上面筛选，这里通过id来匹配
            let cartProduct = state.listProduct.find(n => n.id == id)
            return {
                ...cartProduct,
                num
            }
        })
    },
    totalPrice: (state, getters) => {
        var total = 0;
        getters.cartProducts.forEach(n => {
            total += n.price * n.num;
        });
        return total;
    },
    totalNum: (state, getters) => {
        var total = 0;
        getters.cartProducts.forEach(n => {
            total += n.num;
        });
        return total;
    }
};
const actions = {
    addToCart({ commit }, product) {
        commit('add', {
            id: product.id
        })
    },
    clearAll({ commit }) {
        commit('clear')
    },
    delProduct({ commit }, product) {
        commit('delete', {
            id: product.id
        })
    }
};
const mutations = {
    add(state, { id }) {
        let record = state.added.find(n => n.id == id);
        if (!record) {
            state.added.push({
                id,
                num: 1
            })
        } else {
            record.num++;
        }
    },
    clear(state) {
        state.added = []
    },
    delete(state, { id }) {
        state.added.forEach((n, i) => {
            if (n.id == id) {
                state.added.splice(i, 1)
            }
        })
    }
};
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
export default store