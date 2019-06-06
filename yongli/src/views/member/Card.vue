<template>
<div class="cardContent">
	<section class="member-info-wrapper mb-5">
		<el-input
		    v-show="viewType!=='keyInfo'"
            style="width: 270px"
            placeholder="请输入银行卡号"
            v-model="bind_account"
            clearable>
			<el-button slot="append" icon="el-icon-search" @click="logPageSearch"></el-button>
        </el-input>
		<div v-show="viewType==='keyInfo'"></div>
		<el-button type="primary" icon="el-icon-plus" class="newcreated" @click="addMember(details.accountsecurity.realname)" v-if="viewType==='keyInfo'">新建</el-button>
        <el-button type="primary" icon="el-icon-refresh" @click="refreshTable" class="refreshBtn mr-10"></el-button>
		<div class="clearfix"></div>
	</section>
	<template>
		<section class="cardTable">
			<el-table class="table" height="100%" :data="tableData" border>
			<el-table-column prop="no" label="" width="50" align="center"></el-table-column>
			<el-table-column prop="id" label="查询账号" width="100" align="center"></el-table-column>
			<el-table-column prop="owner_name" label="会员姓名" width="100" align="center"></el-table-column>
			<el-table-column prop="bank_name" label="所属银行" width="180" align="center"></el-table-column>
			<el-table-column prop="bind_account" label="银行卡号" width="180" align="center"></el-table-column>
			<el-table-column prop="is_destroy" align="center" width="80" label="是否删除">
				<template slot-scope="scope">
					<i v-if="scope.row.is_destroy == 1" class="el-icon-success success"></i>
					<i v-else class="el-icon-error"></i>
				</template>
			</el-table-column>
			<el-table-column prop="bank_province,bank_subbranch" label="开户地址" width="100" :show-overflow-tooltip="true">
				<template slot-scope="scope">
					{{scope.row.bank_province}}{{scope.bank_subbranch}}
				</template>
			</el-table-column>
			<el-table-column prop="bind_date" label="创建时间"></el-table-column>
		</el-table>
		<Pagination ref="pagination" :data="searchParams" url="member.card" @paging="pagingCallback"></Pagination>
		<!-- 新增银行卡 -->
		<el-dialog custom-class="inDialog" :title="dialogTitle" :visible.sync="addMemberBank" v-dialogDrag width="630px" :modal-append-to-body='false' :append-to-body="true">
		  <addMemberBankDialog class="inbody" :cardDetails="currentDetails" @closeParentWindow="closeWindow"></addMemberBankDialog>
		</el-dialog>
	</section>
  </template>
</div>
</template>
<script>
import Pagination from '@/components/Pagination'
import addMemberBankDialog from "@/views/member/addMemberBankDialog"
	export default {
		name: 'member-card',
		props: {
			details: {
				type: Object,
				default: ()=> ({})
			},
			viewType: {
				type: String,
				default: 'card'
			}
		},
		data(){
			return {
				bind_account: '',
				searchParams: {
					bind_status:1,
					bind_type:2
				},
				tableData: [],
				addMemberBank: false,
				dialogTitleName: '',
				currentDetails: {}
			};
		},
		methods:{
			pagingCallback(results, response){
				this.$logger.log(this.details)
				this.tableData = results;
                // this.$logger.log(this.tableData)
                // results：返回的列表数据
                // response：请求接口返回的响应数据
                // do something...
			},
			logPageSearch() {
                this.searchParams = {
                    bind_account: this.bind_account,
                }
                this.$logger.log(this.searchParams)
                this.$nextTick(()=>{
                    this.$refs.pagination.refresh(this.searchParams);
                });
			},
			refreshTable() {
				this.$nextTick(() => {
					this.$refs.pagination.refresh()
				})
			},
			addMember(name) {
				this.dialogTitleName = name;
				if(this.details.accountsecurity.realname != '') {
					this.details.realname = name
					this.currentDetails = this.details;
					this.addMemberBank = true
				}else {
					this.$alert('<strong>请先绑定会员姓名!</strong>', '系统提示', {
					dangerouslyUseHTMLString: true
					});
				}
			},
			closeWindow(value) {
				this.addMemberBank = value;
			},
		},
		watch: {
			
		},
		async created(){
			this.bind_account = this.details.bind_account;
		},
		components: {
			Pagination,
			addMemberBankDialog
		},
		computed: {
			dialogTitle() {
				return `【${this.dialogTitleName}】银行卡新增`;
			}
		}
	}
</script>

<style lang="scss">
@import '@/styles/sass/variable.scss';
.success { color: $successColor; }
.cardContent {
	height: 100%;
	.cardTable { 
		height: calc(100% - 81px);
		.table { height: 100%;}
	}
	.refreshBtn,.newcreated { float: right; height: 30px; }
	.refreshBtn { margin-right: 10px; }
}
.clearfix { clear:both; }
</style>
