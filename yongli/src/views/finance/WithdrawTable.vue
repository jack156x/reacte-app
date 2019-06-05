/*财务管理-提款申请管理
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 13:11:19 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-01 19:36:07
 */
<template>
	<section class="finance-withdraw-table-wrapper">
		<section class="main-pane">
			<section class="operate-group">
				<!-- 未审核 -->
				<template v-if="isUnaudited">
					<el-select v-model="query.status" slot="prepend" placeholder="请选择" v-if="isUnaudited" class="square-right">
						<el-option label="==订单状态==" value=""></el-option>
						<el-option v-for="item of statusMapList" :label="item.name" :value="item.id" :key="item.id"></el-option>
					</el-select>

					<el-input v-model="query.zfb_money" type="number" step="1000" class="input-with-query-field square-left square-right">
						<template slot="prepend">审批：金额下限：</template>
					</el-input>
					<el-input v-model="query.zfb_money_max" type="number" step="1000" class="input-with-query-field square-left">
						<template slot="prepend">金额上限：</template>
					</el-input>
				</template>

				<!-- 已审核 或者 自动出款 -->
				<template v-if="isAudit || isAuto">
					<el-select v-model="query.status" slot="prepend" placeholder="请选择" class="square-right">
						<el-option label="==取款状态==" value=""></el-option>
						<el-option label="失败" value="1"></el-option>
						<el-option label="成功" value="2"></el-option>
						<el-option label="待确认" value="3"></el-option>
						<el-option label="待自动出款" value="4"></el-option>
						<el-option label="自动出款中" value="5"></el-option>
						<el-option label="自动出款失败" value="6"></el-option>
					</el-select>
					
					<el-select v-model="query.dateType" slot="prepend" placeholder="请选择" class="square-left square-right">
						<el-option label="取款时间" value="withdraw"></el-option>
						<el-option label="审核时间" value="audit"></el-option>
					</el-select>
					
					<el-date-picker v-model="query.startTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd hh:mm:ss" class="square-left square-right"></el-date-picker>
					<el-date-picker v-model="query.endTime" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd hh:mm:ss" class="square-left"></el-date-picker>
				</template>
			
				<el-input placeholder="请输入内容" v-model="query.text" class="input-with-query-field ml-5" @keydown.enter.native="queryHandler">
					<el-select v-model="query.field" slot="prepend" placeholder="请选择">
						<el-option label="会员账号" value="username"></el-option>
						<el-option label="会员姓名" value="realname"></el-option>
						<el-option label="取款单号" value="order_num"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search" @click="queryHandler"></el-button>
				</el-input>
				
				<!-- 右侧按钮 -->
				<el-button type="primary" icon="el-icon-refresh" class="btn-refresh" @click="refreshHandler"></el-button>
			</section>
			
			<section>
				<h5 class="mt-5 mb-5" v-if="isUnaudited">
					未审核条数：【0】
					本页金额：￥【0】
					总计金额：￥【0.00】
				</h5>
			</section>

			<!-- <section class="table-group"> -->
				<el-table :data="list" style="width: 100%" border height="0">
					<el-table-column prop="no" width="40"></el-table-column>
					<!-- 通用 -->
					<el-table-column label="查询账号" width="180" :show-overflow-tooltip="true">
						<template slot-scope="scope">
							<el-link type="primary" class="iconfont icon-fangdajing" @click="viewMember(scope.row)"></el-link>
							{{ scope.row.username }}
						</template>
					</el-table-column>
					<el-table-column prop="realname" label="会员姓名" width="180"></el-table-column>

					<!-- 已审核 或者 自动出款 -->
					<el-table-column prop="order_num" label="取款单号" width="180" v-if="isAudit || isAuto"></el-table-column>

					<!-- 未审核 -->
					<template v-if="isUnaudited">
						<el-table-column prop="id" label="会员级别"></el-table-column>
						<el-table-column prop="id" label="会员组别"></el-table-column>
					</template>
					
					<!-- 通用 -->
					<el-table-column prop="zfb_money" label="取款金额" width="90"></el-table-column>
					<el-table-column prop="fees" label="取款手续费" width="90"></el-table-column>
					<el-table-column prop="create_time" label="取款时间" width="145px"></el-table-column>

					<!-- 已审核 -->
					<template v-if="isAudit">
						<el-table-column prop="checktime" label="审核时间"></el-table-column>
						<el-table-column prop="id" label="操作时长"></el-table-column>
					</template>

					<!-- 通用 -->
					<el-table-column prop="status" label="取款状态">
						<template slot-scope="scope">
							<span :class="'text-' + scope.row.status">
								{{ statusMap[scope.row.status] }}
							</span>
						</template>
					</el-table-column>

					<!-- 已审核 或者 自动出款 -->
					<el-table-column prop="checkuser_name" label="操作账号" v-if="isAudit || isAuto"></el-table-column>

					<!-- 通用 -->
					<el-table-column prop="remark" label="备注" width="140"></el-table-column>

					<!-- 已审核 -->
					<el-table-column prop="remark_user" label="审核备注（会员）" width="140" v-if="isAudit"></el-table-column>
					
					<!-- 未审核 或者 审核 -->
					<el-table-column label="操作" width="380px" v-if="isUnaudited || isAudit">
						<template slot-scope="scope">
							<el-button type="text" v-if="isUnaudited" @click="viewAudit(scope.row)">取款审核</el-button>
							<el-button type="text" v-if="isUnaudited" @click="openSafeWarn(scope.row)">安全预警</el-button>
							<el-button type="text" @click="viewDetails(scope.row)">订单详情</el-button>
							<el-button type="text" @click="openLog(scope.row)">登录日志</el-button>
							<el-button type="text" @click="openFinanceReport(scope.row)">财务审核</el-button>
							<el-button type="text" @click="openBetReport(scope.row)">注单核查</el-button>
						</template>
					</el-table-column>
				</el-table>
				<fe-pagination ref="pagination" url="finance.withdraws" :data="queryParams" @paging="pagingCallback"></fe-pagination>
			<!-- </section> -->
		</section>

		
		<!-- 会员取款审核面板 -->
		<el-dialog :title="auditDialogTitle" :visible.sync="auditDialogVisible" width="700px" @closed="currentDetails={}">
			<WithdrawAudit :details="currentDetails"></WithdrawAudit>
		</el-dialog>
		<!-- 会员订单详情面板 -->
		<el-dialog :title="detailsDialogTitle" :visible.sync="detailsDialogVisible" width="700px" @closed="currentDetails={}">
			<OrderDetails :details="currentDetails"></OrderDetails>
		</el-dialog>
		<!-- 会员详情面板 -->
		<el-dialog :title="memberDialogTitle" :visible.sync="memberDialogVisible" width="670px">
			<MemberInfoDetail :form-data="memberUsername" :readonly="true"></MemberInfoDetail>
		</el-dialog>
		
	</section>
</template>

<script>
	import Pagination from '@/components/Pagination'
	import WithdrawAudit from '@/views/finance/WithdrawAudit'
	import OrderDetails from '@/views/finance/OrderDetails'
	import MemberInfoDetail from '@/views/member/MemberInfoDetail'

	import { mapMutations, mapGetters } from 'vuex'
	import { ADD_TAB_ACTIVE } from '@/config/mutation-types.js'

	export default {
		props: {
			props: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				query: {
					status: '',
					zfb_money: '',
					zfb_money_max: '',
					field: 'username',
					text: '',

					dateType: 'withdraw',
					startTime: '',
					endTime: '',
				},
				queryParams: {
					
				},

				memberUsername: '',
				currentDetails: {},
				auditDialogVisible: false,
				detailsDialogVisible: false,
				memberDialogVisible: false,
				memberKey: '',

				list: [],
				
				/**状态列的样式 */
				statusStyle: {
					0: 'warning',
				},
			};
		},
		methods: {
			/**弹出审核面板 */
			viewAudit(data){
				this.auditDialogVisible = true;
				this.currentDetails = data;
			},
			/**弹出详情面板 */
			viewDetails(data){
				this.detailsDialogVisible = true;
				this.currentDetails = data;
			},
			/**弹出会员详情面板 */
			viewMember(data){
				this.memberUsername = data.username;
				this.currentDetails = data;
				this.memberDialogVisible = true;
			},
			/**打开新标签-安全预警 */
			openSafeWarn({ username }){
				const component = `WithdrawSafeWarn`;
				const flag = `${component}_${username}`;

				// 打开新标签，并切换激活展示
				this[ADD_TAB_ACTIVE]({
					title: `${username} 安全预警`,
					path: component,
					flag,
					props: {
						username: username
					},
				});
			},
			/**打开新标签-会员登录日志 */
			openLog({ username }){
				const component = `LogLogin`;
				const flag = `${component}_${username}`;

				// 打开新标签，并切换激活展示
				this[ADD_TAB_ACTIVE]({
					title: `【${username}】会员操作日志`,
					path: component,
					flag,
					props: {
						viewType: "Detail",
						details: {
							username,
						}
					}
				});
			},
			/**打开新标签-会员财务报表 */
			openFinanceReport({ username }){
				const component = `StateMember`;
				const flag = `${component}_finance_${username}`;

				// 打开新标签，并切换激活展示
				this[ADD_TAB_ACTIVE]({
					title: `【${username}】会员财务报表`,
					path: component,
					flag,
					props: {
						type: 'MemberState',
					}
				});
			},
			/**新标签打开-会员投注报表 */
			openBetReport({ username }){
				const component = `StateMember`;
				const flag = `${component}_bet_${username}`;

				// 打开新标签，并切换激活展示
				this[ADD_TAB_ACTIVE]({
					title: `【${username}】会员投注报表`,
					path: component,
					flag,
					props: {
						type: 'MembershipReport',
						username,
					}
				});
			},
			pagingCallback(list){
				this.list = list;
			},
			setQueryStatus(){
				// let status = '';
				// if(this.isUnaudited){
				// 	status = 0;
				// }else if(this.isAudit){
				// 	status = 1;
				// }else if(this.isAuto){
				// 	status = 2;
				// }
			},
			queryHandler(){
				const { zfb_money, zfb_money_max, status, field, text, startTime, endTime, dateType } = this.query;

				this.queryParams = {
					zfb_money,
					zfb_money_max,
					status,
					[field]: text,
				};
				
				if(dateType == 'withdraw'){
					this.queryParams.start_date = startTime;
					this.queryParams.end_date = endTime;
				}else if(dateType == 'audit'){
					this.queryParams.check_time_start = startTime;
					this.queryParams.check_time_end = endTime;
				}

				this.$nextTick(this.refreshHandler)
			},
			refreshHandler(){
				this.$refs.pagination.refresh();
			},

			...mapMutations([
				ADD_TAB_ACTIVE,
			]),
		},
		computed: {
			/**未审核页签 */
			isUnaudited(){
				return this.props.type == 'unaudited';
			},
			/**已审核页签 */
			isAudit(){
				return this.props.type == 'audited';
			},
			/**自动出款 */
			isAuto(){
				return this.props.type == 'auto';
			},
			auditDialogTitle(){
				return `【${this.currentDetails.username}】会员取款审核`;
			},
			detailsDialogTitle(){
				return `【${this.currentDetails.username}】会员订单详情`;
			},
			memberDialogTitle(){
				return `【${this.currentDetails.username}】会员详情`;
			},
			
			...mapGetters({
				statusMapList: 'global/WITHDRAW_STATUS',
				statusMap: 'global/WITHDRAW_STATUS_MAP',
			}),
		},
		watch: {
		},
		components: {
			Pagination,
			WithdrawAudit,
			OrderDetails,
			MemberInfoDetail,
		},
	}

</script>

<style lang="scss">
	@import '@/styles/sass/variable.scss';

	.finance-withdraw-table-wrapper{
		display: flex;
		flex: 1;
		// overflow: auto;
		align-items: stretch;

		.ml-5{
			margin-left: 5px;
		}
		.text-0 {
			color: $warnColor;
			font-weight: bold;
		}
		.text-1 {
			color: $successColor;
			font-weight: bold;
		}
		
		.main-pane{
			flex: 1;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			// overflow: auto;

			.operate-group{
				margin-bottom: 5px;
				display: flex;
				
				.el-select{
					width: 100px;
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
				flex: 1;
				flex-direction: column;
				display: flex;
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
