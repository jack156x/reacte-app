<template>
	<section class="finance-summarizing-report-wrapper">
		<section class="operate-group mb-5">
			<!-- 体育返水信息没有日期筛选 -->
			<el-button-group>
				<el-button @click="quickRange('today')">今天</el-button>
				<el-button @click="quickRange('yesterday')">前一天</el-button>
				<el-button @click="quickRange('tomorrow')" v-if="isHistory">后一天</el-button>
				<el-button @click="quickRange('thisMonth')">本月</el-button>
				<el-button @click="quickRange('lastMonth')">上个月</el-button>
				<el-button @click="quickRange('nextMonth')" v-if="isHistory">下个月</el-button>
			</el-button-group>
			<!-- <el-input v-model="startTime" placeholder="开始日期" class="txt-date"></el-input> -->
			<!-- <el-input v-model="endTime" placeholder="结束日期" class="txt-date"></el-input> -->

			<el-date-picker v-model="rangeTime" :type="dateType" class="txt-date"
							:format="dateFormat" range-separator="至" 
							start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>

			

			<el-input v-model="account" placeholder="查找账号" class="txt-search">
				<el-button slot="append" type="primary" icon="el-icon-search"></el-button>
			</el-input>
		</section>
		<section class="main-pane">
			<section class="left-pane">
				<section ref="chart" id="chart" class="chart" style="width: 100%; height: 710px;"></section>
			</section>
			<section class="right-pane">
				<section class="list-table">
					<ul>
						<li>
							<div class="col-category">类别</div>
							<div class="col-project">收入项目</div>
							<div class="col-amount">收入金额</div>
						</li>
						<li>
							<div>支出</div>
							<div>
								<el-badge :value="12999" class="item">
									<el-link type="primary" :underline="false" class="project-name">会员存款</el-link>
								</el-badge>
							</div>
							<div>￥1234.32</div>
						</li>
						<li>
							<div>收入</div>
							<div>
								<strong class="project-name">会员存款</strong>
							</div>
							<div>￥0</div>
						</li>
					</ul>
				</section>
				
				<section class="list-summary">
					<ul>
						<li>
							<strong>收入总计：</strong>
							<span>¥4913965.57</span>
						</li>
						<li>
							<strong>支出总计：</strong>
							<span>￥714.72</span>
						</li>
						<li>
							<strong>实际盈亏：</strong>
							<span>
								￥<span class="positive">1692250.85</span>
							</span>
						</li>
					</ul>
				</section>

				<div class="list-tips">
					<strong>注意：</strong>实际盈亏=（收入金额－支出金额）。
				</div>
			</section>
		</section>
	</section>
</template>

<script>
	import _ from 'lodash/util'
	import moment from 'moment'
	// 引入 ECharts 主模块
	const echarts = require('echarts/lib/echarts');
	// 引入饼图
	require('echarts/lib/chart/pie');
	// 引入提示框和标题组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	require('echarts/lib/component/legend')
	require('echarts/lib/component/legendScroll')//图例翻译滚动
	// const echarts = require('echarts');


	export default {
		props: {
			props: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				// startTime: '',
				// endTime: '',
				rangeTime: [],
				account: '',
			};
		},
		methods: {
			quickRange(type){
				const rangeTime = [];
				const [time] = this.rangeTime;
				const now = moment(/^today|thisMonth$/.test(type) ? undefined : time);

				const format = 'YYYY-MM-DD';

				switch(type){
					case 'today':
						rangeTime.push(
							now.format(format),
							now.format(format),
						);
						break;
					case 'yesterday':
						now.subtract(1, 'days');
						rangeTime.push(
							now.format(format),
							now.format(format),
						);
						break;
					case 'tomorrow':
						now.add(1, 'days');
						rangeTime.push(
							now.format(format),
							now.format(format),
						);
						break;
					case 'thisMonth':
						const month1 = moment(now.format('YYYY-MM'));
						rangeTime.push(
							month1.format(format),
							month1.add(1, 'month').subtract(1, 'second').format(format),
						);
						break;
					case 'lastMonth':
						const month2 = moment(now.subtract(1, 'month').format('YYYY-MM'));
						rangeTime.push(
							month2.format(format),
							month2.add(1, 'month').subtract(1, 'second').format(format),
						);
						break;
					case 'nextMonth':
						const month3 = moment(now.add(1, 'month').format('YYYY-MM'));
						rangeTime.push(
							month3.format(format),
							month3.add(1, 'month').subtract(1, 'second').format(format),
						);
						break;
				}

				if(!this.isHistory){
					rangeTime[0] = rangeTime[0] + ' 00:00:00';
					rangeTime[1] = rangeTime[1] + ' 23:59:59';
				}
				this.rangeTime = rangeTime;
			},
		},
		created(){

		},
		mounted(){
			
			var data = genData();

			const option = {
				title : {
					text: '收支财务汇总',
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{b} : {c} ({d}%)"
				},
				legend: {
					type: 'scroll',
					orient: 'vertical',
					left: 10,
					top: 20,
					bottom: 20,
					data: data.legendData,

					selected: data.selected
				},
				series : [
					{
						name: '收支财务汇总',
						type: 'pie',
						radius : '55%',
						// center: ['80%', '50%'],
						data: data.seriesData,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			};

			var myChart = echarts.init(this.$refs.chart);
			// 绘制图表
			myChart.setOption(option);

			this.$logger.log(option);

			function genData(count) {
				var nameList = [
					'会员取款',
					'会员返水派送',
					'会员充值优惠',
					'会员充值赠送',
					'会员彩金派送',
					'会员人工减款',
					'代理会员分润',
					'在线存款[银联支付]',
				];
				var legendData = [];
				var seriesData = [];
				var selected = {};
				for (var i = 0; i < nameList.length; i++) {
					// legendData.push(name);
					seriesData.push({
						name: nameList[i],
						value: Math.round(Math.random() * 100000)
					});
					selected[name] = true;
				}

				return {
					legendData: nameList,
					seriesData: seriesData,
					selected: selected
				};

			}
		},
		computed: {
			isHistory(){
				return this.props.type === 'history';
			},
			dateType(){
				return this.isHistory ? 'daterange' : 'datetimerange';
			},
			dateFormat(){
				return this.isHistory ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss';
			},
		},
		components: {
			
		},
	}

</script>

<style lang="scss">
	.finance-summarizing-report-wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: auto;

		.operate-group{
			.txt-date{
				// width: 100px;
				margin-left: 5px;
				vertical-align: middle;
			}
			.txt-search{
				width: 190px;
				margin-left: 5px;
				vertical-align: middle;
			}
		}

		.main-pane{
			display: flex;
			padding: 20px;
			// flex: 1;
			overflow: auto;

			.left-pane{
				flex: 55;
			}
			.right-pane{
				flex: 45;
			}

			@mixin initUl(){
				margin: 0;
				padding: 0;
				list-style: none;
			}

			.list-table{
				border-top: 1px solid #e7eaec;
				padding-bottom: 20px;

				ul,li{
					@include initUl()
				}
				ul{
					> :first-child{
						font-weight: bold;
					}

					> :last-child{
						border: none;
					}
				}
				li{
					display: flex;
					text-align: left;
					line-height: 20px;
					padding: 8px;
					vertical-align: middle;
					border-bottom: 1px solid #DDD;
					
					> :first-child{
						width: 50px;
						color: #676a6c;
					}
					> :nth-child(2){
						flex: 1;
					}
					> :last-child{
						width: 100px;
						text-align: right;
					}
					
					.project-name{
						font-weight: bold;
						font-size: 14px;
					}
				
					.el-badge__content.is-fixed{
						right: auto;
						transform: none;
						margin-left: 2px;
					}
				}
			}

			.list-summary{
				padding-bottom: 20px;

				ul,li{
					@include initUl()
				}
				ul{
					display: table;
					width: 100%;
				}
				li{
					text-align: right;
					font-size: 13px;
					color: rgb(103, 106, 108);
					padding: 8px;
					line-height: 20px;
					display: table-row;

					> *{
						display: table-cell;
					}
					
					> :last-child{
						border-bottom: 1px solid #DDD;
						padding-bottom: 10px;
						width: 15%;
					}

					.positive{
						color: rgb(0, 128, 0);
					}
					.negative{
						color: #f40;
					}
				}
			}

			.list-tips{
				color: #676a6c;
				min-height: 20px;
				padding: 19px;
				margin-bottom: 20px;
				background-color: #f5f5f5;
				border: 1px solid #e3e3e3;
				border-radius: 4px;
				-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
				box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
			}
		}
	}
</style>
