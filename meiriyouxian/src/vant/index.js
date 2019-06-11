import {
    Row, Col,
    Swipe,
    SwipeItem,
    Lazyload,
    Icon, Tabbar, TabbarItem
} from "vant";
const vantelement = {
    install(Vue) {
        [Row, Col, Swipe, SwipeItem, Lazyload, Icon, Tabbar, TabbarItem].forEach(Compo => Vue.use(Compo));
    }
}
export default vantelement

// import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col } from 'element-ui'
// const element = {
//   install: function (Vue) {
//     Vue.use(Select)
//     Vue.use(Option)
//     Vue.use(OptionGroup)
//     Vue.use(Input)
//     Vue.use(Tree)
//     Vue.use(Dialog)
//     Vue.use(Row)
//     Vue.use(Col)
//   }
// }
// export default element