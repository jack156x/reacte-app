/*转入转出提醒
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-25 11:17:01 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-25 13:42:44
 */
<template>
	<section class="income-out-remind-wrapper">
		<section class="main-pane">
			<section class="operate-group">
				<el-select v-model="query.loginRange" slot="prepend" placeholder="请选择">
					<el-option label="成功" value="1"></el-option>
				</el-select>
				
				<el-select v-model="query.loginRange" slot="prepend" placeholder="请选择" class="ml-5">
					<el-option label="转换时间" value="1"></el-option>
				</el-select>
				<el-date-picker v-model="query.startTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
				<el-date-picker v-model="query.endTime" type="datetime" placeholder="选择日期时间"></el-date-picker>

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
						<el-table-column prop="id" label="真人账号"></el-table-column>
						<el-table-column prop="id" label="转换单号"></el-table-column>
						<el-table-column prop="id" label="转出账号"></el-table-column>
						<el-table-column prop="id" label="转入账号"></el-table-column>
						<el-table-column prop="id" label="转换金额"></el-table-column>
						<el-table-column prop="id" label="转出前余额"></el-table-column>
						<el-table-column prop="id" label="转出后余额"></el-table-column>
						<el-table-column prop="id" label="转入前余额"></el-table-column>
						<el-table-column prop="id" label="转入后余额"></el-table-column>
						<el-table-column prop="id" label="转换状态"></el-table-column>
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
					loginRange: '1',
					wallet: '1',
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
	.income-out-remind-wrapper{
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
