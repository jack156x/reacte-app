/*财务管理-额度转换管理
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-22 21:49:21 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 15:21:41
 */
<template>
	<section class="finance-transform-wrapper">
		<section class="main-pane">
			<section class="operate-group mb-5">
				<el-select v-model="query.status" class="select-status">
					<el-option label="全部" value=""></el-option>
					<el-option label="成功" value="1"></el-option>
					<el-option label="初始化" value="2"></el-option>
					<el-option label="失败" value="3"></el-option>
				</el-select>
				
				<el-select v-model="query.timeType" class="square-right">
					<el-option label="转换时间" value="transform"></el-option>
				</el-select>
				<el-date-picker v-model="query.start_time" type="datetime" placeholder="选择日期时间" class="square-left square-right" value-format="yyyy-MM-dd hh:mm:ss"></el-date-picker>
				<el-date-picker v-model="query.end_time" type="datetime" placeholder="选择日期时间" class="square-left" value-format="yyyy-MM-dd hh:mm:ss"></el-date-picker>

				<el-input placeholder="请输入内容" v-model="query.text" class="input-with-query-field">
					<el-select v-model="query.field" slot="prepend" placeholder="请选择">
						<el-option label="查询账号" value="username" v-if="!isSingleAccount"></el-option>
						<el-option label="真人账号" value="apiuser" v-if="!isSingleAccount"></el-option>
						<el-option label="转换单号" value="order_num"></el-option>
						<el-option label="登录账号" value="loginname" v-if="!isSingleAccount"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search" @click="queryHandler"></el-button>
				</el-input>

				<!-- 右侧按钮 -->
				<el-button type="primary" icon="el-icon-refresh" class="float-right" @click="refreshList"></el-button>
			</section>

			<!-- <section class="table-group"> -->
				<el-table :data="viewList" style="width: 100%" border class="table-group" height="0">
					<el-table-column prop="no" width="40"></el-table-column>
					<el-table-column label="查询账号" width="180">
						<template slot-scope="scope">
							<el-link class="iconfont icon-fangdajing" type="primary" @click="viewMember(scope.row)" v-if="!isSingleAccount"></el-link>
							{{ scope.row.username }}
						</template>
					</el-table-column>
					<el-table-column prop="apiuser" label="真人账号" width="180"></el-table-column>
					<el-table-column prop="order_num" label="转换单号" width="180"></el-table-column>
					<el-table-column prop="out_account" label="转出账号" v-if="!isSingleAccount"></el-table-column>
					<el-table-column prop="in_account" label="转入账号" v-if="!isSingleAccount"></el-table-column>
					<el-table-column prop="id" label="转换详情" v-if="isSingleAccount"></el-table-column>
					<el-table-column prop="money" label="转换金额"></el-table-column>
					<el-table-column prop="start_out_money" label="转出前余额" v-if="!isSingleAccount"></el-table-column>
					<el-table-column prop="endt_out_money" label="转出后余额" v-if="!isSingleAccount"></el-table-column>
					<el-table-column prop="start_in_money" label="转入前余额" v-if="!isSingleAccount"></el-table-column>
					<el-table-column prop="end_in_money" label="转入后余额" v-if="!isSingleAccount"></el-table-column>
					<el-table-column prop="status" label="转换状态"></el-table-column>
					<el-table-column prop="create_time" label="转换时间" width="180"></el-table-column>
					<el-table-column label="操作" v-if="!isSingleAccount">
						<template slot-scope="scope">
							<el-button type="text" @click="viewDetails(scope.row)">详情查看</el-button>
						</template>
					</el-table-column>
				</el-table>
				<fe-pagination ref="pagination" url="finance.apitransmoney" :data="queryParams" @paging="pagingCallback"></fe-pagination>
			<!-- </section> -->

			<!-- <section class="footer" v-if="!isSingleAccount">
				返水概况：总投注笔数:[423]，总投注金额:[1959.00]，有效投注金额:[1959.00]，网站盈利：[342.42]，返水总额：[20.760]
			</section> -->
		</section>

		<!-- 转换详情面板 -->
		<el-dialog :title="transformDialogTitle" :visible.sync="transformDialogVisible" width="670px" @closed="currentDetails={}">
			<TransformDetails :details="currentDetails"></TransformDetails>
		</el-dialog>
		
		<!-- 会员详情面板 -->
		<el-dialog :title="memberDialogTtitle" :visible.sync="memberDialogVisible" width="670px">
			<MemberInfoDetail :form-data="memberUsername" :readonly="true"></MemberInfoDetail>
		</el-dialog>
	</section>
</template>

<script>
	/**转换详情组件 */
	import TransformDetails from '@/views/finance/TransformDetails'
	/**会员信息组件 */
	import MemberInfoDetail from '@/views/member/MemberInfoDetail'

	export default {
		props: {
			username: {
				type: String,
			}
		},
		data() {
			return {
				query: {
					status: '',
					timeType: 'transform',
					start_time: '',
					end_time: '',
					field: 'username',
					text: '',
				},
				queryParams: {},
				transformDialogVisible: false,
				memberDialogVisible: false,
				currentDetails: {},
				memberUsername: '',

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
				this.memberUsername = data.username;
				this.memberDialogVisible = true;
			},
			pagingCallback(list){
				this.list = list;
			},
			queryHandler(){
				const { status, start_time, end_time, field, text } = this.query;

				this.queryParams = {
					status,
					start_time,
					end_time,
					[field]: text,
				};

				// 如果是查询单账户，固定传递用户名
				if(this.isSingleAccount){
					this.queryParams.username = this.username;
				}

				this.$nextTick(this.refreshList);
			},
			refreshList(){
				this.$refs.pagination.refresh();
			},
		},
		computed: {
			transformDialogTitle(){
				return `【${this.currentDetails.username}】会员额度转换详情`;
			},
			memberDialogTtitle(){
				return `【${this.currentDetails.username}】会员信息详情`;
			},
			isSingleAccount(){
				return !!this.username;
			},
			viewList(){
				return this.list.map(v=>({...v, ...{ detail: `由【${v.out_account}】转出至【${v.in_account}】` }}));
			},
		},
		components: {
			TransformDetails,
			MemberInfoDetail,
		},
		created(){
			if(this.isSingleAccount){
				this.query.field = 'order_num';
				this.queryParams.username = this.username;
			}
		},
	}

</script>

<style lang="scss">
	.finance-transform-wrapper{
		display: flex;
		align-items: stretch;
		
		.main-pane{
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			overflow: auto;

			.operate-group{
				// padding: 0 0 10px 10px;

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
