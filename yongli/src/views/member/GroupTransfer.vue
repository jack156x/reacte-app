/*会员管理-会员组别批量转移
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-23 15:38:36 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-05 10:28:21
 */
<template>
	<section class="member-group-transfer-wrapper">
		<section class="main-pane">
			<section class="operate-group">
				<!-- 右侧刷新按钮 -->
				<el-button type="primary" icon="el-icon-refresh" @click="refreshListHandler"></el-button>

				<!-- 分组列表-下拉列表 -->
				<el-button type="primary" class="square-right title" style="margin-left: 5px;">请选择转移分组》</el-button>
				<el-select v-model="currentGroup" placeholder="请选择转移分组》" class="square-left">
					<el-option v-for="item in groupList" :key="item.id" :label="item.name" :value="item.id"></el-option>
				</el-select>
			</section>

			<!-- 会员列表组件 -->
			<AllMember ref="memberList" :props="memberParams" @selectedChange="selectionChangedHandler"></AllMember>

			<!-- 底部按钮区 -->
			<section class="footer">
				<el-button type="primary" @click="transferHandler">确认</el-button>
				<el-button type="danger" @click="$emit('cancel')">关闭</el-button>
			</section>
		</section>
	</section>
</template>

<script>
	// 会员信息组件
	import AllMember from '@/views/member/AllMember'
	import { changegroup } from '@/services/member'

	export default {
		props: {
			/**会员分组列表数据 */
			groupList: {
				type: Array,
				required: true,
			}
		},
		data() {
			return {
				// 会员组件参数
				memberParams: {
					type: 'Groupcall',
					url: 'member.memberInfo',
					data: {

					},
				},

				// 选中项
				selectedList: [],
				// 当前选中分组id
				currentGroup: '',
			};
		},
		methods: {
			/**刷新列表数据 */
			refreshListHandler(){
				this.$refs.memberList.refreshTable();
			},
			/**选中列表项变更后 */
			selectionChangedHandler(selection){
				this.selectedList = selection;
			},
			/**执行转移 */
			async transferHandler(){
				if(this.selectedList.length == 0){
					this.$notify.warning({
						title: '提示',
						message: '请选择会员后再操作',
					});
					return;
				}

				// 执行转移操作
				const data = await changegroup({
					user_id: this.selectedList.map(({id})=>id),
					group_id: this.currentGroup,
				});

				this.$logger.log('会员转移成功：', data);
				
				// 提示
				this.$notify.success({
					title: '提示',
					message: data.detail,
				});

				// 通知变更
				this.$emit('transfered');
			},
		},
		computed: {
		},
		components: {
			AllMember,
		},
		created(){
			this.currentGroup = this.groupList[0].id;
		},
	}

</script>

<style lang="scss">
	@import '@/styles/sass/variable.scss';

	.member-group-transfer-wrapper{
		display: flex;
		align-items: stretch;
		
		.main-pane{
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			overflow: auto;
			position: relative;

			.operate-group{
				position: absolute;
				z-index: 9;
				right: 0;
				padding: 0 0 10px 10px;

				.el-select{
					width: 160px;

					.el-input__inner{
						background-color: $mainColor;
						color: $basicWhite;
					}
					.el-input{
						.el-input__inner{
							border-color: $mainColor;
						}
						.el-input__inner:hover{
							// border-color: rgba(255, 255, 255, 0.5);
							background-color: $mainColor;
							opacity: 0.9;
						}
					}
					.el-input__icon{
						color: $basicWhite;
					}
				}

				.title:hover,
				.title:focus{
					background-color: $mainColor;
					border-right-color: $mainColor;
				}
			}

			.footer{
				position: absolute;
				bottom: 0;
				right: 0;
				font-weight: bold;
				font-size: 14px;
				text-align: right;
				color: #475059;
			}
		}
	}
</style>
