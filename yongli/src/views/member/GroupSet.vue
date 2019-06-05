/*会员分组设置
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-23 14:18:42 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-04 10:37:21
 */
<template>
	<section class="member-group-set-wrapper">
		<el-form ref="form" :model="group" :rules="rules" label-width="100px">
			<!-- 创建数据时，才显示此提示 -->
			<el-row v-if="isCreate">
				<el-col :span="24" class="tips-row">
					<el-form-item label="批量新建规则">
						<el-input readonly value="新建多条数据时，多个会员分组名称之间请以‘ | ’隔开。如：普通会员组|VIP会员组"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
					<el-form-item label="会员组名" prop="name">
						<el-input v-model="group.name" placeholder="请输入返水等级名称"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="gutterSize">
				<el-col :span="12">
					<el-form-item label="最低汇款金额">
						<el-input-number v-model="group.min_remittance_money" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="最高汇款金额">
						<el-input-number v-model="group.max_remittance_money" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="gutterSize">
				<el-col :span="12">
					<el-form-item label="最低取款金额">
						<el-input-number v-model="group.min_withdrawal_money" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="取款行政费用">
						<el-input-number v-model="group.withdrawal_admin_money" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="gutterSize">
				<el-col :span="12">
					<el-form-item label="取款手续比例">
						<el-input-number v-model="group.withdrawal_ratio" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="免费取款次数">
						<el-input-number v-model="group.withdrawal_free_times" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="gutterSize">
				<el-col :span="12">
					<el-form-item label="最低额度转换">
						<el-input-number v-model="group.min_line_conversion" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="最高额度转换">
						<el-input-number v-model="group.max_line_conversion" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="gutterSize">
				<el-col :span="12">
					<el-form-item label="最低彩票下注">
						<el-input-number v-model="group.min_lottery_betting" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="最高彩票下注">
						<el-input-number v-model="group.max_lottery_betting" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="gutterSize">
				<el-col :span="12">
					<el-form-item label="最低充值金额">
						<el-input-number v-model="group.min_recharge_money" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="最高红包余额">
						<el-input-number v-model="group.max_red_packet" :min="0" :max="10" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24" class="button-group">
					<el-button type="success" @click="okHandler">确认</el-button>
					<el-button type="danger" @click="$emit('cancel')">关闭</el-button>
				</el-col>
			</el-row>
		</el-form>
	</section>
</template>

<script>
	import { modifyGroup, addGroup } from '@/services/member'

	export default {
		props: {
			/**修改传对象，添加传空 */
			details: {
				required: true,
			},
		},
		data() {
			return {
				/**布局间隙 */
				gutterSize: 40,
				rules: {
					name: [
						{
							required: true,
							message: '必须输入分组名称',
							trigger: 'blur',
						}
					],
				},
				/**分组信息 */
				group: {},
			};
		},
		methods: {
			/**确定按钮回调 */
			okHandler(){
				this.$refs.form.validate(async valid=>{
					if(valid){
						if(this.isCreate){
							const data = await addGroup(this.group);

							this.$logger.log(data);

							this.$emit('created', data);
						}else{
							const data = await modifyGroup(this.group);
	
							this.$logger.log(data);
							
							this.$emit('updated', data);
						}

						this.$notify.success({
							title: '提示',
							message: '操作成功！',
						});
					}
				});
			},
		},
		created(){
			// 修改从props.details获取，添加给默认值
			this.group = JSON.parse(JSON.stringify(this.details || {
				name: '',
				is_default: 0,
				min_remittance_money: 0,
				max_remittance_money: 0,
				min_recharge_money: 0,
				min_withdrawal_money: 0,
				withdrawal_ratio: 0,
				withdrawal_admin_money: 0,
				withdrawal_free_times: 0,
				min_line_conversion: 0,
				max_line_conversion: 0,
				max_red_packet: 0,
				min_lottery_betting: 0,
				max_lottery_betting: 0,
			}));
		},
		computed: {
			/**是否为创建模式 */
			isCreate(){
				return !this.details;
			},
		},
	}

</script>

<style lang="scss">
	.member-group-set-wrapper{
		.tips-row{
			.el-form-item__label,
			.el-input__inner{
				color: #f40;
			}
			.el-input__inner:focus,
			.el-input__inner:hover{
				border-color: #DCDFE6;
			}
		}
		.el-input-number{
			width: 100%;
		}

		.button-group{
			text-align: right;
		}
	}
</style>
