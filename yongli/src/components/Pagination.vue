/*公用分页条
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 18:10:42 
 * @Last Modified by: mikey.glmay
 * @Last Modified time: 2019-05-27 18:28:02
 */
<template>
	<el-pagination
		class="mt-10"
		@current-change="pageNumChange" 
		@size-change="pageSizeChange"
		:current-page="currentPageNum"
		:page-sizes="pageSizes"
		:page-size="currentPageSize"
		:layout="layout"
		:total="totalCount">
	</el-pagination>
</template>

<script>
	import { get } from "@/core";
	import { pagination } from '@/config/global'

	export default {
		name: 'fe-pagination',
		props: {
			/**请求地址 */
			url: {
				type: String,
				required: true,
			},
			/**当前页 */
			currentPage: {
				type: Number,
				default: 1,
			},
			/**每页条数 */
			pageSize: {
				type: Number,
				default: 20,
			},
			pageSizes: {
				type: Array,
				default: ()=>pagination.pageSizes,
			},
			/**布局 */
			layout: {
				type: String,
				default: 'sizes, total, prev, pager, next, jumper',
			},
			data: {
				type: Object,
				default: ()=>({}),
			}
		},
		data(){
			return {
				/** 总条数 */
				totalCount: 0,
				/**组件内当前页码 */
				currentPageNum: 0,
				/**组件内每页条数 */
				currentPageSize: 0,
			};
		},
		methods: {
			pageSizeChange(size){
				// 更新每页条数
				this.currentPageSize = size;
				this.$emit('size-change', size);
				this.emitPaging();
			},
			pageNumChange(page){
				// 更新页码
				this.currentPageNum = page;
				this.$emit('size-change', page);
				this.emitPaging();
			},
			/**
			 * 获取远程列表数据
			 */
			async fetchList(){
				// 获取分页相关全局配置项
				const {
					field_pageSize,
					field_pageNum,
					field_totalCount,
					field_results,
				} = pagination;

				// 获取远程数据
				const res = await get(this.url, {
					[field_pageSize]: this.currentPageSize,
					[field_pageNum]: this.currentPageNum,
					// 将传入的data合并到请求参数中
					...this.data,
				});

				const { 
					[field_totalCount]: count,
					[field_results]: results,
				} = res;

				// 更新总条数
				this.totalCount = count;

				return { results,  raw: res };
			},
			/**通知回调 */
			async emitPaging(){
				const { results, raw } = await this.fetchList();
				
				// 列表数据添加序号字段
				let noStart = this.currentPageSize * (this.currentPageNum -1);
				for (const item of results) {
					item.no = ++noStart;
				}

				this.$emit('paging', results, raw);
			},
			/**
			 * 暴露外部调用的刷新方法
			 */
			refresh(){
				this.emitPaging();
			},
		},
		created(){
			this.currentPageNum = this.currentPage;
			this.currentPageSize = this.pageSize;
			
			this.emitPaging();
		}
	}
</script>

<style lang="scss">

</style>
