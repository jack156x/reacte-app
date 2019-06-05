/*下拉菜单组件
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 17:53:53 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-20 17:58:01
 */
<template>
	<div class="dropdown-menu">
		<button class="dropdown-button">
			{{ buttonText }}
			<i class="fa fa-caret-down" style="padding-left: 3px;"></i>
		</button>
		<ul class="dropdown-menus dropdown-menu-right">
			<li v-for="(item, idx) of menus" :key="idx">
				<a :href="item.value" @mousedown="$emit('select', item.value);" @click.prevent>{{ item.text }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'fe-dropdown-menu',
		props: {
			/**默认展示菜单文本 */
			buttonText: {
				type: String,
				required: true,
			},
			/**菜单项列表 */
			menus: {
				type: Array,
				required: true,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.dropdown-menu{
		$border: 1px solid #ddd;

		position: relative;
		height: 40px;
		border-left: $border;
		border-right: $border;
		font-size: 12px;
		color: #475059;

		.dropdown-button{
			border: none;
			background-color: transparent;
			display: block;
			width: 100%;
			height: 100%;
			padding: 0 6px;
			margin: 0;
			font-size: inherit;
			color: inherit;
			outline: none;
			cursor: pointer;
		}

		.dropdown-menus{
			position: absolute;
			top: 100%;
			left: 0;
			z-index: 1000;
			display: none;
			float: left;
			min-width: 100px;
			padding: 5px 0;
			margin: 2px 0 0;
			text-align: left;
			list-style: none;
			background-color: #fff;
			-webkit-background-clip: padding-box;
			background-clip: padding-box;
			border: 1px solid #ddd;
			border: 1px solid rgba(0,0,0,.15);
			border-radius: 4px;
			box-shadow: 0 6px 12px rgba(0,0,0,.175);

			li{
				a{
					display: block;
					padding: 5px 20px;
					clear: both;
					font-weight: 400;
					line-height: 1.42857143;
					color: #475059;
					white-space: nowrap;
					padding: 6px 13px;
					text-decoration: none;
				}
				a:hover{
					color: #262626;
					text-decoration: none;
					background-color: #f5f5f5;
				}
			}
		}
		.dropdown-menus.dropdown-menu-right{
			right: 0;
			left: auto;
		}
	}
	
	.dropdown-menu .dropdown-button:focus + .dropdown-menus{
		display: block;
	}
</style>
