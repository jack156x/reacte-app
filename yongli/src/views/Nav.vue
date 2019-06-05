/*头部内容区
* @Author: zzh0211@live.com
* @Date: 2019-05-21 10:37:09
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 13:22:56
*/
<template>
	<section class="header-strip-wrapper">
		<!-- 左侧 -->
		<section class="left-area">
			<!-- 折叠按钮 -->
			<span class="logo">澳门永利彩票</span>
			<el-button class="icon-button" icon="fa fa-bars" @click="toggleSidePanel"></el-button>
		</section>
		<!-- 右侧 -->
		<section class="right-area">
				<!-- 当前时间 -->
				<div class="current-time">{{ currentTime }}</div>

				<!-- 上线提醒 -->
				<el-button class="icon-button" icon="fa fa-user" @click="loginRemindHandler"></el-button>
				<!-- 转入转出提醒 -->
				<el-badge :value="5" class="item">
					<el-button class="icon-button" icon="fa fa-money" @click="incomeOutRemindHandler"></el-button>
				</el-badge>
				
				<!-- 前端-后端 -->
				<el-dropdown class="header-menus">
					<el-button class="icon-button" icon="fa fa-clock-o"></el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>前端</el-dropdown-item>
						<el-dropdown-item divided>后端</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<!-- 推送消息 -->
				<el-badge :value="3" class="item">
					<el-dropdown class="header-menus" @command="pushMenusHandler">
						<el-button class="icon-button" icon="fa fa-envelope-o"></el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item icon="fa fa-rmb" command="withdraw">3条 会员取款</el-dropdown-item>
							<el-dropdown-item icon="fa fa-user-plus" command="income" divided>0条 会员入款</el-dropdown-item>
							<el-dropdown-item icon="fa fa-user" command="feedback" divided>0条 会员反馈</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-badge>
				
				<!-- 用户名 -->
				<el-dropdown class="user-avatar-menus header-menus" @command="userMenusHandler">
					<div class="icon-button user-avatar">
						<img :src="avatar" />
						<span>{{ username }}</span>
					</div>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item icon="fa fa-user" command="personal">个人信息</el-dropdown-item>
						<el-dropdown-item icon="fa fa-power-off" divided command="logout">安全退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
		</section>
	</section>
</template>

<script>
	import moment from 'moment'
	import menus from '@/config/menus.js'
	import { mapMutations } from 'vuex'
	import { TOKEN_KEY, LOGIN_PATH } from '@/config/global'
	import {
		ADD_TAB,
		UI_TOGGLE_SIDE_PANEL,
		CHANGE_ACTIVE_TAB,
		ADD_TAB_ACTIVE,
	} from '@/config/mutation-types.js'
	
	const avatar = require('@/assets/images/image.png');

	export default {
		data() {
			return {
				avatar,
				menus,
				/**当前系统时间 */
				currentTime: '',
			}
		},
		methods: {
			/**推送消息菜单 */
			pushMenusHandler(cmd){
				let tab = {};

				switch(cmd){
					case 'withdraw':
						tab = {
							flag: 'WithdrawTable',
							title: '会员取款待审核',
							path: 'WithdrawTable',
							props: {
								type: 'unaudited',
							},
						};
						break;
					case 'income':
						tab = {
							flag: 'NoAuditList',
							title: '会员取款待审核',
							path: 'NoAuditList',
							props: {
								viewType: 'NoAuditType',
							},
						};
						break;
					case 'feedback':
						tab = {
							flag: 'Feedback',
							title: '会员反馈信息',
							path: 'Feedback',
						};
						break;
				}

				// 打开“会员取款待审核”设置页
				this.addTabActive(tab);
			},
			/**用户头像菜单 */
			userMenusHandler(cmd){
				switch(cmd){
					case 'logout':
						// 清除token
						sessionStorage.removeItem(TOKEN_KEY);
						this.$router.replace(LOGIN_PATH);
						
						this.$notify({
							title: '提示',
							message: '登出成功！',
							type: 'success',
						});
						break;
					case 'personal':
						const flag = 'Personal';

						// 打开“个人信息”设置页
						this.addTabActive({
							title: '个人信息',
							path: flag,
							flag,
						});
						break;
				}
			},
			/**上线提醒 */
			loginRemindHandler(){
				const flag = 'LoginRemind';

				// 打开“上线提醒”设置页
				this.addTabActive({
					title: '上线提醒',
					path: flag,
					flag,
				});
			},
			/**转入转出提醒-click */
			incomeOutRemindHandler(){
				const flag = 'IncomeOutRemind';

				// 打开“转入转出提醒”设置页
				this.addTabActive({
					title: '转入转出提醒',
					path: flag,
					flag,
				});
			},
			
			// 侧边栏折叠
			...mapMutations({
				toggleSidePanel: 'ui/'+UI_TOGGLE_SIDE_PANEL,
				addTab: ADD_TAB,
				changeActiveTab: CHANGE_ACTIVE_TAB,
				addTabActive: ADD_TAB_ACTIVE,
			}),
		},
		computed: {
			username(){
				return this.$store.getters.userInfo.username;
			},
		},
		mounted(){
			setInterval(()=>this.currentTime=moment().format('YYYY-MM-DD HH:mm:ss'), 1000);
		},
	}

</script>
<style lang="scss">
	.header-strip-wrapper{
		display: flex;
		height: 100%;
		color: #fff;

		.icon-button{
			align-self: stretch;
			border: none;
			background-color: transparent;
			color: inherit;
			border-radius: 0;
			font-size: 14px;
		}
		.icon-button:hover{
			background-color: #2f86ce;
		}

		.left-area{
			display: flex;
			align-items: center;
			
			.logo {
				padding: 0 20px;
				text-align: center;
				min-width: 160px;
				font-weight: bold;
				font-size: 20px;
			}
		}

		.right-area{
			flex: 1;
			display: flex;

			.el-badge{
				display: flex;

				.el-badge__content.is-fixed{
					transform: translateY(10%) translateX(50%) scale(0.833333);
					z-index: 999;	// 超过3000，会大于饿了么组件遮罩
					pointer-events: none;
				}
			}

			.el-button+.el-button{
				margin-left: 0;
			}

			.current-time{
				flex: 1;
				align-self: center;
				text-align: right;
				font-size: 16px;
				font-weight: bold;
				padding-right: 10px;
			}

			.header-menus{
				display: flex;
				color: #fff;
			}

			.user-avatar-menus{
				// width: 130px;

				.user-avatar{
					// padding: 5px;
					padding: 0 20px;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					width: 100%;
					
					img{
						width: 35px;
						height: 35px;
						border: 2px solid #fff;
						border-radius: 50%;
						box-sizing: border-box;
						margin-right: 5px;
					}
				}	
			}
		}
	}
</style>
