/*登录页
* @Author: zzh0211@live.com
* @Date: 2019-05-21 10:04:51
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 11:43:09
*/
<template>
	<div class="login_wrapper">
		<div class="login">
			<div class="logo">
				<i class="fa fa-modx"></i>
				<h1>
					<span id="sysName">澳门永利彩票</span>管理平台登入
				</h1>
			</div>
			<ul class="bg-bubbles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<el-form :model="formLogin" class="form">
				<el-form-item>
					<el-input v-model="formLogin.username" placeholder="用户名/手机号/邮箱" class="inline-input">
						<i slot="suffix" style="cursor:pointer;" class="el-input__icon fa fa-user"></i>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="password" v-model="formLogin.password" placeholder="登陆密码" class="inline-input">
						<i slot="suffix" style="cursor:pointer;" class="el-input__icon fa fa-key"></i>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="formLogin.code" placeholder="授权密码" class="inline-input">
						<i slot="suffix" style="cursor:pointer;" class="el-input__icon fa fa-key"></i>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="toLogin">登陆</el-button>
					<span v-show="this.errorInfo.isShowError" class="error">{{this.errorInfo.text}}</span>
				</el-form-item>
			</el-form>
		</div>
		<!-- <p class="bei">v1.9.9.3162 澳门永利彩票荣誉出品</p> -->
	</div>
</template>
<script>
	import { toLogin } from '@/services/user'

	export default {
		data() {
			return {
				formLogin: {
					//表单对象
					username: 'kkkk1231',
					password: '123456xyz',
					code: '123456'
				},
				errorInfo: {
					text: '登陆失败,请重试',
					isShowError: false //显示错误提示
				}
			}
		},
		methods: {
			async toLogin() {
				const { token } = await toLogin(this.formLogin);
				sessionStorage.token = token;

				// 跳转到首页
				this.$router.push('/')
			}
		}
	}

</script>

<style lang="scss" scoped>
	$input_width: 100%;

	.login_wrapper {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #50a3a2;
		background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
		background: linear-gradient(to bottom right, #1abc9c 0%, #53e3a6 100%);
		opacity: 0.9;
		width: 100%;

		.form {
			background-color: #ebeff0;
			padding: 50px;
			border-radius: 5px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			border: 1px solid #eaeaea;
			box-shadow: 0 0 25px #cac6c6;
		}

		.login {
			max-width: 400px;
			margin-top: -150px;

			.logo {
				overflow: hidden;
				padding-bottom: 6px;
				padding-left: 65px;

				i {
					font-size: 35px;
					color: #fff;
					float: left;
					text-shadow: 4px 3px 0 #1d9d74, 80px 80px 0 rgba(0, 0, 0, 0.15);
				}

				h1 {
					padding-top: 2px;
					padding-left: 15px;
					float: left;
					font-size: 22px;
					font-weight: bold;
					color: #fff;
					text-shadow: 4px 3px 0 #1abc9c, 90px 80px 0 rgba(0, 0, 0, 0.15);

					span {
						font-size: 30px;
						font-weight: bold;
					}
				}
			}

			.title {
				text-align: center;
				color: #505458;
			}

			.el-form-item {
				background: #fff;
			}

			.el-form-item__content {
				width: $input_width;
			}

			.el-button {
				width: $input_width;
			}

			.el-form {
				.error {
					display: block;
					text-align: center;
					color: red;
				}
			}
		}

		.bg-bubbles {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;

			li:nth-child(1) {
				left: 10%;
			}

			li:nth-child(2) {
				left: 20%;
				width: 80px;
				height: 80px;
				-webkit-animation-delay: 2s;
				animation-delay: 2s;
				-webkit-animation-duration: 17s;
				animation-duration: 17s;
			}

			li:nth-child(3) {
				left: 25%;
				-webkit-animation-delay: 4s;
				animation-delay: 4s;
			}

			li:nth-child(4) {
				left: 40%;
				width: 60px;
				height: 60px;
				-webkit-animation-duration: 22s;
				animation-duration: 22s;
				background-color: rgba(255, 255, 255, 0.25);
			}

			li:nth-child(5) {
				left: 70%;
			}

			li:nth-child(6) {
				left: 80%;
				width: 120px;
				height: 120px;
				-webkit-animation-delay: 3s;
				animation-delay: 3s;
				background-color: rgba(255, 255, 255, 0.2);
			}

			li:nth-child(7) {
				left: 32%;
				width: 160px;
				height: 160px;
				-webkit-animation-delay: 7s;
				animation-delay: 7s;
			}

			li:nth-child(8) {
				left: 55%;
				width: 20px;
				height: 20px;
				-webkit-animation-delay: 15s;
				animation-delay: 15s;
				-webkit-animation-duration: 40s;
				animation-duration: 40s;
			}

			li:nth-child(9) {
				left: 25%;
				width: 10px;
				height: 10px;
				-webkit-animation-delay: 2s;
				animation-delay: 2s;
				-webkit-animation-duration: 40s;
				animation-duration: 40s;
				background-color: rgba(255, 255, 255, 0.3);
			}

			li:nth-child(10) {
				left: 90%;
				width: 160px;
				height: 160px;
				-webkit-animation-delay: 11s;
				animation-delay: 11s;
			}

			li {
				position: absolute;
				list-style: none;
				display: block;
				width: 40px;
				height: 40px;
				background-color: rgba(255, 255, 255, 0.15);
				bottom: -160px;
				-webkit-animation: square 25s infinite;
				animation: square 25s infinite;
				-webkit-transition-timing-function: linear;
				transition-timing-function: linear;
			}
		}
	}

	.bei {
		position: absolute;
		bottom: 20px;
		cursor: pointer;
		color: #505458;
	}

	@-webkit-keyframes square {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}

		100% {
			-webkit-transform: translateY(-700px) rotate(600deg);
			transform: translateY(-700px) rotate(600deg);
		}
	}

	@keyframes square {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}

		100% {
			-webkit-transform: translateY(-700px) rotate(600deg);
			transform: translateY(-700px) rotate(600deg);
		}
	}

</style>
