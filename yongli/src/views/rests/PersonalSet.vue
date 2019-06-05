<template>
	<section class="personal-set-wrapper">
		<el-form label-width="100px" label-position="left">
			<el-row>
				<el-col>
					<el-form-item label="账户">
						<el-input v-model="userInfo.username" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col>
					<el-form-item label="姓名">
						<el-input v-model="userInfo.realname" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col>
					<el-form-item label="创建时间">
						<el-input v-model="userInfo.date_joined" readonly></el-input>
					</el-form-item>
				</el-col>
			</el-row>

			<!-- 分割线 -->
			<el-divider content-position="left">修改密码</el-divider>
		</el-form>

		<el-form ref="form" :model="formData" :rules="rules" label-width="100px" label-position="left">
			<el-row>
				<el-col>
					<el-form-item label="旧密码" prop="pwd">
						<el-input v-model="formData.pwd" type="password"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col>
					<el-form-item label="新密码" prop="newPwd">
						<el-input v-model="formData.newPwd" type="password"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col>
					<el-form-item label="确认新密码" prop="againPwd">
						<el-input v-model="formData.againPwd" type="password"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item>
						<el-button type="primary" class="iconfont icon-save" @click="updateHandler">确认修改</el-button>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</section>
</template>

<script>
	import { updatePwd } from '@/services/user'

	export default{
		data() {
			/**通用密码规则 */
			const genRules = (label)=>{
				return [
					{
						required: true,
						message: '请输入' + label,
						trigger: 'blur',
					},
					{
						min: 6,
						max: 20,
						message: '长度在 6 到 20 个字符',
						trigger: 'blur'
					}
				]
			};

			/**验证密码格式 */
			const validatePwd = (rule, value, callback)=>{
				if(/^[a-zA-Z0-9!@#$%^&*()_+]+$/g.test(value)){
					callback();
				}else{
					callback(new Error('密码格式不正确'));
				}
			};

			/**验证确认密码 */
			const validateAgainPwd = (rule, value, callback)=>{
				if(value !== this.formData.newPwd){
					callback(new Error('两次输入密码不一致!'));
				}else{
					callback();
				}
			};

			return {
				rules: {
					pwd: genRules('旧密码'),
					newPwd: [
						...genRules('新密码'),
						{
							validator: validatePwd,
							trigger: 'blur',
						}
					],
					againPwd: [
						...genRules('确认密码'),
						{
							validator: validateAgainPwd,
							trigger: 'blur',
						}
					],
				},
				formData: {
					pwd: '',
					newPwd: '',
					againPwd: '',
				},
			};
		},
		methods: {
			updateHandler(){
				this.$refs.form.validate(async valid=>{
					if(valid){
						const { success, message } = await updatePwd({
							password: this.formData.pwd,
							password_new: this.formData.newPwd,
						});

						if(!success){
							this.$notify.error({
								title: '提示',
								message,
							});
						}else{
							this.$notify.success({
								title: '提示',
								message,
							});
						}
					}
				});
			},
		},
		computed: {
			userInfo(){
				return this.$store.getters.userInfo;
			}
		},
	}
</script>

<style lang="scss">
	.personal-set-wrapper{
		.el-form{
			padding-left: 20px;

			.el-input{
				width: 400px;
			}

			.el-button{
				span{
					margin-left: 5px;
				}
			}
			
			// 重写分割线样式
			.el-divider{
				.el-divider__text{
					background-color: transparent;
					font-weight: bold;
				}
			}
		}
	}
</style>
