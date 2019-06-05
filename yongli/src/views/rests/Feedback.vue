<template>
	<section class="feedback-wrapper">
		<section class="left-area">
			<section class="left-top-area">
				<strong>文件夹</strong>
				<el-button type="text" icon="el-icon-receiving">
					<span class="btn-danger">未处理</span>
				</el-button>
				<el-divider></el-divider>
				<el-button type="text" icon="el-icon-s-help">
					<span class="btn-success">已处理</span>
				</el-button>
				<el-divider></el-divider>
				<el-button type="text" icon="el-icon-delete-solid">
					<span>垃圾箱</span>
				</el-button>
				<el-divider></el-divider>
			</section>
			
			<section class="left-bottom-area">
				<strong>分类</strong>
				<div>
					<i class="icon-circle other"></i>
					<span>其他</span>
				</div>
				<div>
					<i class="icon-circle optimize"></i>
					<span>优化建议</span>
				</div>
				<div>
					<i class="icon-circle withdraw"></i>
					<span>提款投诉</span>
				</div>
				<div>
					<i class="icon-circle deposit"></i>
					<span>存款投诉</span>
				</div>
				<div>
					<i class="icon-circle service"></i>
					<span>客服投诉</span>
				</div>
			</section>
		</section>
		<section class="right-area">
			<section class="border-group">
				<section class="operate-group">
					<el-checkbox v-model="selectAll" label="全选" border></el-checkbox>
					<el-button icon="el-icon-refresh">刷新</el-button>
					<el-button icon="el-icon-delete-solid"></el-button>

					<el-input placeholder="搜搜反馈标题，正文等" v-model="query.searchText">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</section>

				<el-table :data="list" style="width: 100%" border height="0">
					<el-table-column type="selection" width="40"></el-table-column>
					<el-table-column prop="id" label="类型" width="180"></el-table-column>
					<el-table-column prop="id" label="标题" width="180"></el-table-column>
					<el-table-column prop="id" label="内容"></el-table-column>
					<el-table-column prop="id" label="查询账号"></el-table-column>
					<el-table-column prop="id" label="状态"></el-table-column>
					<el-table-column prop="id" label="处理人"></el-table-column>
					<el-table-column prop="id" label="操作">
						<template slot-scope="">
							<el-button icon="el-icon-position">回复</el-button>
						</template>
					</el-table-column>
				</el-table>
				<Pagination url="finance.onlinedeposits" :data="{}" @paging="pagingCallback"></Pagination>
			</section>
		</section>
	</section>
</template>

<script>
	import Pagination from '@/components/Pagination'

	export default{
		data() {
			return {
				selectAll: true,
				query: {
					searchText: '',
				},
				list: [],
				userInfo: {
					name: '',
				}
			};
		},
		methods: {
			/**分页回调 */
			pagingCallback(list){
				this.list = list;
			},
		},
		components: {
			Pagination,
		},
	}
</script>

<style lang="scss">
	@import '@/styles/sass/variable.scss';

	.feedback-wrapper{
		display: flex;
		flex-direction: row!important;

		.left-area{
			width: 250px;
			overflow: auto;
		}

		.left-top-area,
		.left-bottom-area{
			padding: 30px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			font-size: 16px;
			
			strong{
				display: flex;
				margin-bottom: 20px;
			}
		}
		.left-top-area{
			.el-divider{
				margin: 0;
			}
			.el-button{
				font-size: 16px;
				// float: left;
				text-align: left;
			}

			.btn-danger{
				color: $dangerColor;
			}
			.btn-success{
				color: $successColor;
			}
		}
		.left-bottom-area{
			div{
				display: flex;
				margin-bottom: 20px;
			}
			.icon-circle{
				width: 16px;
				height: 16px;
				background-color: orange;
				border-radius: 50%;
				display: inline-block;
				margin-right: 10px;
			}
			.other{
				background-color: rgb(50, 197, 199);
			}
			.optimize{
				background-color: rgb(246, 171, 96);
			}
			.withdraw{
				background-color: rgb(36, 133, 195);
			}
			.deposit{
				background-color: rgb(61, 71, 92);
			}
			.service{
				background-color: rgb(39, 178, 148);
			}

			span{
				display: inline-block;
				line-height: 16px;
			}
		}
		
		.right-area{
			display: flex;
			flex: 1;

			.border-group{
				flex: 1;
				display: flex;
				flex-direction: column;
				border: 1px solid #EBEEF5;
				padding: 20px 0;
					
				// flex: 1;
				// display: flex;
				// flex-direction: column;
				// overflow: auto;

				.operate-group{
					margin-bottom: 15px;

					.el-checkbox{
						margin-right: 10px;
						margin-left: 20px;
					}
					.el-input{
						float: right;
						width: 400px;
					}
				}
			}
		}
	}
</style>
