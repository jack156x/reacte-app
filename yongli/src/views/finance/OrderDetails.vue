/*
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 11:55:24 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-01 10:47:44
 */
<template>
	<section class="finance-order-details-wrapper">
		<el-form ref="form" :model="details" label-width="100px">
			<el-row>
				<el-col :span="12">
					<el-form-item label="登录账号">
						<el-input v-model="details.username" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="系统单号">
						<el-input v-model="details.charge_order_num" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="借贷类型">
						<el-input :value="actionType[details.action_type]" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="操作金额">
						<el-input v-model="details.action_money" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="汇款金额优惠">
						<el-input v-model="details.preferential_fee" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="取款手续费用">
						<el-input v-model="details.fees" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="变动前余额">
						<el-input v-model="details.start_money" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="变动后余额">
						<el-input v-model="details.end_money" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="订单状态">
						<el-input :value="payType[details.pay_status]" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="订单时间">
						<el-input v-model="details.action_time" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="对方账户信息">
						<el-input :value="otherInfo" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="平台账户信息">
						<el-input readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="订单备注">
						<el-input v-model="details.remark" :rows="2.5" type="textarea" resize="none" readonly></el-input>						
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="审核备注">
						<el-input v-model="details.operate_remark" :rows="2.5" type="textarea" resize="none" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-button type="primary" @click="copyData('用户姓名')" v-if="isWithdraw">复制用户姓名</el-button>
					<el-button type="primary" @click="copyData(details.username)">复制查询账号</el-button>
					<el-button type="primary" @click="copyData('银行卡号')" v-if="isWithdraw">复制银行卡号</el-button>
					<el-button type="primary" @click="copyData(details.action_money)">复制操作金额</el-button>
				</el-col>
			</el-row>
		</el-form>
	</section>
</template>

<script>
	import { copyToClipboard } from '@/utils'
	import { mapGetters } from 'vuex'

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
			copyData(data){
				// 复制剪切板
				copyToClipboard(data);
			},
		},
		computed: {
			/**取款类型 */
			isWithdraw(){
				return this.details.action_type == 1;
			},
			/**对方账户信息 */
			otherInfo(){
				if(this.isWithdraw){
					const {
						// 银行卡号
						zfb_name='',
						// 银行卡姓名
						zfb_nickname='',
						// 开户行省份
						bank_province='',
						// 开户行
						bank_name='',
					} = this.details;
					return `${zfb_nickname} ${bank_name} ${zfb_name} ${bank_province}`;
				}else
					return '';
			},

			...mapGetters({
				/**借贷类型映射 */
				actionType: 'global/BANK_ACTION_TYPE_MAP',
				/**支付状态 */
				payType: 'global/PAY_STATUS_MAP',
			}),
		}
	}

</script>

<style lang="scss">

</style>
