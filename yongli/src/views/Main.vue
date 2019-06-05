/*登录后的主页面框架
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 10:04:58 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 14:33:30
 */
<template>
	<el-container class="wrapper-container">
		<el-header height="43px" class="top-header">
            <el-container style="height: 100%;">
                <el-main>
                    <Nav></Nav>
                </el-main>
            </el-container>
		</el-header>
		<el-container>
            <LeftNav @select="selectMenuHandler"></LeftNav>
			<el-container class="main-container">
				<el-main>
                    <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTabHandler">
                        <el-tab-pane v-for="(item) in mainTabs" :closable="item.closeable"
                            :key="item.key" :label="item.title" :name="item.flag">
                            <div :is="item.comp" :props="item.props" v-bind="item.props" class="tab-container"></div>
                        </el-tab-pane>
                    </el-tabs>
					<section class="tab-right-operation">
						<!-- 标签栏菜单列表 -->
						<DropdownMenu button-text="页签操作" :menus="tabMenus" @select="tabMenuHandler"></DropdownMenu>
						<el-button class="btn-fullscreen" @click="fullscreenHandler">
							<i class="fa fa-arrows-alt"></i>
						</el-button>
					</section>
                </el-main>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	import screenfull from 'screenfull'
	import _ from 'lodash/util'
    import LeftNav from '@/views/LeftNav.vue'
	import Nav from '@/views/Nav.vue'
	import DropdownMenu from '@/components/DropdownMenu'
	import components from '@/config/components'
	import { mapGetters, mapMutations } from 'vuex'
	import {
		CHANGE_ACTIVE_TAB,
		ADD_TAB,
		REMOVE_TAB,
		REMOVE_OTHER_TABS,
		REMOVE_ALL_TABS,
		REFRESH_ACTIVE_TAB,
	} from '@/config/mutation-types.js'

	export default {
        name: 'home',
        data(){
            return {
				tabMenus: [{
					text: '刷新当前',
					value: 'refresh',
				},{
					text: '关闭当前',
					value: 'close',
				},{
					text: '关闭全部',
					value: 'closeAll',
				},{
					text: '关闭其他',
					value: 'closeOther',
				}]
            };
        },
		components: {
            LeftNav,
			Nav,
			DropdownMenu,
			...components,
		},
		async created(){
			// 获取全局配置
			this.$store.dispatch('global/config');
			// 获取用户信息
			this.$store.dispatch('userInfo');
		},
        methods: {
			// 关闭tab标签
            removeTabHandler(removeFlag) {
                let tabs = this.mainTabs;
				let activeName = this.editableTabsValue;

				let activeTab = tabs.find(({ flag })=>flag===removeFlag);
				
				// closeable=false不允许关闭
				if(!activeTab.closeable){
					return;
				}

				// 如果关闭的tab是当前打开的标签
                if (activeName === removeFlag) {
					// 查找下一个要显示的标签
					for (let i = 0; i < tabs.length; i++) {
						const tab = tabs[i];
						if(tab == activeTab){
							const nextTab = tabs[i + 1] || tabs[i - 1];
                            if (nextTab) {
								activeName = nextTab.flag;
								break;
                            }
						}
					}
                }

                this.editableTabsValue = activeName;
				this[REMOVE_TAB](removeFlag);
			},
			selectMenuHandler({ path, title }){
				// 执行添加标签
				this[ADD_TAB]({ 
					path, 
					title, 
					flag: path
				});
				// 激活当前选中标签
				this.editableTabsValue = path;
			},
			fullscreenHandler(){
				screenfull.toggle();
			},
			tabMenuHandler(operate){
				switch(operate){
					// 关闭当前标签
					case 'close':
						this.removeTabHandler(this.editableTabsValue);
						break;
					// 关闭全部
					case 'closeAll':
						this[REMOVE_ALL_TABS]();
						break;
					// 关闭其他
					case 'closeOther':
						this[REMOVE_OTHER_TABS]();
						break;
					// 刷新当前
					case 'refresh':
						this[REFRESH_ACTIVE_TAB]();
						break;
				}
			},

			
			...mapMutations([
				CHANGE_ACTIVE_TAB,
				ADD_TAB,
				REMOVE_TAB,
				REMOVE_OTHER_TABS,
				REMOVE_ALL_TABS,
				REFRESH_ACTIVE_TAB,
			]),
		},
		computed: {
			editableTabs: {
				get(){
					return this.mainTabs;
				},
				set(newVal){
					this
				},
			},
			editableTabsValue: {
				get(){
					return this.activeTab;
				},
				set(newActiveTab){
					this[CHANGE_ACTIVE_TAB](newActiveTab);
				},
			},
			
			...mapGetters([
				'mainTabs',
				'activeTab',
			]),
		},
	}

</script>

<style lang="scss">
	@import '@/styles/sass/variable.scss';
	
	$menuBgc: #2c3e50;

    html,body{
        margin: 0;
    }
	html,
	body,
	#app,
	.wrapper-container{
		font-family: 'Microsoft YaHei', "Helvetica Neue", Helvetica, Arial, sans-serif;
		height: 100%;
	}
    .wrapper-container{
		background-color: #f3f3f4;

		.main-card{
			// width: 640px;
			// height: 400px;
			box-shadow: 0 0 3px rgba(221,221,221,1);
			border: 1px solid #ddd;
		}

        .el-header, .el-footer {
            // background-color: #B3C0D1;
            color: #333;
            padding: 0;
        }
        .el-main {
            color: #333;
            padding: 0;
			position: relative;
        }

        .el-menu.el-menu--horizontal{
            border: none;
        }

		// 页面顶部header
		.top-header{
			box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.1);
            background-color: $mainColor;
		}

			.el-tabs__header.is-top{
				padding-right: 120px;
			}

		.tab-right-operation{
			position: absolute;
			right: 0;
			top: 0;
			width: 120px;
			height: 41px;
			display: flex;

				
			.el-menu-tabmenus{
				width: 80px;
				height: 100%;
				background-color: transparent;

				.el-submenu.is-active{
					.el-submenu__title{
						border-bottom: 0;
						color: #909399;
					}
				}
				
				.el-submenu__title{
					padding: 0;
					height: 40px;
					line-height: 40px;

					.el-submenu__icon-arrow{
						margin-left: 2px;
					}
				}
				.el-submenu__title:hover{
					background-color: transparent;
				}
			}

			// 全屏按钮
			.btn-fullscreen{
				background: transparent;
				border-width: 0;
				border-radius: 0px;
				// border-left: solid 1px #ddd;
				
				width: 40px;
				height: 39px;
				padding: 0;
			}

		}

		.el-submenu{
			.el-menu-item{
				height: 30px;
				line-height: 30px;
				min-width: 40px;
				padding: 0;
			}
		}

		.main-container{
			background-color: #fff;
			
			.tab-container{
				padding: 5px 5px 15px 5px;
				height: 100%;
				display: flex;
				flex-direction: column;
			}
			.el-tabs{
				display: flex;
				flex-direction: column;
				height: 100%;

				.el-tabs__content{
					flex: 1;
					flex-direction: column;
					
					.el-tab-pane{
						flex: 1;
						display: flex;
						align-self: stretch;
						flex-direction: column;
						height: 100%;
					}
				}

				.el-tabs__header{
					margin-bottom: 0;
				}
			}

		}
    }

	.el-aside {
		color: #333;
	}

	.logo-container{
        position: relative;
        
        .logo{
            width: 145px;
            height: 43px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }

	}

    .main-container{
        // padding: 0 15px;
        .el-footer{
            // margin: 0 -15px;
        }
    }
    .toggle-side-panel{

    }
    .breadcrumb-bar{
        display: inline-block;
    }

	::-webkit-scrollbar {
		width: 16px;
		height: 16px;
		cursor: pointer;
	}
	::-webkit-scrollbar-corner {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		min-height: 20px;
		background-clip: content-box;
		box-shadow: 0 0 0 5px rgba(0,0,0,.2) inset;
		background-color: rgba(0,0,0,0.2);
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb:hover{
		background-color: rgba(0,0,0,0.3);
	}
	::-webkit-scrollbar-track {
		box-shadow: 1px 1px 5px rgba(0,0,0,.2) inset;
	}
	::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
		border-radius: 999px;
		border: 5px solid transparent;
	}
	::-webkit-scrollbar-track {
		border-radius: 10px;
	}

</style>
