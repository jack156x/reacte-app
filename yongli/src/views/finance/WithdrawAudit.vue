/*
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 14:19:28 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-01 17:19:24
 */
<template>
	<section class="finance-withdraw-autit-wrapper">
		<el-form ref="form" :model="info" label-width="100px">
			<el-row>
				<el-col :span="12">
					<el-form-item label="查询账号">
						<el-input v-model="info.username"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="系统单号">
						<el-input v-model="info.order_num"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="借贷类型">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="操作金额">
						<el-input v-model="info.zfb_money"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="汇款金额优惠">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="取款手续费用">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="变动前余额">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="变动后余额">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="订单状态">
						<el-input v-model="info.status"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="订单时间">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="是否异常">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="是否黑名单">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="对方账户信息">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="平台账户信息">
						<el-input v-model="info.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="订单备注">
						<el-input v-model="info.remark" :rows="2.5" type="textarea" resize="none"></el-input>						
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="（必填）审核备注" required>
						<el-input v-model="info.remark_user" :rows="2.5" type="textarea" resize="none"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="（会员可见）审核备注" required="">
						<el-input v-model="info.remark_user" :rows="2.5" type="textarea" resize="none"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-button type="primary" @click="copyData('用户姓名')">复制用户姓名</el-button>
					<el-button type="primary" @click="copyData('查询账号')">复制查询账号</el-button>
					<el-button type="primary" @click="copyData('银行卡号')">复制银行卡号</el-button>
					<el-button type="primary" @click="copyData('操作金额')">复制操作金额</el-button>

					<el-button type="danger" style="float: right;">审核失败</el-button>
					<el-button type="success" style="float: right;">审核成功</el-button>
				</el-col>
			</el-row>
		</el-form>
	</section>
</template>

<script>
	import { copyToClipboard } from '@/utils'

	export default {
		props: {
			details: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				info: {},
			};
		},
		methods: {
			copyData(data){
				// 复制剪切板
				copyToClipboard(data);
			},
		},
		created(){
			this.info = this.details;
		},
	}

</script>

<style lang="scss">

</style>
