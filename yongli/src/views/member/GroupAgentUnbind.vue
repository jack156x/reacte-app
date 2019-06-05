/*会员管理-会员分组-分组删除代理
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-23 17:41:53 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-04 16:46:04
 */
<template>
	<section class="member-group-agent-unbind-wrapper">
		<section class="main-pane">
			<el-form ref="form" label-width="100px" label-position="left">
				<el-form-item label="会员组别">
					<el-input :value="group.name" readonly></el-input>
				</el-form-item>
				<el-form-item label="代理账号">
					<el-input :value="group.owner" readonly></el-input>
				</el-form-item>
				<el-form-item label="代理姓名">
					<el-input :value="group.realname" readonly></el-input>
				</el-form-item>
				<el-form-item style="margin-bottom: 0;">
					<el-button style="float: right;" type="danger" @click="unbindHandler">解除绑定</el-button>
				</el-form-item>
			</el-form>
		</section>
	</section>
</template>

<script>
	import { groupBindAgent } from '@/services/member'

	export default {
		props: {
			/**会员分组信息 */
			group: {
				type: Object,
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			// 解除绑定代理处理函数
			unbindHandler(){
				this.$confirm('确定要解除此分组的代理吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async()=>{
					const data = await groupBindAgent(this.group.id, null);

					this.$notify.success({
						title: '提示',
						message: '操作成功！',
					});

					this.$logger.log(data);

					this.$emit('unbinded', data);
				}).catch(()=>{});
			},
		},
	}

</script>

<style lang="scss">
	.member-group-agent-unbind-wrapper{
		display: flex;
		align-items: stretch;
		
		.main-pane{
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			overflow: auto;
		}
	}
</style>
