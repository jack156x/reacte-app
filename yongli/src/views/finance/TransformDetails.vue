<template>
	<section class="finance-transform-details-wrapper">
		<el-form ref="form" :model="details" label-width="100px">
			<el-row>
				<el-col :span="24">
					<el-form-item label="转换单号">
						<el-input v-model="details.order_num" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="查询账号">
						<el-input v-model="details.username" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="真人账号">
						<el-input v-model="details.apiuser" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="转出账户">
						<el-input v-model="details.out_account" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="转入账户">
						<el-input v-model="details.in_account" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="转换动作">
						<el-input v-model="details.name" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="转换金额">
						<el-input v-model="details.money" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="转换前额度">
						<el-input v-model="details.name" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="转换后额度">
						<el-input v-model="details.name" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="转换状态">
						<el-input v-model="details.name" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="转换时间">
						<el-input v-model="details.create_time" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="转换结果描述">
						<el-input v-model="details.name" :rows="8" type="textarea" resize="none" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</section>
</template>

<script>
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
	}

</script>

<style lang="scss">

</style>
