<template>
	<section class="member-report-table-wrapper">
		<div class="operate-group" v-if="isNewly || isOnline">
			<el-select v-model="quickRange" placeholder="请选择" class="square-right">
				<el-option v-for="item of dateRangeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<el-date-picker v-model="query.start_date" placeholder="开始时间" value-format="yyyy-MM-dd" class="square"></el-date-picker>
			<el-date-picker v-model="query.end_date" placeholder="结束时间" value-format="yyyy-MM-dd" class="square"></el-date-picker>
			<!-- 查询按钮 -->
			<el-button @click="queryHandler" icon="el-icon-search" class="square-left"></el-button>

			<!-- 右侧刷新按钮 -->
			<el-button type="primary" icon="el-icon-refresh" @click="refreshTable" class="right-button"></el-button>
		</div>

		<div class="operate-group" v-if="isActivity">
			<el-select v-model="query.lastLogin" placeholder="未登录天数" class="select-days">
				<el-option label="==未登录天数==" value></el-option>
				<el-option v-for="item in daysOptions" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="query.lastBet" placeholder="未押注天数" class="select-days">
				<el-option label="==未押注天数==" value></el-option>
				<el-option v-for="item in daysOptions" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="query.whether_recharge" placeholder="已充值" class="slectWidth">
				<el-option label="全部会员" value=""></el-option>
				<el-option label="已充值" value="1"></el-option>
				<el-option label="未充值" value="0"></el-option>
			</el-select>
			<!-- 会员钱包 -->
			<el-select v-model="query.financeField">
				<el-option label="会员输赢" value=""></el-option>
				<el-option label="钱包余额" value=""></el-option>
				<el-option label="会员存款" value=""></el-option>
				<el-option label="会员取款" value=""></el-option>
			</el-select>
			<el-input type="number"></el-input>
			<el-button>至</el-button>
			<el-input type="number"></el-input>
			<el-input placeholder="请输入搜索条件" v-model="inputValue">
				<!-- 会员钱包结束 -->
				<el-select slot="prepend" v-model="loginTime" placeholder="查询账号">
					<el-option v-for="item in daysOptions" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-button type="primary" slot="append" @click="queryHandler" icon="el-icon-search"
					class="search-icon"></el-button>
			</el-input>
			<span class="refresh-icon" @click="refreshTable">
				<i class="el-icon-refresh"></i>
			</span>
			<div class="clearfix"></div>
		</div>
		
		<el-table :data="list" height="0" border class="mt-5" @sort-change="sortHandler">
			<el-table-column prop="no" width="40"></el-table-column>
			<!-- 会员新增统计 -->
			<template v-if="isNewly">
				<el-table-column prop="date" label="统计时间" sortable="custom" width="130"></el-table-column>
				<el-table-column prop="reg_nums" label="注册人数"></el-table-column>
				<el-table-column prop="in_money_accounts" label="新增存款人数" width="150"></el-table-column>
				<el-table-column prop="in_money_nums" label="新增存款笔数" width="150"></el-table-column>
				<el-table-column prop="in_amounts" label="新增存款总额" width="150"></el-table-column>
				<el-table-column label="今日首存人数" width="120">
					<template slot-scope="scope">
						<el-link class="iconfont icon-fangdajing mr-5" @click="Memberdetaile(scope.row)"></el-link>
						<span class="account_text">{{ scope.row.in_money_first_accounts }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="in_money_accounts_total" label="总存款人数" width="150"></el-table-column>
				<el-table-column prop="in_money_nums_total" label="总存款笔数" width="150"></el-table-column>
				<el-table-column prop="in_amounts_total" label="总存款金额" width="150"></el-table-column>
				<el-table-column prop="out_amounts_total" label="总提款金额" width="150"></el-table-column>
				<el-table-column prop="winlose_amounts_total" label="总输赢金额" width="150"></el-table-column>
				<el-table-column prop="return_amounts_total" label="总返水金额" width="150"></el-table-column>
				<el-table-column prop="betting_accounts_total" label="总投注人数" width="150"></el-table-column>
				<el-table-column prop="betting_amounts_total" label="总投注金额" width="150"></el-table-column>
				<el-table-column prop="agent_nums" label="代理分润人" width="150"></el-table-column>
				<el-table-column prop="agent_amounts" label="代理分润金额" width="150"></el-table-column>
				<el-table-column prop="account_nums" label="会员分润人" width="150"></el-table-column>
				<el-table-column prop="account_amounts" label="会员分润金额" width="150"></el-table-column>
			</template>

			<!-- 会员在线统计 -->
			<template v-if="isOnline">
				<el-table-column prop="date" label="时间" sortable="custom" width="150"></el-table-column>
				<el-table-column prop="hour_0" label="0:00" width="150"></el-table-column>
				<el-table-column prop="hour_1" label="1:00" width="150"></el-table-column>
				<el-table-column prop="hour_2" label="2:00" width="150"></el-table-column>
				<el-table-column prop="hour_3" label="3:00" width="150"></el-table-column>
				<el-table-column prop="hour_4" label="4:00" width="150"></el-table-column>
				<el-table-column prop="hour_5" label="5:00" width="150"></el-table-column>
				<el-table-column prop="hour_6" label="6:00" width="150"></el-table-column>
				<el-table-column prop="hour_7" label="7:00" width="150"></el-table-column>
				<el-table-column prop="hour_8" label="8:00" width="150"></el-table-column>
				<el-table-column prop="hour_9" label="9:00" width="150"></el-table-column>
				<el-table-column prop="hour_10" label="10:00" width="150"></el-table-column>
				<el-table-column prop="hour_11" label="11:00" width="150"></el-table-column>
				<el-table-column prop="hour_12" label="12:00" width="150"></el-table-column>
				<el-table-column prop="hour_13" label="13:00" width="150"></el-table-column>
				<el-table-column prop="hour_14" label="14:00" width="150"></el-table-column>
				<el-table-column prop="hour_15" label="15:00" width="150"></el-table-column>
				<el-table-column prop="hour_16" label="16:00" width="150"></el-table-column>
				<el-table-column prop="hour_17" label="17:00" width="150"></el-table-column>
				<el-table-column prop="hour_18" label="18:00" width="150"></el-table-column>
				<el-table-column prop="hour_19" label="19:00" width="150"></el-table-column>
				<el-table-column prop="hour_20" label="20:00" width="150"></el-table-column>
				<el-table-column prop="hour_21" label="21:00" width="150"></el-table-column>
				<el-table-column prop="hour_22" label="22:00" width="150"></el-table-column>
				<el-table-column prop="hour_23" label="23:00" width="150"></el-table-column>
			</template>

			<!-- 会员活跃度统计 -->
			<template v-if="isActivity">
				<el-table-column prop="date_joined" label="注册时间" :show-overflow-tooltip="true">
				</el-table-column>
				<el-table-column prop="username" label="查询账号"></el-table-column>
				<el-table-column prop="realname" label="会员姓名"></el-table-column>
				<el-table-column prop="agent_name" label="所属代理账号"></el-table-column>
				<el-table-column prop="agent_nickname" label="所属代理姓名"></el-table-column>
				<el-table-column prop="accounttreasure.bag_money" label="钱包余额"></el-table-column>
				<el-table-column prop="financial_win_or_lose" label="财务输赢"></el-table-column>
				<el-table-column prop="accounttreasure.pay_money" label="会员存款"></el-table-column>
				<el-table-column prop="accounttreasure.withdraw_money" label="会员取款"></el-table-column>
				<el-table-column label="未登录天数" :show-overflow-tooltip="true">
					<template slot-scope="scope">
						<div>{{nologinData(scope.row.last_login,'last_login')}}</div>
					</template>
				</el-table-column>
				<el-table-column label="未投注天数" :show-overflow-tooltip="true">
					<template slot-scope="scope">
						<div>{{nologinData(scope.row.last_play_time,'last_play_time')}}</div>
					</template>
				</el-table-column>
				<el-table-column prop="last_login" label="最后登录时间" :show-overflow-tooltip="true">
				</el-table-column>
				<el-table-column prop="last_play_time" label="最后投注时间" :show-overflow-tooltip="true">
				</el-table-column>
			</template>
		</el-table>
		<fe-pagination ref="pagination" :data="queryParams" :url="apiKey" @paging="pagingCallback"></fe-pagination>

		<!-- 会员存款明细 -->
		<el-dialog :title="'【'+dateTime+'】分组删除代理'" :visible.sync="memberdetails" v-dialogDrag>
			<Fund></Fund>
		</el-dialog>
	</section>
</template>

<script>
	import Fund from '@/views/finance/Fund'
	import moment from 'moment'

	/**未登录天数 和 未押注天数 选项 */
	const daysOptions =  [1, 2, 3, 4, 5, 6, 7, 10, 15, 30, 60, 90].map((v)=>({
		value: v,
		label: `超过${ v }天`,
	}));

	/**日期快选 选项 */
	const dateRangeOptions = [3, 4, 5, 6, 7, 10, 15, 30, 60, 90].map(v=>({
		label: `最近${ v }天`,
		value: v,
	}));

	export default {
		name: 'member-report-table',
		props: {
			props: {
				type: Object,
				required: true
			},
			/**视图展示 */
			viewType: {
				type: String,
				required: true,
			},
		},
		data(){
			return {
				query: {
					start_date: '',
					end_date: '',
				},
				queryParams: {

				},
				/**快选区间 */
				quickRange: 3,
				dateRangeOptions,

				select: '餐厅名',
				memberdetails: false,
				dateTime: '',
				daysOptions,
				list: [],
				loginTime: '',
				memberName: '',
				inputValue: '',
				searchParams: {}
			}
		},
		computed: {
			protyInt() {
				return this.props.type
			},
			getURL() {
				return this.props.url
			},
			getParams() {
				return this.props.params
			},
			nologinData() {
				return function (Datemumber, type) {
					console.log(Datemumber)
					if (!Datemumber) {
						if (type == 'last_login') {
							return '尚未登陆'
						} else {
							return '尚未投注'
						}
					} else {
						return parseInt(Math.abs(new Date() - new Date(Datemumber)) / 1000 / 60 / 60 / 24)
					}
				}
			},
			startTimeCompute() {
				return /^NewMemberStatistics|OnlineMemberStatistics$/.test(this.protyInt)
			},
			/**会员新增统计 */
			isNewly() {
				return this.viewType == 'newly';
			},
			/**会员在线统计 */
			isOnline(){
				return this.viewType == 'online';
			},
			/**会员活跃统计 */
			isActivity(){
				return this.viewType == 'activity';
			},

			/**分页条api接口 */
			apiKey(){
				return {
					newly: 'member.accountnewstatistics',
					online: 'member.playeronlinestatistics',
					activity: 'member.memberInfo',
				}[this.viewType];
			}
		},
		components: {
			Fund
		},
		methods: {
			pagingCallback(results, response) {
				this.list = results;
			},
			/**保持现有查询条件，重新请求列表数据 */
			refreshTable(){
				this.$refs.pagination.refresh();
			},
			/**查询 */
			queryHandler(){
				this.queryParams = this.query;

				this.$nextTick(this.refreshTable);
			},
			Memberdetaile(time) {
				this.dateTime = time
				this.memberdetails = true
			},
			/**快选日期变更后 */
			quickRangeChanged(range){
				const now = moment();
				const format = 'YYYY-MM-DD';

				return {
					end_date: now.format(format),
					start_date: now.subtract(range, 'days').format(format),
				};
			},
			/**排序处理函数 */
			sortHandler({ column, prop, order }){
				this.$logger.log(column, prop, order);

				let ordering = '';
				if(prop){
					ordering = `${ order=='ascending' ? '' : '-' }${ prop }`;
				}

				this.query.ordering = sort;

				// 执行查询
				this.queryHandler();
			},
		},
		watch: {
			quickRange(range){
				this.query = this.quickRangeChanged(range);
			},
		},
		created(){
			// 新增玩家和在线玩家，默认查询近三天的数据
			if(this.isNewly || this.isOnline){
				this.quickRange = 3;
				this.queryParams = this.query = this.quickRangeChanged(this.quickRange);
			}
		},
	}

</script>

<style lang="scss">
	.member-report-table-wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
		// overflow: auto;
		
		.operate-group{
			display: flex;
			position: relative;

			.select-days{
				width: 280px;
			}

			.right-button{
				position: absolute;
				right: 0;
			}
		}
	}
</style>
