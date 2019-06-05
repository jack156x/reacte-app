<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<section>
				<el-form-item label="查询账号" class="seacrchAccount">
					<el-input class="w500" v-model="form.username" placeholder="请输入查询账号或者登录账号"></el-input>
				</el-form-item>
				<el-form-item label="金额类型" class="formMoneyType">
					<el-select class="w500" v-model="form.money_type" placeholder="请选择借贷类型">
						<el-option label="钱包" value="1"></el-option>
						<el-option label="银行" value="2"></el-option>
					</el-select>
				</el-form-item>
				<div class="clearfix"></div>
			</section>
			<el-form-item label="调整方向">
				<el-checkbox v-model="form.adju_dir" checked>加款</el-checkbox>
			</el-form-item>
			<el-form-item label="加款类型">
				<el-select v-model="form.action_type" placeholder="请选择借贷类型">
					<el-option v-bind:key="item.id" :label="item.name" :value="item.id"
						v-for="(item) in offpayTypeList"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="加款金额">
				<el-input class="inputWidth" type="number" v-model="form.action_money"></el-input>
			</el-form-item>
			<el-form-item class="inputWidth" label="优惠金额" v-show="discountedShow">
				<el-input type="number" v-model="form.discounted_money"></el-input>
			</el-form-item>
			<el-form-item label="理由">
				<el-input class="inputWidth" type="textarea" v-model="form.remark"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" :plain="true" @click="onSubmit">确认提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import {
		get,
		post
	} from "@/core";
	import {
		getWebsiteConfig
	} from "@/services/global";
	export default {
		name: "addandsubtract",
		data() {
			return {
				form: {
					username: "",
					adju_dir: 1,
					action_type: "",
					action_money: "",
					remark: "",
					money_type: '',
					discounted_money: 0
				},
				depostManTypeMap: [],
				discountedShow: false
			};
		},
		methods: {
			onSubmit() {
				if (this.form.adju_dir) {
					this.form.adju_dir = 1
				}
				get('member.memberInfo', {
					username: this.form.username
				}).then(
					res => {
						console.log(res)
						if (res.count != 0) {
							post('finance.additionSincere', {
								...this.form
							}).then(
								res => {
									this.$message({
									message: '提交成功！',
									type: 'success'
									});
								},
								err => {
									this.$message({
									message: '操作失败！',
									type: 'warning'
									});
								}
							)
						} else {
							this.$message.error('用户名不存在！');
						}
					},
					err => {
						this.$logger.error(res);
					})
			}
		},
		async created() {
			console.log(this.$store.getters["global/DEPOST_MAN_TYPE"])
		},
		computed: {
			offpayTypeList() {
				return this.$store.getters["global/DEPOST_MAN_TYPE"]
			},
		}
	};
</script>

<style lang="scss" scoped>
	.w500 {
		width: 500px;
	}

	.formMoneyType,
	.seacrchAccount {
		float: left;
	}

	.inputWidth {
		width: 66%;
	}

	.clearfix {
		clear: both;
	}
</style>
