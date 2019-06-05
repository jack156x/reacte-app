/*会员管理-会员账户流水
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-22 21:49:14 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-22 21:50:04
 */
<template>
	<section class="member-account-statement-wrapper">
		<section class="main-pane">
			<section class="operate-group">
				<el-select v-model="query.status" class="select-status">
					<el-option label="==选择订单状态==" value=""></el-option>
					<el-option label="失败" value="1"></el-option>
					<el-option label="成功" value="2"></el-option>
					<el-option label="确认" value="3"></el-option>
				</el-select>
				
				<el-select v-model="query.type">
					<el-option label="请选择借贷类型" value=""></el-option>
				</el-select>
				
				<el-date-picker v-model="query.startTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
				<el-date-picker v-model="query.endTime" type="datetime" placeholder="选择日期时间"></el-date-picker>

				<el-input placeholder="系统订单号" v-model="query.queryString" class="input-with-query-field">
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>

				<!-- 右侧按钮 -->
				<el-button type="primary" icon="el-icon-refresh" class="float-right"></el-button>
			</section>

			<!-- <section class="table-group"> -->
				<el-table :data="list" style="width: 100%" border class="table-group" height="0">
					<el-table-column prop="no" width="40"></el-table-column>
					<el-table-column prop="id" label="查询账号" width="180">
						<template slot-scope="scope">
							{{ scope.row.id }}
						</template>
					</el-table-column>
					<el-table-column prop="id" label="借贷类型" width="180"></el-table-column>
					<el-table-column prop="id" label="系统订单号"></el-table-column>
					<el-table-column prop="id" label="操作金额"></el-table-column>
					<el-table-column prop="id" label="优惠金额"></el-table-column>
					<el-table-column prop="id" label="手续费"></el-table-column>
					<el-table-column prop="id" label="积分"></el-table-column>
					<el-table-column prop="id" label="变动前余额"></el-table-column>
					<el-table-column prop="id" label="变动后余额"></el-table-column>
					<el-table-column prop="id" label="订单时间"></el-table-column>
					<el-table-column prop="id" label="订单状态"></el-table-column>
					<el-table-column prop="id" label="说明"></el-table-column>
				</el-table>
				<Pagination url="finance.onlinedeposits" :data="{}" @paging="pagingCallback"></Pagination>
			<!-- </section> -->
		</section>
	</section>
</template>

<script>
	import Pagination from '@/components/Pagination'

	export default {
		props: {
			accountId: {
				type: String,
			}
		},
		data() {
			return {
				query: {
					status: '',
					type: '',
					timeType: 'transform',
					startTime: '',
					endTime: '',
					queryField: 'account',
					queryString: '',
				},
				transformDialogVisible: false,
				memberDialogVisible: false,
				currentDetails: {},

				list: []
			};
		},
		methods: {
			viewDetails(data){
				this.currentDetails = data;
				this.transformDialogVisible = true;
			},
			viewMember(data){
				this.currentDetails = data;
				this.memberDialogVisible = true;
			},
			pagingCallback(list){
				this.list = list;
			},
		},
		computed: {
		},
		components: {
			Pagination,
		},
		created(){
		},
	}

</script>

<style lang="scss">
	.member-account-statement-wrapper{
		display: flex;
		align-items: stretch;
		
		.main-pane{
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			overflow: auto;

			.operate-group{
				padding: 0 0 10px 10px;

				.el-select{
					width: 100px;
				}
				.select-status{
					margin-right: 5px;
				}
				.input-with-query-field{
					width: 290px;
					margin-left: 5px;
				}

				.float-right{
					float: right;
				}
			}

			.table-group{
				.el-icon-search{
					font-weight: bold;
				}
			}

			.footer{
				padding-right: 80px;
				font-weight: bold;
				font-size: 14px;
				text-align: right;
				color: #475059;
			}
		}
	}
</style>
