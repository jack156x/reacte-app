<template>
	<section class="finance-transform-details-wrapper">
		<el-form ref="form" :model="details" label-width="100px">
			<el-row>
				<el-col :span="12">
					<el-form-item label="查询账号">
						<el-input v-model="details.username" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="会员姓名">
						<el-input v-model="details.username" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="会员组别">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="真人账号">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="注册时间">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="注册IP">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="注册地址">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="推荐人">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="上级代理ID">
						<el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="是否监控">
						<!-- <el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input> -->
                        <el-checkbox v-model="details.isChecked"></el-checkbox>
					</el-form-item>
				</el-col>
			</el-row>
            <el-row>
				<el-col :span="12">
					<el-form-item label="代理创建">
						<!-- <el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input> -->
                        <el-checkbox v-model="details.isChecked"></el-checkbox>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="是否代理">
						<!-- <el-input v-model="details.name" placeholder="请输入返水等级名称" readonly></el-input> -->
                        <el-checkbox v-model="details.isChecked"></el-checkbox>
					</el-form-item>
				</el-col>
			</el-row>
            <el-row>
				<el-col :span="24">
					<el-form-item label="提示备注">
						<el-input v-model="details.remark" placeholder="请输入返水等级名称" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="备注原因">
						<el-input v-model="details.remark" :rows="8" placeholder="请输入返水等级名称" type="textarea" resize="none"></el-input>
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
