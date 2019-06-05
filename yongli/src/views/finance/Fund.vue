/*财务管理-会员资金管理
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-22 21:50:09 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-01 16:31:42
 */
<template>
	<section class="finance-fund-wrapper">
		<section class="main-pane">
			<section class="operate-group">
				<section class="type-group" v-if="actionTypeOptions.length > 1">
					<el-checkbox v-model="query.action_type" v-for="item of actionTypeOptions" :key="item.id" :label="item.id">{{  item.name }}</el-checkbox>
				</section>
				
				<el-date-picker v-model="query.start_date" type="datetime" placeholder="选择日期时间" class="square-right" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
				<el-date-picker v-model="query.end_date" type="datetime" placeholder="选择日期时间" class="square-left" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
				
				<el-select v-model="query.pay_status" class="select-status square-right">
					<el-option label="全部状态" value=""></el-option>
					<el-option v-for="item of payTypeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
				</el-select>
				<el-input placeholder="请输入内容" v-model="query.text" class="input-with-query-field square-left" @keydown.enter.native="queryHandler">
					<el-select v-model="query.field" slot="prepend" placeholder="请选择">
						<el-option label="查询账号" value="username" v-if="!isSingleUser"></el-option>
						<el-option label="系统单号" value="charge_order_num"></el-option>
						<el-option label="登录账号" value="loginname" v-if="!isSingleUser"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search" @click="queryHandler"></el-button>
				</el-input>

				<!-- 右侧按钮 -->
				<el-button type="primary" icon="el-icon-refresh" class="btn-refresh" @click="refreshHandler"></el-button>
			</section>

			<!-- <section class="table-group"> -->
				<el-table :data="list" style="width: 100%" border height="0" class="table-group" >
					<el-table-column prop="no" width="40"></el-table-column>
					<el-table-column label="查询账号" width="120" show-overflow-tooltip>
						<template slot-scope="scope">
							<el-link type="primary" @click="viewMember(scope.row)" v-if="!isSingleUser" class="iconfont icon-fangdajing"></el-link>
							{{ scope.row.username }}
						</template>
					</el-table-column>
					<el-table-column prop="action_type" label="借贷类型" width="180">
						<template slot-scope="scope">
							{{ actionType[scope.row.action_type] }}
						</template>
					</el-table-column>
					<el-table-column prop="charge_order_num" label="系统单号" width="120" show-overflow-tooltip></el-table-column>
					<el-table-column prop="action_money" label="操作金额"></el-table-column>
					<el-table-column prop="preferential_fee" label="优惠金额"></el-table-column>
					<el-table-column prop="fees" label="手续费用"></el-table-column>
					<el-table-column prop="start_money" label="变动前余额"></el-table-column>
					<el-table-column prop="end_money" label="变动后余额"></el-table-column>
					<el-table-column prop="action_time" label="订单时间" width="150"></el-table-column>
					<el-table-column prop="pay_status" label="订单状态">
						<template slot-scope="scope">
							<span :class="'status_'+scope.row.pay_status">
								{{ payType[scope.row.pay_status] }}
							</span>
						</template>
					</el-table-column>
					<el-table-column prop="operate_name" label="操作账号" v-if="!isSingleUser"></el-table-column>
					<el-table-column prop="remark" label="订单备注" v-if="!isSingleUser"></el-table-column>
					<el-table-column label="操作" v-if="!isSingleUser">
						<template slot-scope="scope">
							<el-button type="text" @click="viewDetails(scope.row)">详情查看</el-button>
						</template>
					</el-table-column>
				</el-table>
				<fe-pagination ref="pagination" url="finance.accountbank" :data="queryParams" @paging="pagingCallback"></fe-pagination>
			<!-- </section> -->
		</section>

		<!-- 会员订单详情面板 -->
		<el-dialog :title="orderDialogTitle" :visible.sync="orderDialogVisible" width="670px" @closed="currentDetails={}">
			<OrderDetails :details="currentDetails"></OrderDetails>
		</el-dialog>
		
		<!-- 会员详情面板 -->
		<el-dialog :title="memberDialogTitle" :visible.sync="memberDialogVisible" width="670px">
			<MemberInfoDetail :form-data="memberUsername" :readonly="true"></MemberInfoDetail>
		</el-dialog>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { BANK_ACTION_LIST } from '@/config/global'

	import OrderDetails from '@/views/finance/OrderDetails'
	import MemberInfoDetail from '@/views/member/MemberInfoDetail'

	export default {
		props: {
			username: {
				type: [String, Number],
			},
			/**可选的交易类型 */
			viewTypes: {
				type: [Array, String, Number],
				default(){
					return BANK_ACTION_LIST.map(v=>v.id);
				},
			},
			/**默认选中的交易类型 */
			defaultChecked: {
				type: [Array, String, Number],
				default(){
					return this.viewTypes;
				},
			}
		},
		data() {
			return {
				/**交易类型选项 */
				BANK_ACTION_LIST,
				query: {
					/**交易类型 */
					action_type: [],
					/**开始时间 */
					start_date: '',
					/**结束时间 */
					end_date: '',
					/**交易状态 */
					pay_status: '',
					field: '',
					text: '',
				},
				/**实际查询需要的参数 */
				queryParams: {
					username: this.username,	// username给默认值，props.username
				},
				orderDialogVisible: false,
				memberDialogVisible: false,
				currentDetails: {},
				memberUsername: '',

				list: [],
			};
		},
		methods: {
			viewDetails(data){
				this.currentDetails = data;
				this.orderDialogVisible = true;
			},
			viewMember({ username }){
				this.memberUsername = username;
				this.memberDialogVisible = true;
			},
			pagingCallback(list){
				this.list = list;
			},

			queryHandler(){
				const { action_type, start_date, end_date, pay_status, field, text } = this.query;

				if(action_type.length == 0){
					this.$notify.info({
						message: '必须至少选中一个交易类型',
						title: '提示',
					});
					return;
				}
				
				this.queryParams = {
					action_type,
					start_date,
					end_date,
					pay_status,
					[field]: text,
				};

				// 单用户查询，固定username参数
				if(this.isSingleUser){
					this.queryParams.username = this.username;
				}

				this.$nextTick(this.refreshHandler);
			},
			/**执行刷新 */
			refreshHandler(){
				this.$refs.pagination.refresh();
			},
		},
		computed: {
			orderDialogTitle(){
				return `【${this.currentDetails.username}】会员订单详情`;
			},
			memberDialogTitle(){
				return `【${this.currentDetails.username}】会员信息`;
			},
			/**是否为单账户查询，打开面板时 */
			isSingleUser(){
				return !!this.username;
			},
			/**交易类型选项 */
			actionTypeOptions(){
				const types = this.viewTypesArray;
				return this.BANK_ACTION_LIST.filter(v=>_.includes(types, v.id));
			},
			/**计算后的显示交易类型选项 */
			viewTypesArray(){
				return _.isArray(this.viewTypes) ? this.viewTypes : [this.viewTypes];
			},
			/**计算后的选中交易类型选项 */
			defaultCheckedArray(){
				return _.isArray(this.defaultChecked) ? this.defaultChecked : [this.defaultChecked];
			},

			...mapGetters({
				/**借贷类型映射 */
				actionType: 'global/BANK_ACTION_TYPE_MAP',
				actionTypeList: 'global/BANK_ACTION_TYPE',
				/**支付状态 */
				payType: 'global/PAY_STATUS_MAP',
				payTypeList: 'global/PAY_STATUS',
			}),
		},
		components: {
			MemberInfoDetail,
			OrderDetails,
		},
		created(){
			// 如果是查询单账户，就显示切换到“系统单号”
			if(this.isSingleUser){
				this.query.field = 'charge_order_num';
			}

			// 设置默认-交易类型选中项
			this.queryParams.action_type = this.query.action_type = this.defaultCheckedArray;
		},
	}

</script>

<style lang="scss">
	@import '@/styles/sass/variable.scss';

	.finance-fund-wrapper{
		display: flex;
		align-items: stretch;
		
		.main-pane{
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-top: 5px;
			overflow: auto;

			.operate-group{
				padding: 0 0 10px 10px;
				display: flex;

				.type-group{
					// flex: 1;
					line-height: 30px;
					border: 1px solid #ddd;
    				border-radius: 4px;
					padding: 0 7px;
					margin-right: 5px;
				}

				.el-checkbox{
					margin-right: 10px;

					// .el-checkbox__inner{
					// 	width: 18px;
					// 	height: 18px;
					// }

					.el-checkbox__label{
						padding-left: 5px;
					}
				}

				.el-select{
					width: 100px;
				}
				.select-status{
					margin-left: 5px;
				}
				.input-with-query-field{
					width: 290px;
				}

				.btn-refresh{
					position: absolute;
					right: 5px;
				}
			}

			.table-group{
				.el-icon-search{
					font-weight: bold;
				}

				// 等待支付
				.status_0{
					color: $warnColor;
					font-weight: bold;
				}
				// 支付成功
				.status_1{
					color: $successColor;
					font-weight: bold;
				}
				// 待确认
				.status_2{
					color: $dangerColor;
					font-weight: bold;
				}
			}
		}
	}
</style>
