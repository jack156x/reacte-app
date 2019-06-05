<template>
	<section class="finance-order-details-wrapper">
		<el-form ref="form" :model="details" label-width="100px">
			<el-row>
				<el-col :span="12">
					<el-form-item label="登录账号">
						<el-input v-model="details.username" placeholder="请输入登录账号" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="系统单号">
						<el-input v-model="details.order_num " placeholder="请输入系统单号" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="借贷类型">
						<el-input v-model="details.order_num" placeholder="请输入借贷类型" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="操作金额">
						<el-input v-model="details.real_money" placeholder="请输入操作金额" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="汇款金额优惠">
						<el-input v-model="details.real_money" placeholder="请输入汇款金额优惠" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="取款手续费用">
						<el-input v-model="details.fees" placeholder="请输入取款手续费用" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="变动前余额">
						<el-input v-model="details.startmoney" placeholder="请输入变动前的余额" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="变动后余额">
						<el-input v-model="details.startmoney" placeholder="请输入变动后的余额" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="订单状态">
						<el-input v-model="details.status" placeholder="请输入订单状态" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="订单时间">
						<el-input v-model="details.create_time" placeholder="请输入订单时间" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="对方账户信息">
						<el-input v-model="details.name" placeholder="请输入对方账户信息" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="平台账户信息">
						<el-input v-model="details.name" placeholder="请输入平台账户信息" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="订单备注">
						<el-input v-model="details.remark" :rows="2.5" placeholder="请输入订单备注" type="textarea" resize="none"></el-input>						
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="审核备注">
						<el-input v-model="details.remark" :rows="2.5" placeholder="请输入审核备注" type="textarea" resize="none"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-button type="primary" @click="copyData(details.name)">复制用户姓名</el-button>
					<el-button type="primary" @click="copyData(details.order_num)">复制查询账号</el-button>
					<el-button type="primary" @click="copyData('银行卡号')">复制银行卡号</el-button>
					<el-button type="primary" @click="copyData('操作金额')">复制操作金额</el-button>
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
				
			};
		},
		methods: {
			copyData(pay_name='abc123'){
				copyToClipboard(pay_name);
			},
		},
	}

</script>

<style lang="scss">

</style>
