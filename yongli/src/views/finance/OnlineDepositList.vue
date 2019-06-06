<template>
    <div class="content">
        <section style="display:flex;">
            <el-select class="w100" v-model="status" clearable placeholder="订单状态">
                <el-option
                v-for="item in orderStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-date-picker
            v-model="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetimerange"
            range-separator="至"
            start-placeholder="请输入起始时间"
            end-placeholder="时间结束"
            align="right"
            class="date ml-5"
            ></el-date-picker>
            <el-input placeholder="请输入搜索条件" v-model="conditions" class="input-with-select w380 ml-5">
                <el-select class="w100" v-model="account" slot="prepend" placeholder="请选择">
                    <el-option label="查询账号" value="username"></el-option>
                    <el-option label="存款单号" value="order_num"></el-option>
                    <el-option label="支付接口名称" value="pay_type"></el-option>
                    <el-option label="登录账号" value="account_user"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"  @click="logPageSearch"></el-button>
            </el-input>
        </section>

        <section class="listContent mt-5">
            <el-table :data="tableData" border class="table" height="100%">
                <el-table-column prop="no" width="50px"></el-table-column>
                <el-table-column prop="username" label="查询账号" width="180" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                        <el-link class="iconfont icon-fangdajing text_pad" @click="onLinedialogTable(scope.row.username)" style="color:#1ABC9C;"></el-link>
						<span class="account_text">{{ scope.row.username}}</span>
					</template>
                </el-table-column>
                <el-table-column prop="username" label="会员姓名" width="180" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="deposit_type" label="存款类型"></el-table-column>
                <el-table-column prop="order_num" label="存款单号" width="180" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="real_money" label="存款金额"></el-table-column>
                <el-table-column prop="discount_money" label="优惠金额"></el-table-column>
                <el-table-column prop="fees" label="存款手续费"></el-table-column>
                <el-table-column prop="create_time" label="存款时间" width="180" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="status" label="存款状态"></el-table-column>
                <el-table-column prop="pay_type" label="支付接口名称" width="150" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="operate_name" label="操作账号"></el-table-column>
                <el-table-column prop="id " label="操作" width="140px">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">订单详情</el-button>
                        <el-button v-if="viewType === 'userConfirm'" @click="confirmClick(scope.row)" type="text" size="small">人工确认</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <Pagination ref="pagination" :data="searchParams" :url="defaultUrl" @paging="pagingCallback"></Pagination>

             <!-- 订单详情 -->
            <el-dialog :title="detailDialogTitle" :visible.sync="detailDialogVisible" width="670px" @closed="currentDetails={}">
                <indentDetails :details="currentDetails"></indentDetails>
            </el-dialog>
            <!-- 订单审核 -->
            <el-dialog :title="depositAuditTitle" :visible.sync="depositAuditVisible" width="670px" @closed="currentDetails={}">
                <DepositAuditDetails :details="currentDetails"></DepositAuditDetails>
            </el-dialog>
            <!-- 账号详情 -->
			<el-dialog :title="dialogTitle" :visible.sync="onlineDialogVisible" width="670px"
				@closed="currentDetails={}">
				<onLineFormDetails :FormData="formValue" :readonly="readonly"></onLineFormDetails>
			</el-dialog>
        </section>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import onLineFormDetails from '@/views/member/MemberInfoDetail'
import indentDetails from '@/views/finance/OrderDetails';
import DepositAuditDetails from '@/views/finance/WithdrawAudit'
    export default {
        props: {
            viewType: {
                type: String,
                required: true,
            },
            depositTypeUrl: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                tableData: [],
                orderStatus:[
                    {
                    label: '待支付',
                    value: '0'
                    },
                    {
                        label: '成功',
                        value: '1'
                    },
                    {
                        label: '失败',
                        value: '2'
                    }
                ],
                TimeType: [
                    {
                        label: '登录时间',
                        value: '1'
                    },
                    {
                        label: '审核时间',
                        value: '2'
                    }
                ],
                datetime: '',
                time: '',
                searchParams: {},
                status: '',
                account:'',
                conditions: '',
                defaultUrl: 'finance.onlinedeposits',
                currentDetails: {},
                formValue: {},
                readonly: true,
                detailDialogVisible: false,
                onlineDialogVisible: false,
                depositAuditVisible: false
            }
        },
        watch: {
			datetime() {
				if(this.datetime === null) {
					this.datetime = [];
				}
			}
		},
        async created() {
            this.$logger.log(this.viewType)
            this.$logger.log(this.depositTypeUrl)
            this.defaultUrl = this.depositTypeUrl;
            this.viewType == 'OnlineDepositType'? this.searchParams={}: this.searchParams={status: 0}
            this.account = 'username';
        },
        components: {
            Pagination,
            indentDetails,
            onLineFormDetails,
            DepositAuditDetails
        },
        methods: {
            logPageSearch() {
                this.searchParams = {
                    status: this.status,
                    start_date: this.datetime[0],
                    end_date: this.datetime[1],
                    [this.account]: this.conditions
                }
                this.$logger.log(this.searchParams)
                this.$nextTick(()=>{
                    this.$refs.pagination.refresh(this.searchParams);
                });
            },
            pagingCallback(results, response){
                this.tableData = results;
                this.$logger.log(this.tableData)
                this.tableData.forEach(function(v) {
                    if(v.deposit_type == 0) {
                        v.deposit_type = '微信支付';
                    }
                    if(v.deposit_type == 1) {
                        v.deposit_type = '支付宝'
                    }
                    if(v.deposit_type == 2) {
                        v.deposit_type = '银联支付'
                    }
                    if(v.deposit_type == 2) {
                        v.deposit_type = '京东支付'
                    }
                    if(v.status == 0) {
                        v.status = '待支付'
                    }
                    if(v.status == 1) {
                        v.status = '成功'
                    }
                    if(v.status == 2) {
                        v.status = '失败'
                    }
                })
                // results：返回的列表数据
                // response：请求接口返回的响应数据
                // do something...
            },
            handleClick(data) {
               this.currentDetails = data;
			   this.detailDialogVisible = true;
            },
            onLinedialogTable(name) {
                this.formValue = name;
				this.$logger.log(this.formValue);
				this.onlineDialogVisible = true;
            },
            confirmClick(data) {
               this.currentDetails = data;
			   this.depositAuditVisible = true;
            },
        },
        computed: {
            detailDialogTitle(){
				return `【${this.currentDetails.username}】会员订单详情`;
            },
            dialogTitle() {
				return `【${this.formValue}】会员信息`;
            },
            depositAuditTitle() {
                return `【${this.currentDetails.name}】会员在线存款审核`
            }
        }
    }
</script>

<style lang="scss" scoped>
$color: rgb(26, 188, 156);
.w380 { width: 380px; }
.w100 { width: 100px; }
.iconfontLine::after {
		content: '|';
	}

.text_pad {
    padding: 0 5px;
}
.content { 
    height: 100%; 
    .listContent { 
        height: calc(100% - 81px);
    }
    .table {
        width: 100%; height: 100%;
    }
}
.inputValueWidth { width: 200px;}
.search-icon { background-color: $color; border-color: $color; }
.radioStyle.is-active{ color: #FFF; background-color: $color!important; border-color: $color; -webkit-box-shadow: -1px 0 0 0 $color; box-shadow: -1px 0 0 0 $color;}
</style>