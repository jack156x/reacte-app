/*会员返水设置
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 11:58:55 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-28 17:22:53
 */
<template>
	<section class="rakeback-settings-wrapper" style="flex-direction: row;">
		<section class="side-pane">
			<!-- 左侧扁平按钮组 -->
			<!-- <FlatButtonGroup :props="{label: 'label'}" :options="data" @change="changeHandler"></FlatButtonGroup> -->

			<el-tree ref="tree" :data="data" icon-class="a" :highlight-current="true" @node-click="changeHandler">
				<template slot-scope="scope">
					<span :class="scope.data.children?'el-icon-folder-opened':'el-icon-document'">{{scope.data.label}}</span>
				</template>
			</el-tree>
		</section>
		<section class="separator"></section>
		<section class="main-pane">
			<section class="operate-group">
				<el-input placeholder="返水等级名称" v-model="gradeName" class="input-with-select">
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
				<!-- 右侧按钮 -->
				<el-button-group class="float-right">
					<el-button type="primary" icon="el-icon-refresh"></el-button>
					<el-button type="primary" @click="rebateSetting">
						<i class="fa fa-plus"></i>
						会员返佣设置
					</el-button>
				</el-button-group>
			</section>
			<section class="table-group">
				<el-table :data="list" style="width: 100%" border height="0">
					<el-table-column prop="no" width="180"></el-table-column>
					<el-table-column prop="id" label="返水等级名称" width="180"></el-table-column>
					<el-table-column prop="id" label="有效投注上限" width="180"></el-table-column>
					<el-table-column prop="id" label="有效投注下限" width="180"></el-table-column>
					<el-table-column prop="id" label="返佣比例" width="180"></el-table-column>
					<el-table-column prop="id" label="是否启用" width="180"></el-table-column>
					<el-table-column prop="id" label="会员分组" width="180"></el-table-column>
					<el-table-column prop="id" label="修改时间" width="180"></el-table-column>
				</el-table>
				<Pagination url="finance.onlinedeposits" :data="{}" @paging="pagingCallback"></Pagination>
			</section>
		</section>

		<!-- 会员返佣设置-弹出面板 -->
		<el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="670px">
			<el-form :inline="false" ref="form" :model="gameInfo" label-width="100px">
				<el-row>
					<el-col :span="24">
						<el-form-item label="返水等级名称">
							<el-input v-model="gameInfo.gradeName" placeholder="请输入返水等级名称"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-form-item label="所属组别">
							<el-select v-model="gameInfo.group" placeholder="请选择组别">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="有效投注上限">
							<el-input v-model="gameInfo.gradeName" placeholder="请输入返水等级名称"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="有效投注下限">
							<el-input v-model="gameInfo.gradeName" placeholder="请输入返水等级名称"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="返佣比例">
							<el-input v-model="gameInfo.gradeName" placeholder="请输入返水等级名称"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="是否有效">
							<el-checkbox>有效</el-checkbox>
						</el-form-item>
					</el-col>
				</el-row>
				
			</el-form>

			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				<el-button @click="dialogVisible = false">取 消</el-button>
			</span>
		</el-dialog>
	</section>
</template>

<script>
	import FlatButtonGroup from '@/components/FlatButtonGroup'
	import Pagination from '@/components/Pagination'

	export default {
		data() {
			return {
				/**返水等级名称 */
				gradeName: '',
				/**当前选中游戏类型 */
				currentGame: '',

				dialogVisible: false,

				gameInfo: {
					gradeName: '',
					group: '',

				},

				data: [{
					label: '皇冠体育',
				}, {
					label: '真人视讯',
				}, {
					label: '电子游艺',
				}, {
					label: '棋牌游戏',
				}, {
					label: '电子竞技',
				}],
				/**列表数据 */
				list: []
			};
		},
		methods: {
			changeHandler(data, node, tree){
				this.$logger.log(data, node);
				
				// 记录选中项
				this.currentGame = this.currentGame == data ? '' : data;
				// 切换高亮选中状态
				this.currentGame || (node.isCurrent = '');
			},
			rebateSetting(){
				if(!this.currentGame){
					this.$notify({
						title: '系统提示',
						message: '请在左侧游戏类型列表中选择游戏类型后，再进行会员返佣设置。',
						type: 'warning'
					});
					return;
				}

				this.dialogVisible = true;
			},
			pagingCallback(list){
				this.list = list;
			},
		},
		computed: {
			dialogTitle(){
				if(!this.currentGame){
					return '';
				}

				return `【${ this.currentGame.label }】会员返佣设置`
			},
			tree(){
				return this.$refs.tree;
			},
		},
		components: {
			FlatButtonGroup,
			Pagination,
		},
	}

</script>

<style lang="scss">
	.rakeback-settings-wrapper{
		display: flex;
		align-items: stretch;

		.side-pane{
			width: 200px;
			margin: 0px;
			padding: 0px;
			border: 1px solid rgb(221, 221, 221);
			overflow: auto;
			visibility: visible;
		}
		.separator{
			width: 7px;
		}
		// 右侧主内容区
		.main-pane{
			padding: 0px;
			border: 1px solid rgb(221, 221, 221);
			visibility: visible;
			flex: 1;
			flex-direction: column;
			overflow: auto;
			display: flex;

			.operate-group{
				padding: 10px;

				.input-with-select{
					width: 200px;
				}

				.float-right{
					float: right;
				}
			}
			
			.table-group{
				display: flex;
				flex-direction: column;
				flex: 1;
			}

		}
	}
</style>
