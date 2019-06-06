<template>
	<div class="logDetailContent">
		<section>
			<template v-if="viewType === 'IPStatistical'">
				<el-select class="w100 square-right" v-model="memberNum" clearable placeholder="会员数量">
					<el-option v-for="item in memberNumType" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-input type="number" class="inputValueWidth square-left" v-model="numStart" placeholder="起始值"></el-input>
				至
				<el-input type="number" class="inputValueWidth" v-model="numEnd" placeholder="结束值"></el-input>
			</template>
			<section class="searchTime" v-if="viewType === 'ModifyLog' || viewType === 'FenRunLog' || viewType === 'upgradeLog' || viewType === 'transferLog'">
				<el-select class="w100 square-right" v-model="action_time" clearable placeholder="创建时间">
					<el-option label="创建时间" value="createTime">
					</el-option>
				</el-select>
				<el-date-picker v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
					range-separator="至" start-placeholder="时间起始" end-placeholder="时间结束" align="right" class="date square-left">
				</el-date-picker>
			</section>
			<section class="searchTime" v-if="viewType === 'LoginErrorIPLog' || viewType === 'abnormalLog'">
				<el-select class="w100 square-right" v-model="action_time" clearable placeholder="登录时间">
					<el-option label="登录时间" value="loginTime">
					</el-option>
				</el-select>
				<el-date-picker v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
					range-separator="至" start-placeholder="时间起始" end-placeholder="时间结束" align="right" class="date square-left">
				</el-date-picker>
			</section>
			<section class="searchTime" v-if="viewType === 'NoteLog'">
				<el-select class="w100 square-right" v-model="action_time" clearable placeholder="操作时间">
					<el-option label="操作时间" value="handleTime">
					</el-option>
				</el-select>
				<el-date-picker v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
					range-separator="至" start-placeholder="时间起始" end-placeholder="时间结束" align="right" class="date square-left">
				</el-date-picker>
			</section>

			<el-select v-if="viewType === 'ModifyLog'" class="ml-5 w150" v-model="modifyType" placeholder="请选择修改类型">
				<el-option
				v-for="item in modifyTypes"
				:key="item.value"
				:label="item.label"
				:value="item.value">
				</el-option>
			</el-select>

			<el-input placeholder="请输入查询条件" v-model="searchCondition" class="input-with-select w380 ml-5">
				<el-select class="w100" v-model="select" slot="prepend" placeholder="查询账号">
					<el-option v-if="viewType !=='abnormalLog'" label="会员姓名" value="realname"></el-option>
					<el-option label="查询账号" value="username"></el-option>
					<el-option label="IP地址" value="login_ip"></el-option>
					<el-option label="IP归属地" value="login_area"></el-option>
					<el-option label="登录账号" value="username"></el-option>
				</el-select>
				<el-button slot="append" icon="el-icon-search" @click="logPageSearch"></el-button>
			</el-input>
			<template v-if="viewType === 'LoginArea'">
				<el-button class="ml-5" type="primary">地图按钮</el-button>
				<el-button type="primary">表格按钮</el-button>
			</template>
			<el-button type="primary" icon="el-icon-refresh" @click="refreshTable" class="refreshBtn"></el-button>
		</section>
		<section class="listContent">
			<el-table class="table mt-5" height="100%" :data="tableData" border>
				<el-table-column prop="no" label width="40px"></el-table-column>
				<template v-if="viewType !=='IPStatistical'&& viewType !== 'LoginErrorIPLog'">
					<el-table-column prop="username" v-if="isShowView.isShowAccount" label="查询账号" width="180" :show-overflow-tooltip="true">
					</el-table-column>
					<!-- <el-table-column prop="realname" label="会员姓名" width="180"></el-table-column> -->
				</template>
				<el-table-column v-if="viewType !=='IPStatistical'&& viewType !=='ModifyLog' && viewType !=='LoginErrorIPLog'&& viewType !=='abnormalLog'" prop="realname" label="会员姓名" width="180"></el-table-column>
		        
				<el-table-column v-if="viewType === 'IPStatistical'" prop="login_ip" label="IP地址"></el-table-column>
				<el-table-column v-if="viewType === 'IPStatistical'" prop="login_area" label="IP归属地"></el-table-column>

				<template v-if="viewType === 'transferLog'">
					<!-- 会员名称，会员级别，升级后级别， 上级代理账号，转移上级账号, 备注  -->
					<el-table-column prop="value1" label="会员级别"></el-table-column>
					<el-table-column prop="value2" label="升级后级别"></el-table-column>
					<el-table-column prop="agent_old_name" label="上级代理账号"></el-table-column>
					<el-table-column prop="agent_new_name" label="转移上级账号"></el-table-column>
				</template>

				<template v-if="viewType === 'FenRunLog'|| viewType === 'upgradeLog' || viewType ==='transferLog'">
					<el-table-column v-if="viewType !== 'transferLog'" prop="value1" label="描述" width="240" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="owner_name" label="操作人"></el-table-column>
					<el-table-column sortable prop="create_time" label="时间"></el-table-column>
				</template>
				<el-table-column v-if="viewType === 'transferLog'" prop="remark" label="备注" class-name='remark' width="200" :show-overflow-tooltip="true"></el-table-column>
				<el-table-column sortable prop="user_num" v-if="viewType === 'IPStatistical'" label="会员数量">
					<template slot-scope="scope">
						<el-link class="iconfont icon-fangdajing text_pad" @click="memberNumsList(scope.row)" style="color:#1ABC9C;"></el-link>
						{{ scope.row.user_num }}
					</template>
				</el-table-column>
				<el-table-column prop="ip_num" v-if="viewType === 'LoginStatistical'" sortable label="IP数量">
					<template slot-scope="scope">
						<el-link class="iconfont icon-fangdajing text_pad" @click="memberNumsList(scope.row)" style="color:#1ABC9C;"></el-link>
						<span class="account_text">{{ scope.row.ip_num}}</span>
					</template>
				</el-table-column>

				<template v-if="viewType === 'ModifyLog'">
					<el-table-column prop="edit_type" label="修改类型"></el-table-column>
					<el-table-column prop="value1" label="修改前内容"></el-table-column>
					<el-table-column prop="value2" label="修改后内容"></el-table-column>
					<el-table-column sortable prop="create_time" label="创建时间"></el-table-column>
					<el-table-column prop="create_ip" label="创建IP"></el-table-column>
					<el-table-column prop="create_area" label="创建地区"></el-table-column>
				</template>
				<template v-if="viewType === 'NoteLog'">
					<el-table-column prop="value1" label="提示备注" width="180" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="value2" label="备注原因"></el-table-column>
					<el-table-column prop="owner" label="操作账号"></el-table-column>
					<el-table-column prop="create_time" label="操作时间"></el-table-column>
				</template>


				<template v-if="viewType === 'LoginErrorIPLog' || viewType === 'abnormalLog'">
					<!-- 登录账号，会员名称，财务输赢，次数，创建时间，最后登录时间 -->
					<el-table-column prop="username" v-if="viewType !== 'abnormalLog'" label="登录账号"></el-table-column>
					<!-- <el-table-column prop="username" v-if="viewType !== 'LoginErrorIPLog'" label="查询账号"></el-table-column> -->
					<el-table-column prop="realname" label="会员名称"></el-table-column>
					<el-table-column prop="winlose_money" label="财务输赢"></el-table-column>
					<el-table-column v-if="viewType === 'LoginErrorIPLog' || viewType === 'abnormalLog'" prop="login_ip" label="IP地址"></el-table-column>
					<el-table-column prop="ip_num" label="次数">
						<template slot-scope="scope">
							<el-link class="iconfont icon-fangdajing text_pad" @click="memberNumsList(scope.row)" style="color:#1ABC9C;"></el-link>
							<span class="account_text">{{ scope.row.ip_num}}</span>
						</template>
					</el-table-column>
					<el-table-column v-if="viewType !== 'LoginErrorIPLog'" prop="login_url" label="登录网址"></el-table-column>
					<el-table-column prop="action_time" label="创建时间"></el-table-column>
					<el-table-column prop="last_login" label="最后登录时间"></el-table-column>
				</template>
			</el-table>
			<Pagination ref="pagination" :data="searchParams" :url="defaultUrl" @paging="pagingCallback"></Pagination>
			<!-- 账号详情 -->
			<el-dialog custom-class="inDialog" :title="dialogTitle" :visible.sync="memberNumsDialog" width="920px"
				@closed="currentNumsDetails={}">
				<LogLogin class="inbody" :details="currentNumsDetails" :viewType="viewType" :style="dialogCss"></LogLogin>
			</el-dialog>
		</section>
	</div>
</template>

<script>
	import Pagination from "@/components/Pagination";
	import LogLogin from "@/views/member/LogLogin";
	export default {
		name: "log",
		props: {
			props: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				memberNumType: [{
					value: "选项1",
					label: "会员数量"
				}],
				select: "",
				searchCondition: "",
				memberNum: "",
				numStart: "",
				numEnd: "",
				tableData: [],
				action_time: "",
				datetime: "",
				inputValue: "",
				searchParams: {},
				isShowView: {
					isShowAccount: true
				},
				defaultUrl: "member.log",
				memberNumsDialog: false,
				currentNumsDetails: {},
				modifyType: '',
				modifyTypes: [
					{
						value: '修改会员名称',
          				label: '修改会员名称'
					},
					{
						value: '修改会员登入密码',
          				label: '修改会员登入密码'
					},
					{
						value: '修改会员提款密码',
          				label: '修改会员提款密码'
					},
					{
						value: '会员完善资料',
          				label: '会员完善资料'
					},
					{
						value: '修改姓名',
          				label: '修改姓名'
					},
					{
						value: '银行卡片',
          				label: '银行卡片'
					},
					{
						value: '修改密码',
          				label: '修改密码'
					},
					{
						value: '删除会员',
          				label: '删除会员'
					}
				]
			};
		},
		components: {
			Pagination,
			LogLogin
		},
		async created() {
			this.$logger.log(this.viewType);
			this.defaultUrl = this.logTypeUrl;
			this.select = 'username';
			if (
				this.viewType === "ModifyLog"
			) {
				this.searchParams = {
					log_type: 0
				};
			}
			if (
				this.viewType === "NoteLog"
			) {
				this.searchParams = {
					log_type: 1
				};
			}
			if (
				this.viewType === "FenRunLog"
			) {
				this.searchParams = {
					log_type: 2
				};
			}
			if (
				this.viewType === "upgradeLog"
			) {
				this.searchParams = {
					log_type: 3
				};
			}
			if (this.viewType === "transferLog") {
				this.searchParams = {
					log_type: 4
				};
			}
			if (this.viewType === "Detail") {
				this.searchParams = {
					action_type: 0
				};
			}
		},
		computed: {
			viewType() {
				this.$logger.log(this.props.viewType);
				return this.props.viewType;
			},
			logTypeUrl() {
				return this.props.logTypeUrl;
			},
			dialogTitle() {
				return `【${this.currentNumsDetails.login_ip}】地址的会员的登录日志明细`;
			}
		},
		watch: {
			datetime() {
				if(this.datetime === null) {
					this.datetime = [];
				}
			}
		},
		methods: {
			pagingCallback(results, response) {
				this.tableData = results;
				// results：返回的列表数据
				// response：请求接口返回的响应数据
				// do something...
			},
			refreshTable() {
				this.$nextTick(() => {
					this.$refs.pagination.refresh();
				});
			},
			logPageSearch() {
				if(this.viewType === 'LoginStatistical') {
					this.searchParams = {
						[this.select]: this.searchCondition,
					};
				}
				if(this.viewType === 'ModifyLog') {
					this.searchParams = {
						action_time_start: this.datetime[0],
						action_time_end: this.datetime[1],
						[this.select]: this.searchCondition,
						edit_type: this.modifyType
					};
				}
				if(this.viewType !== 'ModifyLog'&&this.viewType !== 'LoginStatistical') {
					this.searchParams = {
						action_time_start: this.datetime[0],
						action_time_end: this.datetime[1],
						[this.select]: this.searchCondition,
					};
				}
				this.$logger.log(this.searchParams);
				this.$nextTick(() => {
					this.$refs.pagination.refresh(this.searchParams);
				});
			},
			memberNumsList(data) {
				this.currentNumsDetails = data;
				this.$logger.log(this.currentNumsDetails);
				this.memberNumsDialog = true;
			},
		}
	};
</script>


<style lang="scss">
	$color: rgb(26, 188, 156);

	.iconfontLine::after {
		content: '|';
	}

	.text_pad {
		padding: 0 5px;
	}

	.logDetailContent {
		height: 100%;
		
		.searchTime { display: flex;}
 
		.listContent {
			height: calc(100% - 81px);
		}

		.table {
			width: 100%;
			height: 100%;
		}
	}

	.inputValueWidth {
		width: 270px;
		input { padding-right: 0; }
	}

	.w100 {
		width: 100px;
	}

	.w150 {
		width: 150px;
	}

	.w380 {
		width: 380px;
	}

	.refreshBtn {
		float: right;
		padding: 8px;
		text-align: center;
		color: #fff;
		margin: 0 10px;
	}

	.inDialog {
		.el-dialog__body {
			position: relative;

			.logContent {
				width: 100%;
			}
		}
	}
</style>