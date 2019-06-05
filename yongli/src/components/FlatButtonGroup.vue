/*扁平风格按钮组
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 17:59:08 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-20 18:09:19
 */
<template>
	<div class="flat-button-group">
		<ul>
			<li v-for="item of options" :key="item.label" @click="selectHandler(item)" :class="{active: current==item}">
				<i class="el-icon-document"></i>
				{{ item[props.label] }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'fe-flat-button-group',
		props: {
			/**列表选项字段关联说明 */
			props: {
				type: Object,
				required: true,
				default: ()=>({
					label: '',
					children: '',
					disabled: '',
				})
			},
			/**列表选项 */
			options: {
				type: Array,
				required: true,
			}
		},
		data: ()=>({
			current: null,
		}),
		methods: {
			selectHandler(data) {
				// 点击的是选中项，取消选中
				if(this.current === data){
					this.current = null;
				}else{
					this.current = data;
				}

				this.$emit('change', this.current);
			}
		},
	}
</script>


<style lang="scss" scoped>
	$treeSelectedBgc: rgb(255, 246, 230);

	.flat-button-group{
		font-size: 12px;

		ul{
			list-style: none;
			padding: 5px 10px;
			margin: 0;
		}
		li{
			margin-bottom: 5px;
			padding: 5px;
			cursor: pointer;
			line-height: 14px;

			i{
				font-size: 14px;
			}
		}
		li:hover{
			background-color: $treeSelectedBgc;
		}
		.active{
			background-color: $treeSelectedBgc;
		}	
	}
</style>
