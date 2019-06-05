<template>
	<div>
		<el-form ref="form" :model="form" :rules="rules" label-width="80px">
			<section>
				<el-form-item label="会员姓名" prop="realname" style="float: left;">
					<el-input v-model="form.realname" placeholder="请输入会员姓名"></el-input>
				</el-form-item>
				<el-form-item label="开户银行" prop="bank_name" style="float: right;">
					<el-input v-model="form.bank_name" placeholder="请输入收款银行"></el-input>
				</el-form-item>
				<div class="clearfix"></div>
			</section>
			<el-form-item label="银行卡号" prop="bind_account">
				<el-input placeholder="请输入银行卡号" type="text" v-model="form.bind_account" @keyup.native="bindAccountValue" maxlength="23"></el-input>
			</el-form-item>
			<el-form-item label="银行地址" prop="bank_province">
				<el-input placeholder="请输入银行地址" v-model="form.bank_province"></el-input>
			</el-form-item>
			<el-form-item class="rightBtn">
				<el-button type="primary" @click="onSubmit">确认</el-button>
				<el-button type="danger" @click="close">关闭</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { addMemberBindAccount } from "@/services/member";
import { async } from 'q';
	export default {
        name: 'deleteMember',
        props: {
			cardDetails: {
				type: Object,
				default: () => ({})
			},
		},
		data() {
			return {
				form: {
					realname: '',
					bank_name: '',
					bind_account: '',
					bank_province: ''
				},
				// 校验规则
				rules: {
					realname: [{
						required: true,
						message: '请输入会员姓名',
						trigger: 'blur'
					}],
					bank_name: [{
						required: true,
						message: '请输入开户银行',
						trigger: 'blur'
					}],
					bind_account: [{
						required: true,
						inputPattern:/^[0-9]*[1-9][0-9]*$/,
						message: '请输入银行卡号',
						trigger: 'blur'
					}],
					bank_province: [{
						required: true,
						message: '请输入银行地址',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			onSubmit() {
				if(this.form.realname == ''|| this.form.bank_name == '' || this.form.bind_account == '' || this.form.bank_province == '') {
					this.$notify.error({
					title: '错误',
					message: '请输入必填项！'
					});
				}else {
					let params = {
					user: this.cardDetails.id,
                    realname: this.form.realname,
                    bank_name: this.form.bank_name,
                    bind_account: this.form.bind_account,
                    bank_province: this.form.bank_province
					}
					const _this = this
					addMemberBindAccount(params).then(res => {
						if (res) {
						this.$notify({
							title: '操作成功',
							message: res.detail,
							type: 'success'
						})
						_this.close();
						}
					})
				}
			},
			bindAccountValue(e) {
				if(this.form.bind_account.trim().replace(/[^\d]/g,'') != '') {
					var bindNum = this.form.bind_account.trim();
					//如果是删除按键，则什么都不做
					if (e.keyCode === 8) {
						this.form.bind_account = bindNum;
						return;
					}
		
					var len = bindNum.length;
					if (len === 4 || len === 9 || len === 14 || len === 19) {
						bindNum += ' ';
						this.form.bind_account = bindNum;
					}
				}else {
					this.form.bind_account = '';
				}
				console.log(this.form.bind_account.trim());
			},
			close() {
				this.$emit('closeParentWindow', false)
			}
        },
        async created() {
            console.log(this.cardDetails)
        }
	}
</script>

<style lang="scss" scoped>
	.rightBtn {
        text-align: right;
        margin: 0;
	}

	.clearfix {
		clear: both;
	}
</style>