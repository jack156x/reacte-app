<template>
	<div>
		<el-form ref="form" :model="form" :rules="rules" label-width="80px">
			<el-form-item label="会员姓名" prop="realname">
				<el-input v-model="form.realname"></el-input>
			</el-form-item>
			<el-form-item class="textRight">
				<el-button type="primary" @click="onSubmit">确认</el-button>
				<el-button type="danger" @click="close">关闭</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import { modifyMember } from '@/services/member'
	export default {
		props: {
			details: {
				type: Object,
				default: () => ({})
			},
		},
		data() {
			return {
				form: {
					realname: ''
				},
				// 校验规则
				rules: {
					realname: [{
						required: true,
						message: '请输入会员姓名',
						trigger: 'blur'
					}]
				}
			}
		},
		async created() {
			this.form.realname = this.details.accountsecurity.realname;
		},
		methods: {
			close() {
				this.$emit('closeParentWindow', false)
			},
			onSubmit() {
				let params = {
					user_id: this.details.id,
					realname: this.form.realname
				}
				const _this = this
				modifyMember(params).then(res => {
					if (res) {
					this.$notify({
						title: '修改成功',
						message: res.detail,
						type: 'success'
					})
					_this.close();
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.textRight {
        text-align: right;
        margin: 0;
	}
</style>