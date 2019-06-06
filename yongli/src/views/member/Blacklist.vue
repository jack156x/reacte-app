<template>
<div class="blackContent">
	<section class="member-info-wrapper mb-5">
		<el-input
            style="width: 270px"
            placeholder="请输入黑名单内容"
            v-model="bvalue"
            clearable>
            <el-button type="primary" @click="logPageSearch" slot="append" icon="el-icon-search"></el-button>
		</el-input>
	</section>
	<template>
		<el-table class="table" height="100%" :data="tableData" border style="width: 100%">
			<el-table-column prop="no" label="" width="60"></el-table-column>
			<el-table-column prop="btype" label="黑名单类型" width="180"></el-table-column>
			<el-table-column prop="bvalue" label="黑名单内容" width="180" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="enable" label="是否生效" width="100"></el-table-column>
			<el-table-column sortable prop="create_time" width="180" label="创建时间"></el-table-column>
			<el-table-column prop="remark" label="备注"></el-table-column>
		</el-table>
	<Pagination ref="pagination" :data="searchParams" url="member.blackList" @paging="pagingCallback"></Pagination>
  </template>
</div>
</template>

<script>
import Pagination from '@/components/Pagination'
	export default {
		name: 'member-Blacklist',
		data(){
			return {
				bvalue: '',
				searchParams: {},
				tableData: [],
			};
		},
		methods:{
			pagingCallback(results, response){
                this.tableData = results;
				this.$logger.log(this.tableData)
				this.tableData.forEach(function(v) {
					if(v.enable == 1) {
						v.enable = 'YES';
					}else {
						v.enable = 'NO';
					}
				})
                // results：返回的列表数据
                // response：请求接口返回的响应数据
                // do something...
			},
			logPageSearch() {
                this.searchParams = {
                    bvalue: this.bvalue
                }
                this.$logger.log(this.searchParams)
                this.$nextTick(()=>{
                    this.$refs.pagination.refresh(this.searchParams);
                });
            }
		},
		watch: {
			
		},
		async created(){
		},
		components: {
			Pagination
		}
	}
</script>


<style lang="scss">
.blackContent { 
	height: 100%;
	.table { 
		height: calc(100% - 81px);
	}
}
</style>
