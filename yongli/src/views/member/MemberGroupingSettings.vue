<template>
	<div class="tableContent">
		<div style="overflow:hidden;">
			<el-input class="inputValueWidth" placeholder="会员组名" v-model="searchText" @keydown.enter.native="searchHandler">
				<el-button type="primary" slot="append" @click="searchHandler" icon="el-icon-search"></el-button>
			</el-input>
			<el-button type="primary" icon="el-icon-plus" class="newcreated" @click="viewGroupSetHandler()" v-if="isSet">新建</el-button>

			<el-button type="primary" icon="el-icon-plus" class="newcreated" @click="viewTransferHandler" v-if="isManage">批量转移</el-button>

			<el-button type="primary" icon="el-icon-refresh" class="newcreated" style="margin-right: 5px;" @click="refreshList"></el-button>
		</div>

		<section class="showTableList">
			<el-table :data="viewList" border tooltip-effect="light">
				<el-table-column prop="no" width="50" align="center"></el-table-column>
				<el-table-column prop="name" label="会员组名称"></el-table-column>

				<template v-if="isSet">
					<el-table-column prop="min_remittance_money" label="最低汇款金额"></el-table-column>
					<el-table-column prop="max_remittance_money" label="最高汇款金额"></el-table-column>
					<el-table-column prop="min_recharge_money" label="最低充值金额"></el-table-column>
					<el-table-column prop="min_withdrawal_money" label="最低取款金额"></el-table-column>
					<el-table-column prop="withdrawal_ratio" label="取款手续比例"></el-table-column>
					<el-table-column prop="withdrawal_admin_money" label="取款行政费用"></el-table-column>
					<el-table-column prop="withdrawal_free_times" label="取款免费次数"></el-table-column>
					<el-table-column prop="min_line_conversion" label="最低额度转换"></el-table-column>
					<el-table-column prop="max_red_packet" label="最高红包金额"></el-table-column>
					<el-table-column prop="max_line_conversion" label="最高额度转换"></el-table-column>
					<el-table-column prop="min_lottery_betting" label="最低彩票下注"></el-table-column>
					<el-table-column prop="max_lottery_betting" label="最高彩票下注"></el-table-column>
					<el-table-column prop="is_default" label="是否默认" align="center">
						<template slot-scope="scope">
							<el-link :class="scope.row.className" :type="scope.row.is_default==1?'primary':''" @click="setDefaultHandler(scope.row)"></el-link>
						</template>
					</el-table-column>

					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button type="text" @click="viewGroupSetHandler(scope.row)">修改</el-button>
							<!-- 默认分组不允许删除 -->
							<template v-if="scope.row.is_default===0">
								<el-divider direction="vertical"></el-divider>
								<el-button type="text" @click="deleteGroupHandler(scope.row)">删除</el-button>
							</template>
						</template>
					</el-table-column>
				</template>

				<template v-if="isManage">
					<el-table-column prop="user_total" label="会员总数"></el-table-column>
					<el-table-column prop="owner" label="绑定代理"></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button type="text" @click="viewBindAgentHandler(scope.row)">绑定代理</el-button>
							<el-divider direction="vertical"></el-divider>
							<el-button type="text" :disabled="!scope.row.owner" @click="viewUnbindAgentHandler(scope.row)">删除代理</el-button>
						</template>
					</el-table-column>
				</template>
			</el-table>
			<fe-pagination ref="pagination" :data="queryParams" url="member.accountgroup" @paging="pagingCallback"></fe-pagination>
		</section>

		<!-- 分组绑定代理-dialog -->
		<el-dialog :title="bindAgentDialogTitle" :visible.sync="bindAgentVisible" width="650px">
			<el-form ref="bindAgentForm" :model="$data" :rules="bindAgentRules" label-width="100px" @submit.native.prevent>
				<el-form-item label="代理账号" prop="agentName">
					<el-input v-model="agentName" placeholder="请输入代理账号"></el-input>
				</el-form-item>
			</el-form>

			<template slot="footer">
				<el-button type="primary" @click="bindAgentHandler">确认</el-button>
				<el-button type="danger" @click="bindAgentVisible=false">关闭</el-button>
			</template>
		</el-dialog>

		<!-- 解除绑定代理-dialog -->
		<el-dialog :title="unbindAgentDialogTitle" :visible.sync="unbindAgentVisible" width="500px">
			<GroupAgentUnbind :group="currentGroup" :key="unbindAgentKey" @unbinded="groupUnbindedHandler"></GroupAgentUnbind>
		</el-dialog>

		<!-- 新增会员组别、修改会员组别 -->
		<el-dialog :title="groupSetDialogTitle" :visible.sync="groupSetVisible">
			<GroupSet :details="currentGroup" :key="groupKey" @cancel="groupSetVisible=false" @updated="groupChangedHandler" @created="groupCreatedHandler"></GroupSet>
		</el-dialog>

		<!-- 批量转移会员组别-dialog -->
		<el-dialog title="批量转移会员组别" :visible.sync="groupTransfersVisible" width="1500px">
			<GroupTransfer :group-list="list" 
							@transfered="transferedHandler"
							@cancel="groupTransfersVisible=false" 
							:key="groupTransfersKey" 
							:style="dialogCss"></GroupTransfer>
		</el-dialog>
	</div>
</template>
<script>
	// 分组设置、创建分组
	import GroupSet from '@/views/member/GroupSet'
	// 代理解绑
	import GroupAgentUnbind from '@/views/member/GroupAgentUnbind'
	// 分组转移
	import GroupTransfer from '@/views/member/GroupTransfer'

	import { setDefaultGroup, deleteGroup, groupBindAgent } from '@/services/member'

	export default {
		name: 'member-grouping-settings',
		props: {
			props: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				searchText: '',
				queryParams: {},

				/**当前选中组别 */
				currentGroup: {},
				/**会员组别面板控制 */
				groupSetVisible: false,
				groupKey: '',

				agentName: '',
				/**绑定代理-dialog-visible */
				bindAgentVisible: false,
				/**绑定代理-form-rules */
				bindAgentRules: {
					agentName: [
						{
							required: true,
							message: '必须输入代理名称',
							trigger: 'blur',
						}
					],
				},

				/**解除绑定代理-dialog-visible */
				unbindAgentVisible: false,
				unbindAgentKey: '',

				/**批量转移会员-dialog-visible */
				groupTransfersVisible: false,
				groupTransfersKey: '',

				/**列表源数据 */
				list: [],
			}
		},
		computed: {
			// 分组设置
			isSet(){
				return this.props.type == 'set';
			},
			// 分组管理
			isManage(){
				return this.props.type == 'manage';
			},
			/**视图展示list数据 */
			viewList(){
				return this.list.map(v=>{
					return Object.assign({
						className: v.is_default === 0 ? 'el-icon-error' : 'el-icon-success',
					}, v);
				});
			},
			/**分组设置dialog标题 */
			groupSetDialogTitle(){
				return this.currentGroup == null ? '新增会员组别' : `修改【${ this.currentGroupName }】信息`;
			},
			/**绑定代理dialog标题 */
			bindAgentDialogTitle(){
				return `【${ this.currentGroupName }】分组绑定代理`
			},
			/**解除绑定代理dialog标题 */
			unbindAgentDialogTitle(){
				return `【${ this.currentGroupName }】分组删除代理`;
			},
			currentGroupName(){
				return this.currentGroup ? this.currentGroup.name : '';
			},
		},
		methods: {
			pagingCallback(results, response) {
				this.list = results;
			},
			/**刷新分页条 */
			refreshList(){
				this.$refs.pagination.refresh();
			},
			/**查询处理函数 */
			searchHandler() {
				this.queryParams = {
					name: this.searchText,
				};

				this.$nextTick(this.refreshList);
			},
			/**分组设置默认 */
			setDefaultHandler({ id, name, is_default }){
				if(is_default){
					this.$notify.warning({
						title: '提示',
						message: '已经是默认分组了，无需再设置',
					});
					return;
				}

				this.confirm(`您确认设置【${ name }】为默认分组？`, '确认提示', async()=>{
					// 执行默认
					await setDefaultGroup(id);

					this.$logger.log('默认组设置完成：', id, name);

					this.$notify.success({
						title: '提示',
						message: '设置成功!'
					});

					// 刷新列表数据
					this.refreshList();
				});
			},
			/**显示修改会员分组信息 */
			viewGroupSetHandler(group){
				this.currentGroup = group;
				this.groupSetVisible = true;
				this.groupKey = _.uniqueId();
			},
			/**分组信息修改完成后的回调 */
			groupChangedHandler(group){
				this.replaceGroup(group);
				// 隐藏面板
				this.groupSetVisible = false;
			},
			/**分组创建成功后 */
			groupCreatedHandler(){
				// 刷新列表
				this.refreshList();
				// 隐藏面板
				this.groupSetVisible = false;
			},
			/**删除成功 */
			deleteGroupHandler({ id, name }){
				this.confirm(`您确认要删除【${ name }】分组？`, '确认提示', async()=>{
					// 执行默认
					await deleteGroup(id);

					this.$logger.log('删除分组成功：', id, name);

					this.$notify.success({
						title: '提示',
						message: '删除成功!'
					});

					// 刷新列表数据
					this.refreshList();
				});
			},
			confirm(textName, title, callback) {
				this.$confirm(textName, title, {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					callback()
				}).catch(()=>{});
			},
			/**显示绑定代理-dialog */
			viewBindAgentHandler(group){
				this.currentGroup = group;
				this.bindAgentVisible = true;
			},
			/**执行绑定代理 */
			bindAgentHandler(){
				this.$refs.bindAgentForm.validate(async valid=>{
					if(valid){
						const result = await groupBindAgent(this.currentGroup.id, this.agentName);

						if(!result){
							this.$notify.error({
								title: '提示',
								message: '代理账号不存在，请检查后在尝试',
							});
							return;
						}

						// 隐藏面板
						this.bindAgentVisible = false;

						// 替换列表中的分组信息
						this.replaceGroup(result);

						this.$notify.success({
							title: '提示',
							message: '绑定代理成功',
						});

						this.$logger.log(this.agentName);
					}
				});
			},
			/**显示解除绑定代理-dialog */
			viewUnbindAgentHandler(group){
				this.currentGroup = group;
				this.unbindAgentVisible = true;
				this.unbindAgentKey = _.uniqueId();
			},
			/**显示会员转移-dialog */
			viewTransferHandler() {
				this.groupTransfersVisible = true;
			},
			/**分组解除绑定代理后 */
			groupUnbindedHandler(group){
				this.replaceGroup(group);
				// 隐藏面板
				this.unbindAgentVisible = false;
			},
			/**会员转移后的回调函数 */
			transferedHandler(){
				// 刷新列表数据
				this.refreshList();
				// 隐藏面板
				this.groupTransfersVisible = false;
			},
			/**替换列表中的分组信息 */
			replaceGroup(group){
				const idx = this.list.findIndex(v=>v.id==group.id);
				const oldGroup = this.list[idx];
				// 更新数据
				this.$set(this.list, idx, {...oldGroup, ...group});
			},
		},
		watch: {
			bindAgentVisible(visible){
				if(visible === false){
					// 重置表单
					this.$refs.bindAgentForm.resetFields();
				}
			},
			groupTransfersVisible(visible){
				if(visible === true){
					this.groupTransfersKey = _.uniqueId();
				}
			}
		},
		components: {
			GroupAgentUnbind,
			GroupSet,
			GroupTransfer,
		},
	}

</script>

<style lang="scss" scoped>
	.inputValueWidth {
		width: 270px;
		margin-left: 15px;
	}

	.tableContent {
		height: calc(100% - 54px);

		.showTableList {
			height: calc(100% - 67px);
		}

		.el-table {
			width: 100%;
			margin-top: 5px;
			height: 100%;
		}
	}

	.newcreated {
		float: right;
		text-align: center;
		color: #fff;
		// margin: 0 10px;
	}

</style>
