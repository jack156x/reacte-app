/*
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 14:00:07 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-29 16:15:13
 */
<template>
	<section class="finance-withdraw-safewarn-wrapper">
		<el-row :gutter="20" style="margin: 0;">
			<!-- 第一列 -->
			<el-col :span="8">
				<el-card>
					<div slot="header" class="card-title">
						<span>总体情况</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="总取款"></el-table-column>
						<el-table-column prop="name" label="总存款"></el-table-column>
						<el-table-column prop="name" label="（取存）款"></el-table-column>
						<el-table-column prop="name" label="总投注"></el-table-column>
						<el-table-column prop="name" label="总输赢"></el-table-column>
						<el-table-column prop="name" label="总盈利率"></el-table-column>
					</el-table>
				</el-card>
				
				<el-card>
					<div slot="header" class="card-title">
						<span>会员姓名修改日志</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="修改前"></el-table-column>
						<el-table-column prop="name" label="修改后"></el-table-column>
						<el-table-column prop="name" label="修改时间"></el-table-column>
						<el-table-column prop="name" label="修改人账号"></el-table-column>
						<el-table-column prop="name" label="修改IP"></el-table-column>
						<el-table-column prop="name" label="IP归属"></el-table-column>
					</el-table>
				</el-card>
				
				<el-card>
					<div slot="header" class="card-title">
						<span>同姓名会员列表</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="注册时间"></el-table-column>
						<el-table-column prop="name" label="会员账号"></el-table-column>
						<el-table-column prop="name" label="会员姓名"></el-table-column>
						<el-table-column prop="name" label="钱包余额"></el-table-column>
						<el-table-column prop="name" label="会员输赢"></el-table-column>
						<el-table-column prop="name" label="所属代理"></el-table-column>
					</el-table>
				</el-card>
				
				<el-card>
					<div slot="header" class="card-title">
						<span>同银行卡会员列表</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="注册时间"></el-table-column>
						<el-table-column prop="name" label="会员账号"></el-table-column>
						<el-table-column prop="name" label="会员姓名"></el-table-column>
						<el-table-column prop="name" label="钱包余额"></el-table-column>
						<el-table-column prop="name" label="会员输赢"></el-table-column>
						<el-table-column prop="name" label="所属代理"></el-table-column>
					</el-table>
				</el-card>
				
				<el-card>
					<div slot="header" class="card-title">
						<span>数据库异常操作日志</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="表名 表列"></el-table-column>
						<el-table-column prop="name" label="key值"></el-table-column>
						<el-table-column prop="name" label="修改前"></el-table-column>
						<el-table-column prop="name" label="修改后"></el-table-column>
						<el-table-column prop="name" label="修改时间"></el-table-column>
						<el-table-column prop="name" label="修改人IP"></el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<!-- 第二列 -->
			<el-col :span="8">
				<el-card>
					<div slot="header" class="card-title">
						<span>会员信息</span>
					</div>
					<!-- 会员信息展示 -->
					<MemberInfoDetail :form-data="username" :readonly="true" view="plain"></MemberInfoDetail>
				</el-card>
				
				<el-card>
					<div slot="header" class="card-title">
						<span>会员登录IP信息统计</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="IP地址归属"></el-table-column>
						<el-table-column prop="name" label="登陆次数"></el-table-column>
					</el-table>
				</el-card>

				<el-card class="contain-button-card">
					<div slot="header" class="card-title">
						<span>登录日志</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="登录IP"></el-table-column>
						<el-table-column prop="name" label="登陆地址"></el-table-column>
						<el-table-column prop="name" label="登陆时间"></el-table-column>
						<el-table-column prop="name" label="登陆网址"></el-table-column>
					</el-table>
					<el-button type="text">查看更多</el-button>
				</el-card>
			</el-col>
			<!-- 第三列 -->
			<el-col :span="8">
				<el-card>
					<div slot="header" class="card-title">
						<span>近期游戏统计</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="日期"></el-table-column>
						<el-table-column prop="name" label="投注笔数"></el-table-column>
						<el-table-column prop="name" label="投注金额"></el-table-column>
						<el-table-column prop="name" label="输赢金额"></el-table-column>
						<el-table-column prop="name" label="盈利率"></el-table-column>
					</el-table>
				</el-card>

				<el-card>
					<div slot="header" class="card-title">
						<span>近期存取款统计</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="日期"></el-table-column>
						<el-table-column prop="name" label="存款笔数"></el-table-column>
						<el-table-column prop="name" label="存款金额"></el-table-column>
						<el-table-column prop="name" label="取款笔数"></el-table-column>
						<el-table-column prop="name" label="取款金额"></el-table-column>
						<el-table-column prop="name" label="当日输赢"></el-table-column>
					</el-table>
				</el-card>

				<el-card class="contain-button-card">
					<div slot="header" class="card-title">
						<span>银行卡信息</span>
					</div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="开户银行"></el-table-column>
						<el-table-column prop="name" label="开户人"></el-table-column>
						<el-table-column prop="name" label="开户地址"></el-table-column>
						<el-table-column prop="name" label="银行卡号"></el-table-column>
						<el-table-column prop="name" label="是否删除"></el-table-column>
					</el-table>
					<el-button type="text">查看更多</el-button>
				</el-card>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import MemberInfoDetail from '@/views/member/MemberInfoDetail'

	export default {
		props: {
			username: {},
		},
		data() {
			return {
				tableData: [
					{
						name: 1,
					},
					{
						name: 2,
					},
					{
						name: 3,
					}
				],
			};
		},
		methods: {
			
		},
		components: {
			MemberInfoDetail,
		},
	}

</script>

<style lang="scss">
	.finance-withdraw-safewarn-wrapper{
		overflow-y: auto;
		
		.el-row{
			padding: 10px;
		}

		.el-card{
			margin-bottom: 35px;
			
			.card-title{
				font-size: 18px;
				font-weight: bold;
				color: rgb(88, 83, 91);
			}
		}
		.contain-button-card{
			text-align: right;
		}
	}
</style>
