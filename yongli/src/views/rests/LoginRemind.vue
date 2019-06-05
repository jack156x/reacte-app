/*上线提醒
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-25 11:17:01 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-25 11:57:30
 */
<template>
	<section class="login-remind-wrapper">
		<section class="main-pane">
			<section class="operate-group">
				<el-select v-model="query.loginRange" slot="prepend" placeholder="请选择">
					<el-option label="最后登录" value="last"></el-option>
				</el-select>
				<el-date-picker v-model="query.startTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
				<el-date-picker v-model="query.endTime" type="datetime" placeholder="选择日期时间"></el-date-picker>

				<el-select v-model="query.group" slot="prepend" placeholder="所属组别" class="ml-5">
					<el-option label="所属组别" value="group"></el-option>
				</el-select>
				
				<el-select v-model="query.wallet" slot="prepend" placeholder="会员钱包" class="ml-5">
					<el-option label="会员钱包" value="wallet"></el-option>
				</el-select>
				<el-input type="number" :step="1000" class=txt-num></el-input>至
				<el-input type="number" :step="1000" class="txt-num"></el-input>
				
				<el-select v-model="query.group" slot="prepend" placeholder="==未登录天数==" class="ml-5">
					<el-option label="==未登录天数==" value="group"></el-option>
				</el-select>
				
				<el-select v-model="query.group" slot="prepend" placeholder="==未押注天数==" class="ml-5">
					<el-option label="==未押注天数==" value="group"></el-option>
				</el-select>

				<el-input placeholder="请输入内容" v-model="query.queryString" class="input-with-query-field ml-5">
					<el-select v-model="query.queryField" slot="prepend" placeholder="请选择">
						<el-option label="查询账号" value="account"></el-option>
						<el-option label="登录账号" value="login"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>

				<!-- 右侧按钮 -->
				<el-button type="primary" icon="el-icon-refresh" class="float-right"></el-button>
			</section>

			<!-- <section class="table-group"> -->
				<el-table :data="list" style="width: 100%" border height="100px">
					<el-table-column prop="no" width="40"></el-table-column>
					<el-table-column prop="id" label="注册时间" width="180"></el-table-column>
					
						<el-table-column prop="id" label="查询账号" width="180"></el-table-column>
						<el-table-column prop="id" label="会员姓名"></el-table-column>
						<el-table-column prop="id" label="会员组别"></el-table-column>
						<el-table-column prop="id" label="钱包余额"></el-table-column>
						<el-table-column prop="id" label="返水账户"></el-table-column>
						<el-table-column prop="id" label="财物输赢"></el-table-column>
						<el-table-column prop="id" label="所属代理账号"></el-table-column>
						<el-table-column prop="id" label="所属代理姓名"></el-table-column>
						<el-table-column prop="id" label="是否在线"></el-table-column>
						<el-table-column prop="id" label="上线提醒"></el-table-column>
						<el-table-column prop="id" label="是否异常"></el-table-column>
						<el-table-column prop="id" label="未登录天数"></el-table-column>
						<el-table-column prop="id" label="未投注天数"></el-table-column>
						<el-table-column prop="id" label="最后登录时间"></el-table-column>
				</el-table>
				<Pagination url="finance.onlinedeposits" :data="{}" @paging="pagingCallback"></Pagination>
			<!-- </section> -->
		</section>
	</section>
</template>

<script>
	import Pagination from '@/components/Pagination'

	export default {
		data() {
			return {
				query: {
					loginRange: 'last',
					wallet: 'wallet',
					startTime: '',
					endTime: '',
					queryField: 'account',
					queryString: '',
				},
				
				/**列表数据 */
				list: []
			};
		},
		methods: {
			/**分页回调 */
			pagingCallback(list){
				this.list = list;
			},
		},
		computed: {
			
		},
		components: {
			Pagination,
		},
	}

</script>

<style lang="scss">
	.login-remind-wrapper{
		display: flex;
		align-items: stretch;
		// margin-top: -8px;
		flex: 1;
		overflow: auto;
		
		.main-pane{
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: auto;

			.operate-group{
				margin-bottom: 5px;

				.txt-num{
					width: 100px;
				}
				
				.el-select{
					width: 100px;
				}
				.input-with-query-field{
					width: 290px;
				}

				.float-right{
					float: right;
				}
			}
		}
	}
</style>
