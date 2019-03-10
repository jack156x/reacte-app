const state = {
    shopList: [
        { id: 11, name: "鱼香肉丝", price: 12 },
        { id: 22, name: "宫保鸡丁", price: 188 },
        { id: 23, name: "土豆丝", price: 14 },
        { id: 24, name: "米饭", price: 16 },
        { id: 25, name: "烧茄子", price: 15 }
    ],
    added: []
}
const getters = {
    shopList: state => state.shopList,
    cartProducts: state => {
        return state.added.map(({ id, num }) => {
            //在actions中只有的id和num的字段在原始数据上面筛选，这里通过id来匹配
            let cartProduct = state.shopList.find(n => n.id == id)
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
}
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
}

export default {
    state,
    getters,
    actions,
    mutations
}