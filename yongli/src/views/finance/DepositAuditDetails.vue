<template>
	<section class="finance-order-details-wrapper">
		<el-form ref="form" :model="details" label-width="100px">
			<el-row>
				<el-col :span="12">
					<el-form-item label="查询账号">
						<el-input v-model="details.order_num" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="系统单号">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="借贷类型">
						<el-input v-model="details.order_num" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="操作金额">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="汇款金额优惠">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="取款手续费用">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="变动前余额">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="变动后余额">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="订单状态">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="订单时间">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="是否异常">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="是否黑名单">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="对方账户信息">
						<el-input v-model="details.name" :rows="2.5" placeholder="请输入返水等级名称" type="textarea" resize="none"></el-input>						
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="对方平台信息">
						<el-input v-model="details.name" :rows="2.5" placeholder="请输入返水等级名称" type="textarea" resize="none"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
            <el-row>
				<el-col :span="24">
					<el-form-item label="订单备注">
						<el-input v-model="details.name" :rows="2.5" placeholder="请输入返水等级名称" type="textarea" resize="none"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
            <el-row>
				<el-col :span="24">
					<el-form-item label="（必填）审核备注">
						<el-input v-model="details.name" :rows="2.5" placeholder="请输入返水等级名称" type="textarea" resize="none"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
            <el-row>
				<el-col :span="24">
					<el-form-item label="（会员可见）审核备注">
						<el-input v-model="details.name" :rows="2.5" placeholder="请输入返水等级名称" type="textarea" resize="none"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-button type="primary" @click="copyData('用户姓名')">复制用户姓名</el-button>
					<el-button type="primary" @click="copyData('查询账号')">复制查询账号</el-button>
					<el-button type="primary" @click="copyData('银行卡号')">复制银行卡号</el-button>
					<el-button type="primary" @click="copyData('操作金额')">复制操作金额</el-button>
                    <el-button type="success" @click="copyData('用户姓名')">审核成功</el-button>
					<el-button type="danger" @click="centerDialogVisible = true">审核失败</el-button>
				</el-col>
			</el-row>
		</el-form>
        <el-dialog title="系统提示" :visible.sync="centerDialogVisible" width="30%" center>
        <span>请确认是否审核失败！</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="centerDialogVisible = false">确认</el-button>
            <el-button @click="centerDialogVisible = false">取 消</el-button>
        </span>
        </el-dialog>
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
				centerDialogVisible: false
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
