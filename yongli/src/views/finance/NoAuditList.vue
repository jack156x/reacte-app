<template>
	<div class="NoAuditContent">
		<section style="display: flex;">
			<template v-if="viewType === 'NoAuditType'">
				<el-select class="w100 square-right" v-model="account" clearable placeholder="查询账号">
					<el-option label="查询账号" value="username"></el-option>
					<el-option label="会员姓名" value="realname"></el-option>
					<el-option label="存款单号" value="order_num"></el-option>
					<el-option label="登录账号" value="username"></el-option>
				</el-select>
				<el-input class="inputValueWidth square-left" placeholder="请输入搜索条件" v-model="conditions" clearable>
				</el-input>
				<el-select class="w100 ml-5" v-model="group" clearable placeholder="==全部分组==">
					<el-option v-for="item in groups" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
				<el-select class="w100 ml-5 square-right" v-model="pay_type" clearable placeholder="全部类型">
					<el-option v-for="item in offpayTypeList" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
				<el-button slot="append" icon="el-icon-search" @click="logPageSearch" class="search-icon square-left"></el-button>

				<el-radio-group v-model="datetimeRange" class="ml-5" @change="datetimeRangeClick">
					<el-radio-button class="radioStyle" label="2">近2天</el-radio-button>
					<el-radio-button class="radioStyle" label="7">近7天</el-radio-button>
					<el-radio-button class="radioStyle" label="30">近1个月</el-radio-button>
					<el-radio-button class="radioStyle" label="90">近3个月</el-radio-button>
					<el-radio-button class="radioStyle" label="365">近1年</el-radio-button>
				</el-radio-group>
			</template>

			<template v-else>
				<el-select class="w100" v-model="offpay_status" clearable placeholder="订单状态">
					<el-option v-for="item in offpayStatusList" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
				<el-select class="ml-5 w100 square-right" v-model="time" clearable placeholder="存款时间">
					<el-option v-for="item in TimeType" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-date-picker v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
					range-separator="至" start-placeholder="时间起始" end-placeholder="时间结束"
					align="right" class="date square-left"></el-date-picker>
				<el-input class="inputValueWidth ml-5" placeholder="请输入收款方账号" v-model="payee_account" clearable>
				</el-input>
				<el-input class="inputValueWidth ml-5" placeholder="请输入收款方姓名" v-model="payee_name" clearable>
				</el-input>

				<el-input placeholder="请输入搜索条件" v-model="conditions" class="input-with-select w380 ml-5">
					<el-select class="w100" v-model="account" slot="prepend" placeholder="查询账号">
						<el-option label="查询账号" value="username"></el-option>
						<el-option label="会员姓名" value="realname"></el-option>
						<el-option label="存款单号" value="order_num"></el-option>
						<el-option label="登录账号" value="username"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search" @click="logPageSearch"></el-button>
				</el-input>
			</template>
		</section>

		<section class="noAuditSection mt-5">
			<el-table :data="tableData" border class="noAuditTable" height="100%">
				<el-table-column prop="id" label="" width="40">
				</el-table-column>
				<el-table-column prop="username" label="查询账号" width="180">
					<template slot-scope="scope">
						<el-link class="iconfont icon-fangdajing text_pad" @click="viewAccount(scope.row)" style="color:#1ABC9C;"></el-link>
						<span class="account_text">{{ scope.row.username}}</span>
					</template>
				</el-table-column>
				<el-table-column prop="name" label="会员姓名" width="180">
				</el-table-column>
				<el-table-column v-if="viewType === 'NoAuditType'" prop="group_name" label="会员组别">
				</el-table-column>
				<el-table-column prop="order_num" label="存款单号">
				</el-table-column>
				<el-table-column prop="depositMoney" label="存款金额">
				</el-table-column>
				<el-table-column prop="discount_money" label="优惠金额">
				</el-table-column>
				<el-table-column prop="create_time" sortable label="存款时间" width="180">
				</el-table-column>
				<el-table-column v-if="viewType !== 'NoAuditType'" prop="check_time" label="审核时间">
				</el-table-column>
				<el-table-column v-if="viewType !== 'NoAuditType'" prop="operate_time" label="操作时长">
				</el-table-column>
				<el-table-column label="存款状态">
					<template slot-scope="scope">
						{{offpayStatus[scope.row.status]}}
					</template>
				</el-table-column>
				<el-table-column label="存款类型">
					<template slot-scope="scope">
						{{offpayType[scope.row.pay_type]}}
					</template>
				</el-table-column>
				<el-table-column prop="payuser_info" label="付款方信息">
				</el-table-column>
				<el-table-column prop="payee_info" label="收款方信息" width="140px">
                    <template slot-scope="scope">
                        <el-button v-if="viewType === 'NoAuditType'" @click="handleClick(scope.row)"  type="text" size="small">订单审核</el-button>
                        <el-button @click="confirmClick(scope.row)" type="text" size="small">订单详情</el-button>
                    </template>
				</el-table-column>
			</el-table>
			<Pagination ref="pagination" :data="searchParams" url="finance.depositPage" @paging="pagingCallback"></Pagination>
			<!-- 账号详情 -->
			<el-dialog :title="dialogTitle" :visible.sync="noauditListDialogVisible" width="670px"
				@closed="currentDetails={}">
				<MemberInforDetail :FormData="currentDetails" :readonly="readonly"></MemberInforDetail>
			</el-dialog>
            <!-- 订单详情 -->
            <el-dialog :title="detailDialogTitle" :visible.sync="detailDialogVisible" width="670px" @closed="currentDetails={}">
                <indentDetails :details="currentDetails"></indentDetails>
            </el-dialog>
            <!-- 订单审核 -->
            <el-dialog :title="depositAuditTitle" :visible.sync="depositAuditVisible" width="670px" @closed="currentDetails={}">
                <DepositAuditDetails :details="currentDetails"></DepositAuditDetails>
            </el-dialog>
		</section>
	</div>
</template>

<script>
	import moment from 'moment'
	import Pagination from '@/components/Pagination'
	import MemberInforDetail from '@/views/member/MemberInfoDetail'
    import indentDetails from '@/views/finance/OnlineDepositDetail';
	import DepositAuditDetails from '@/views/finance/DepositAuditDetails'
	import { getMemberGroup } from '@/services/member'
	export default {
		props: {
			viewType: {
				type: String,
				required: true,
			}
		},
		data() {
			return {
				accounts: [],
				groups: [{
						group_name: '==我的分组==',
						group_id: '1'
					}
				],
				types: [],
				tableData: [],
				orderStatus: [],
				TimeType: [{
						label: '存款时间',
						value: '1'
					},
					{
						label: '审核时间',
						value: '2'
					}
				],
				time: '',
				pay_type: '',
				datetime: '',
				conditions: '',
				account: '',
				group: '',
				type: '',
				time: '',
				datetimeRange: 2,
				searchParams: {},
				offpay_status: '',
				payee_account: '',
				payee_name: '',
                noauditListDialogVisible: false,
                detailDialogVisible: false,
                depositAuditVisible: false,
				currentDetails: {},
				readonly: true,
				select_end_date: '',
				select_start_date: ''
			}
		},
		async created() {
			this.getMemberGroup();
			this.account = 'username'
			if(this.viewType === 'NoAuditType') {
				this.getRangeTime();
				this.searchParams = {
					status: 0,
					username: ''
				};
			}else {
				this.searchParams = {
					username: ''
				}	
			}
		},
		watch: {
			datetime() {
				if(this.datetime === null) {
					this.datetime = [];
				}
			}
		},
		components: {
			Pagination,
			// TransformDetails,
			MemberInforDetail,
            indentDetails,
            DepositAuditDetails
		},
		methods: {
			logPageSearch() {
				if(this.viewType === 'NoAuditType') {
					this.searchParams = Object.assign({}, {
						[this.account]: this.conditions,
						group_id: this.group,
						pay_type: this.pay_type,
						start_date:this.select_start_date,
						end_date:this.select_end_date
					});
				}else {
					console.log(this.offpay_status)
					this.searchParams = Object.assign({}, {
						status: this.offpay_status,
						end_date: this.datetime[1],
						start_date: this.datetime[0],
						payee_account: this.payee_account,
						payee_name: this.payee_name,
						[this.account]: this.conditions,
					});
				}
				this.$logger.log(this.searchParams)
				this.$nextTick(() => {
					this.$refs.pagination.refresh(this.searchParams);
				});
			},
			pagingCallback(results, response) {
				this.tableData = results;
            },
            handleClick(data) {
               this.currentDetails = data;
			   this.depositAuditVisible = true;
               
            },
            confirmClick(data) {
               this.currentDetails = data;
			   this.detailDialogVisible = true;
            },
			viewAccount(data) {
				this.currentDetails = data;
				this.$logger.log(this.currentDetails)
				this.noauditListDialogVisible = true;
			},
			getRangeTime () {
				const now = moment();
				const format = 'YYYY-MM-DD HH:MM:SS';
				this.searchParams = Object.assign({},{
					end_date: now.format(format),
					start_date: now.subtract(this.datetimeRange, 'days').format(format)
				});
				this.select_start_date = this.searchParams.start_date;
				this.select_end_date= this.searchParams.end_date;
			},
			datetimeRangeClick() {
				this.getRangeTime();
				this.$nextTick(() => {
					this.$refs.pagination.refresh();
				});
			},
			getMemberGroup() {
				getMemberGroup().then(res => {
					this.$logger.log(res)
					this.groups = Object.assign({}, res.results);
				})
			},
		},
		computed: {
			dialogTitle() {
				return `【${this.currentDetails.name}】会员信息`;
            },
            detailDialogTitle(){
				return `【${this.currentDetails.name}】会员订单详情`;
            },
            depositAuditTitle() {
                return `【${this.currentDetails.time}】会员在线存款审核`
			},
			offpayTypeList() {
				return this.$store.getters["global/OFFPAY_TYPE"]
			},
			offpayType() {
				return this.$store.getters['global/OFFPAY_TYPE_MAP']
			},
			offpayStatusList() {
				return this.$store.getters["global/OFFPAY_STATUS"]
			},
			offpayStatus() {
				return this.$store.getters['global/OFFPAY_STATUS_MAP']
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/styles/sass/variable.scss';

	.w100 {
		width: 100px;
	}

	.w380 {
		width: 380px;
	}

	.w100 {
		width: 100px;
	}

	.iconfontLine::after {
		content: '|';
	}

	.text_pad {
		padding: 0 5px;
	}
	
	.NoAuditContent {
		height: calc(100% - 54px);

		.noAuditSection {
			height: calc(100% - 67px);
		}

		.noAuditTable {
			width: 100%;
			height: 100%;
		}

	}

	.inputValueWidth {
		width: 200px;
	}

	.search-icon {
		background-color: #F2F6FC;
		border-color: $l2BorderColor;
	    border-radius: 0 4px 4px 0;
	}
</style>