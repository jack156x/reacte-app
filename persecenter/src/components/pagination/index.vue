<template>
  <el-pagination
    @current-change="pageNumChange"
    @size-change="pageSizeChange"
    :current-page="currentPageNum"
    :page-sizes="pageSizes"
    :page-size="currentPageSize"
    :layout="layout"
    :total="totalCount"
  ></el-pagination>
</template>

<script>
import http from "@/utils/fetch";
import { pagination } from "@/config/global";
export default {
  props: {
    layout: {
      type: String,
      default: "sizes, total, prev, pager, next, jumper"
    },
    pageSizes: {
      type: Array,
      default: () => pagination.pageSizes
    },
    pageSize: {
      type: Number,
      default: 20
    },
    currentPage: {
      type: Number,
      default: 1
    },
    url: {
      type: String,
      required: true,
      default: ""
    },
    totlal: {
      type: Number,
      default: 0
    },
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      /** 总条数 */
      totalCount: 0,
      /**组件内当前页码 */
      currentPageNum: 1,
      /**组件内每页条数 */
      currentPageSize: 20
    };
  },
  methods: {
    pageSizeChange(size) {
      this.currentPageSize = size;
      this.currentPageNum = 1;
      this.$emit("size-change", size);
      this.emitPaging();
    },
    pageNumChange(pageNumber) {
      this.currentPageNum = pageNumber;
      this.$emit("current-page", pageNumber);
      this.emitPaging();
    },
    //当页数或者条数改变的时候去获取列表
    async fetchList() {
      const {
        field_pageSize,
        field_pageNum,
        field_totalCount,
        field_results,
        data
      } = pagination;
      return http
        .get(this.url, {
          [field_pageSize]: this.currentPageSize,
          [field_pageNum]: this.currentPageNum,
          ...this.data
        })
        .then(
          res => {
            this.$logger.log(res);
            const { [field_totalCount]: count, [field_results]: results } = res;
            this.totalCount = res.count;
            return { results, raw: res };
          },
          err => {
            this.$logger.error(res);
          }
        );
    },
    //通知父组件进行回调
    async emitPaging() {
      const { results, raw } = await this.fetchList();
      this.$emit("paging", results, raw);
    }
  },
  async created() {
    this.$logger.log(this);
    this.currentPageNum = this.currentPage;
    this.currentPageSize = this.pageSize;
    this.totalCount = this.totlal;
    this.emitPaging();
  }
};
</script>
