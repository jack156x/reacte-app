/*左侧菜单栏
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 10:04:37 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 13:24:27
 */
<template>
	<section style="height: 100%;" class="left-menus-wrapper">
		<el-menu  class="sidebar-el-menu" :collapse="!showSide" @select="selectMenuItem"
				background-color="#253443" text-color="#fff" unique-opened active-text-color="#fff">
			<div id="user-left-box" v-show="showSide">
				<div class="user-box"> 
					<span class="name"> {{ userInfo.realname }} </span> 
					<span class="status"> 
						<i class="fa fa-circle"></i>
						在线 
					</span> 
				</div>
            </div>
			<el-submenu :index="menu.path" v-for="menu of menus" :key="menu.path">
				<template slot="title">
					<i class="fa" :class="'fa-' + menu.icon"></i>
					<span>{{ menu.name }}</span>
				</template>
				<el-menu-item :index="sub.path" v-for="sub of menu.children" :key="sub.path">{{ sub.name }}</el-menu-item>
			</el-submenu>
		</el-menu>
	</section>
</template>


<script>
	import menus from '@/config/menus'
	import { mapGetters } from 'vuex'
	

	export default {
		data(){
			return {
				menus,
			};
		},
		methods: {
			selectMenuItem(path){
				this.$logger.log('点击的菜单：', path);
				this.$emit('select', { 
					path, 
					title: this.menuMap[path],
				});
			},
			firstUpperCase(str){
				return str[0].toUpperCase() + str.substring(1);
			},
		},
		computed: {
			menuMap(){
				return this.menus.reduce((prev, { children })=>{
					const part = children.reduce((p2, { name, path })=>{
						p2[path] = name;
						return p2;
					}, {});

					prev = Object.assign(prev, part);
					return prev;
				}, {});
			},
			menuCompMap(){
				return this.menus.reduce((prev, { children })=>{
					const part = children.reduce((p2, { name, path })=>{
						path = path.split('/').filter(v=>v).map(v=>this.firstUpperCase(v)).join('');
						p2[path] = name;
						return p2;
					}, {});

					prev = Object.assign(prev, part);
					return prev;
				}, {});
			},
			
			...mapGetters({
				showSide: 'ui/sidePanel',
				userInfo: 'userInfo',
			})
		}
	}

</script>

<style lang="scss">
	.left-menus-wrapper{
		background-color: #253443;

		.sidebar-el-menu:not(.el-menu--collapse){
			width: 200px;
		}
		.sidebar::-webkit-scrollbar{
			width: 0;
		}
		#user-left-box {
		padding: 5px 15px 2px 15px;
		.user-box {
				color: #fff;
				padding-left: 0px;
				padding-top: 10px;
				.name {
					display: block;
					font-size: 14px;
					font-weight: 600;
					line-height: 1.2;
				}
				.status {
					display: block;
					font-size: 14px;
					padding-top: 8px;
					i {
						color: #7FC8BA;
						margin-right: 4px;
					}
				}
			}
		}
		.sidebar::-webkit-scrollbar{
			width: 0;
		}
		.sidebar > ul {
			height:100%;
		}
		.el-menu{
			border:none;
		}
		.el-menu-item, .el-submenu__title{
			height:35px;
			line-height:35px;
		}

		.el-submenu__title i{
			color: #fff;
			margin-right: 10px;
		}
	}
</style>
