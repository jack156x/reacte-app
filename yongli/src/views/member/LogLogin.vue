<template>
	<section class="finance-transform-details-wrapper logContent" style="display: block">
		<template>
			<section v-if="listType === 'Detail' || listType === 'abnormalLog'" class="w500 searchTime">
				<el-select v-model="loginTime" clearable placeholder="登录时间" class="w100 square-right">
					<el-option v-for="item in loginTimeType" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-date-picker v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange"
					range-separator="至" start-placeholder="时间起始" end-placeholder="时间结束" align="right" class="square-left date">
				</el-date-picker>
			</section>
			<section>
				<el-input placeholder="请输入查询条件" v-model="memberName" class="input-with-select searchAccount ml-5">
					<el-select class="w100" v-model="select" slot="prepend" placeholder="==查询条件==">
						<el-option label="==查询条件==" value=""></el-option>
						<el-option label="查询账号" value="username"></el-option>
						<el-option label="会员姓名" value="realname"></el-option>
						<el-option label="IP地址" value="login_ip"></el-option>
						<el-option label="IP归属地" value="login_area"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search" @click="logPageSearch"></el-button>
				</el-input>
				<el-button type="primary" icon="el-icon-refresh" @click="refreshTable" class="refreshBtn"></el-button>
			</section>
		</template>
		<section class="listContent">
			<el-table class="table mt-5" :data="tableData" height="100%" border style="width: 100%;"
				tooltip-effect="light">
				<template>
					<el-table-column prop="no" label width="100px"></el-table-column>
					<el-table-column prop="username" label="查询账号" width="100" :show-overflow-tooltip="true">
					</el-table-column>
					<el-table-column prop="realname" label="会员姓名" width="100" :show-overflow-tooltip="true">
					</el-table-column>
					<el-table-column prop="login_ip" label="IP地址" width="100" :show-overflow-tooltip="true">
					</el-table-column>
					<el-table-column prop="login_area" label="IP归属地" width="100" :show-overflow-tooltip="true">
					</el-table-column>
					<el-table-column prop="login_url" label="登录网址" width="100" :show-overflow-tooltip="true">
					</el-table-column>
					<el-table-column prop="action_time" label="登陆时间"></el-table-column>
				</template>
			</el-table>
			<Pagination ref="pagination" :data="logLoginParams" url="member.log" @paging="pagingCallback">
			</Pagination>
		</section>
	</section>
</template>

<script>
	import Pagination from '@/components/Pagination'
	export default {
		props: {
			viewType: {
				type: String,
				default: 'Detail'
			},
			details: {
				type: Object,
				default: ()=> ({})
			}
		},
		data() {
			return {
				select: '',
				logLoginParams: {
					action_type:0
				},
				memberName: '',
				listType: '',
				datetime: '',
				loginTime: '',
				loginTimeType: [{
						value: '1',
						label: '登录时间'
					},
					{
						value: '2',
						label: '创建时间'
					}
				],
				tableData: []
			}
		},
		components: {
			Pagination
		},
		methods: {
			pagingCallback(results, response) {
				this.tableData = results
				this.$logger.log(111)
				this.$logger.log(this.details)
				this.$logger.log(222)
				// results：返回的列表数据
				// response：请求接口返回的响应数据
				// do something...
			},
			refreshTable() {
				this.$nextTick(() => {
					this.$refs.pagination.refresh()
				})
			},
			logPageSearch() {
				if (this.listType === 'abnormalLog' || this.listType === 'OnlineDepositType0' || this.listType === 'Detail') {
						this.logLoginParams = Object.assign({}, this.logLoginParams,{
						action_time_start: this.datetime[0],
						action_time_end: this.datetime[1],
						[this.select]:this.memberName
					})
				}else {
					this.logLoginParams = Object.assign({}, this.logLoginParams,{
						[this.select] : this.memberName,
					})
				}
				this.$logger.log(this.logLoginParams)
				this.$nextTick(() => {
					this.$refs.pagination.refresh(this.logLoginParams)
				})
			}
		},
		async created() {
			this.listType = this.viewType;
			console.log(this.details)
			if(this.listType =='Detail' || this.listType == 'abnormalLog') {
				this.logLoginParams = Object.assign({}, this.logLoginParams, {
					login_ip: this.details.login_ip, 
					login_area: this.details.login_area,
					username:this.details.username
				})
				this.select = 'username'
				this.memberName = this.details.username
			}else{
				this.logLoginParams = Object.assign({}, this.logLoginParams, {
					username:this.details.username
				})
			}
		},
		watch: {
			datetime() {
				if(this.datetime === null) {
					this.datetime = [];
				}
			}
		}
	}
</script>

<style lang="scss">
	.w100 {
		width: 100px;
	}

	.w500 {
		width: 500px;
	}

	.ml10 {
		margin-left: 10px;
	}

	.input-with-select,
	.searchAccount {
		width: 300px;
	}

	.searchTime {
		float: left;
		display: flex;
	}

	.refreshBtn {
		float: right;
		padding: 8px;
		text-align: center;
		margin: 0 10px;
	}

	.logContent {
		height: calc(100% - 54px);

		.listContent {
			height: calc(100% - 67px);
		}

		.table {
			width: 100%;
			height: 100%;
		}
	}
</style>
