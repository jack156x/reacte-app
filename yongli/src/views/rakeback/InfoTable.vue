/*会员返水信息列表
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 11:14:35 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-27 18:32:16
 */
<template>
	<section class="rakeback-info-table-wrapper">
		<section class="main-pane">
			<section class="operate-group">
				<!-- 体育返水信息没有日期筛选 -->
				<template v-if="props.type!=='game_sports'">
					<el-date-picker v-model="startTime" type="datetime" placeholder="选择日期时间" class="square-right"></el-date-picker>
					<el-date-picker v-model="endTime" type="datetime" placeholder="选择日期时间" class="square-left"></el-date-picker>
				</template>
				<el-input placeholder="请输入内容" v-model="queryString" class="input-with-query-field">
					<el-select v-model="queryField" slot="prepend" placeholder="请选择">
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
					<el-table-column prop="id" label="查询账号" width="180"></el-table-column>
					<template v-if="isLog">
						<el-table-column prop="id" label="返水日期" width="180"></el-table-column>
						<el-table-column prop="id" label="游戏类型"></el-table-column>
						<!-- 返水比例，游戏类型的才展示 -->
						<el-table-column prop="id" label="返水比例" v-if="isGame"></el-table-column>
						<el-table-column prop="id" label="总投注"></el-table-column>
						<el-table-column prop="id" label="有效投注"></el-table-column>
						<el-table-column prop="id" label="返水开始时间"></el-table-column>
						<el-table-column prop="id" label="返水结束时间"></el-table-column>
						<el-table-column prop="id" label="投注笔数"></el-table-column>
						<el-table-column prop="id" label="会员输赢"></el-table-column>
						<el-table-column prop="id" label="返水金额"></el-table-column>
						<el-table-column prop="id" label="返水类型"></el-table-column>
					</template>
					<template v-else>
						<el-table-column prop="id" label="返水笔数"></el-table-column>
						<el-table-column prop="id" label="六合彩返水"></el-table-column>
						<el-table-column prop="id" label="棋牌返水"></el-table-column>
						<el-table-column prop="id" label="彩票返水"></el-table-column>
						<el-table-column prop="id" label="真人返水"></el-table-column>
						<el-table-column prop="id" label="电子返水"></el-table-column>
						<el-table-column prop="id" label="体育返水"></el-table-column>
						<el-table-column prop="id" label="电竞返水"></el-table-column>
						<el-table-column prop="id" label="总计返水"></el-table-column>
					</template>
				</el-table>
				<Pagination url="finance.onlinedeposits" :data="{}" @paging="pagingCallback"></Pagination>
			<!-- </section> -->

			<section class="footer">
				返水概况：总投注笔数:[423]，总投注金额:[1959.00]，有效投注金额:[1959.00]，网站盈利：[342.42]，返水总额：[20.760]
			</section>
		</section>
	</section>
</template>

<script>
	import FlatButtonGroup from '@/components/FlatButtonGroup'
	import Pagination from '@/components/Pagination'

	export default {
		props: {
			props: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				startTime: '',
				endTime: '',
				queryField: 'account',
				queryString: '',

				/**返水等级名称 */
				gradeName: '',
				/**当前选中游戏类型 */
				currentGame: '',

				dialogVisible: false,

				gameInfo: {
					gradeName: '',
					group: '',

				},

				data: [{
					label: '皇冠体育',
				}, {
					label: '真人视讯',
				}, {
					label: '电子游艺',
				}, {
					label: '棋牌游戏',
				}, {
					label: '电子竞技',
				}],
				/**列表数据 */
				list: []
			};
		},
		methods: {
			changeHandler(data) {
				this.$logger.log(data);
				this.currentGame = data;
			},
			rebateSetting(){
				if(!this.currentGame){
					this.$notify({
						title: '系统提示',
						message: '请在左侧游戏类型列表中选择游戏类型后，再进行会员返佣设置。',
						type: 'warning'
					});
					return;
				}

				this.dialogVisible = true;
			},
			/**分页回调 */
			pagingCallback(list){
				this.list = list;
			},
		},
		computed: {
			isLog(){
				return /^game|game_sports|lottery$/.test(this.props.type);
			},
			isGame(){
				return /^game|game_sports$/.test(this.props.type);
			},
		},
		components: {
			FlatButtonGroup,
			Pagination,
		},
	}

</script>

<style lang="scss">
	.rakeback-info-table-wrapper{
		display: flex;
		align-items: stretch;
		flex: 1;
		overflow: auto;
		
		.main-pane{
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: auto;

			.operate-group{
				margin-bottom: 5px;
				
				.el-select{
					width: 100px;
				}
				.input-with-query-field{
					width: 290px;
					margin-left: 5px;
				}

				.float-right{
					float: right;
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
