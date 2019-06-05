/*按需引入element-ui组件
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-31 09:59:09 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-31 11:30:28
 */
import Vue from 'vue'
import {
	Header,
	Container,
	Footer,
	Aside,
	Main,
	Button,
	Menu,
	Submenu,
	MenuItemGroup,
	MenuItem,
	Breadcrumb,
	BreadcrumbItem,
	Row,
	Col,
	Card,
	Form,
	FormItem,
	Input,
	Notification,
	MessageBox,
	Message,
	Select,
	Option,
	Table,
	TableColumn,
	Tag,
	Pagination,
	Switch,
	Link,
	DropdownMenu,
	DropdownItem,
	Dropdown,
	Tabs,
	TabPane,
	DatePicker,
	TimePicker,
	RadioGroup,
	Radio,
	ButtonGroup,
	Dialog,
	CheckboxGroup,
	Checkbox,
	RadioButton,
	Badge,
	CheckboxButton,
	InputNumber,
	Divider,
	Tree,
} from 'element-ui';


Vue.use(Header);
Vue.use(Container);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Switch);
Vue.use(Link);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(ButtonGroup);
Vue.use(Dialog);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(RadioButton);
Vue.use(Badge);
Vue.use(CheckboxButton);
Vue.use(InputNumber);
Vue.use(Divider);
Vue.use(Tree);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$ELEMENT = {
	size: 'small',
	zIndex: 3000
};