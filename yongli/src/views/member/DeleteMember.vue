<template>
	<div>
		<el-form ref="form" :model="form" :rules="rules" label-width="80px">
			<el-form-item label="查询账号" prop="username">
				<el-input v-model="form.username" readonly></el-input>
			</el-form-item>
			<el-form-item label="会员姓名" prop="realname">
				<el-input v-model="form.realname" readonly></el-input>
			</el-form-item>
			<el-form-item label="备注" prop="remark">
				<el-input type="textarea" :rows="2" placeholder="请输入备注信息" v-model="form.remark"></el-input>
			</el-form-item>
			<el-form-item class="rightBtn">
				<el-button type="primary" @click="onSubmit">确认</el-button>
				<el-button type="danger" @click="close">关闭</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
    import { deleteMember } from "@/services/member";
	export default {
		name: 'deleteMember',
		props: {
			details: {
				type: Object,
				default: () => ({})
			},
		},
		data() {
			return {
				form: {
					username: '',
					realname:'',
					remark: ''
				},
				// 校验规则
				rules: {
					remark: [{
						required: true,
						message: '请输入备注',
						trigger: 'blur'
					}]
				}
			}
		},
		async created() {
			this.form.username = this.details.accountsecurity.username;
			this.form.realname = this.details.accountsecurity.realname;
		},
		methods: {
			onSubmit() {
				console.log(this.details)
				
				let params = {
					id: this.details.id,
				    is_destroy: 1,
					remark: this.form.remark
				}
				const _this = this
				deleteMember(this.details.id, params).then(res => {
					if (res) {
					this.$notify({
						title: '操作成功',
						message: res.detail,
						type: 'success'
					})
					_this.close();
					}
				})
			},
			close() {
				this.$emit('closeParentWindow', false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rightBtn {
        text-align: right;
        margin: 0;
	}
</style>