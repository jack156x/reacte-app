import { Button, Select, Option, DatePicker, TimePicker, Dialog, Table, TableColumn, Form, formItem, Input, Pagination, Dropdown, DropdownMenu, DropdownItem, Radio } from 'element-ui'
const element = {
    install: function(Vue) {
        Vue.use(Button)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(DatePicker)
        Vue.use(TimePicker)
        Vue.use(Dialog)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Form)
        Vue.use(formItem)
        Vue.use(Input)
        Vue.use(Pagination)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Radio)
    }
}
export default element