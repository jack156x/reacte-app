<template>
    <div>
            <div class="chart-table">
                <table border="0" cellpadding="0" cellspacing="0" class="table table-striped table-hover dataTable">
                <thead>
                    <tr>
                    <td colspan="7" class="none-p">
                        <div class="pagination-total">
                            <div class="alldelete">
                            <input type="checkbox" class="i-checks" value="on">
                            全选<span class="function-menu-show show"> <a title="删除" class="btn btn-outline btn-filter" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;deleteAdvisoryMessage&quot;,confirm:&quot;&quot;,text:&quot;删除&quot;,size:&quot;&quot; }"> 删除 </a> <a title="标记已读" class="btn btn-outline btn-filter" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;getSelectAdvisoryMessageIds&quot;,confirm:&quot;&quot;,text:&quot;标记已读&quot;,size:&quot;&quot; }"> 标记已读 </a> </span> </div>
                        </div>
                    </td>
                    </tr>
                        <tr>
                        <th width="6%"><input name="" type="checkbox" value=""></th>
                        <th width="11%" align="left" style="padding-left: 0">类型</th>
                        <th width="16%">提问标题</th>
                        <th width="20%">提交/追问时间</th>
                        <th width="21%">回复标题</th>
                        <th width="19%">最后回复时间</th>
                        <th width="7%">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="no-content_wrap" colspan="7"><div><i class="el-icon-warning"></i> 暂无内容!</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row bdtop3">
                <Pagination :total="total" :page.sync="page" :limit.sync="limit" @pagination="getpagelist"/>
            </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { pageList } from '@/services/getData'
    export default {
        data() {
            return {
                 total:0,     /*数据总条数*/
                page: 1,    /*默认显示第1页*/
                limit: 10,  /*限制显示的条数*/
            }
        },
         components: {
		   Pagination,
        },
         methods:{
            getpagelist(){
                var start = (this.page - 1) * this.limit;
                var end   = this.page * this.limit;
                pageList().then(res =>{
                    console.log(res)
                    debugger;
                })
            }
        }
    }
</script>

<style scoped>
.chart-table {
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid #d3d8dc;
    border-radius: 4px;
    margin-right: 20px;
    overflow-x: auto;
}
.chart-table .table {
    border: 0;
    border-radius: 4px;
}
.chart-table table {
    width: 100%;
}
.table {
    border: 1px solid #d3d3d3;
    border-radius: 4px;
}
.chart-table .table tr {
    border-bottom: 0;
}
.table tr {
    border-bottom: 1px solid #ececec;
}
.chart-table table.table tr td.none-p {
    padding: 0;
}
.chart-table .table td {
    border-bottom: 1px solid #ededed;
    border-right: 0;
    height: auto;
    line-height: normal;
    padding-left: 15px;
    padding-top: 10px;
}
.chart-table td {
    border-bottom: 1px solid #ededed;
    text-align: left;
    padding: 10px 0 8px 15px;
    white-space: nowrap;
}
.table td {
    border-bottom: 1px solid #ececec;
    border-right: 1px solid #ececec;
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
}
table tr td .pagination-total {
    margin: 0;
    border: 0;
    border-bottom: 1px solid #d3d8dc;
    padding: 10px 10px 10px 15px;
    background: #f7f8f9;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.pagination-total {
    margin: 20px;
    border: 1px solid #d3d8dc;
    padding: 10px;
    background: #f7f8f9;
    border-radius: 4px;
}
.alldelete {
    width: 260px;
    display: inline-block;
}
.alldelete input {
    vertical-align: middle;
    margin-right: 5px;
}
.pagination-total>.alldelete span.show {
    display: inline!important;
    margin-left: 5px;
}
.pagination-total>.alldelete span {
    display: none;
}
.show {
    display: block!important;
}
.btn-filter.btn-outline {
    color: #787e82;
    border-color: #d3d3d3;
}
.btn-filter.btn-outline {
    color: #a0aab2;
    border-color: #e6e9ee;
}
.btn-outline {
    color: inherit;
    background-color: #fff;
}
.btn-filter {
    background-color: #2772ee;
    color: #fff;
    display: inline-block;
    padding: 5px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    font-family: "Microsoft YaHei";
}
.btn-filter {
    background-color: #2095f2;
    color: #fff;
}
.btn-filter {
    font-family: 'Microsoft YaHei';
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #d3d8dc;
    color: #666;
}
.btn-filter.btn-outline {
    color: #787e82;
    border-color: #d3d3d3;
}
.btn-filter.btn-outline {
    color: #a0aab2;
    border-color: #e6e9ee;
}
.btn-outline {
    color: inherit;
    background-color: #fff;
}
.chart-table .table th {
    height: auto;
    background: #f0f4f7;
    line-height: 30px;
    color: #666;
    font-weight: 600;
}
.chart-table th {
    height: 37px;
    line-height: 37px;
    background: #f7f8f9;
    text-align: left;
    padding: 5px 0 5px 15px;
    white-space: nowrap;
}
.table th {
    height: 47px;
    background: #f0f4f7;
    line-height: 47px;
    color: #f88311;
    font-weight: normal;
}
.bdtop3 {
    margin: 20px;
    border: 1px solid #d3d8dc;
    padding: 10px;
    background: #f7f8f9;
    border-radius: 4px;
}
div.dataTables_paginate>div input.min {
    width: 32px;
    height: 30px;
    line-height: 24px;
    padding: 0;
    text-align: center;
    border: 1px solid #e5e6e7;
    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 0;
    vertical-align: bottom;
}
.btn-sm {
    border-radius: 2px;
    background: #fff;
    border: 1px solid #e5e6e7;
    color: #666;
    height: 25px;
    padding: 2px 5px;
    font-family: "Microsoft YaHei";
}
.m-l-sm {
    margin-left: 10px;
}
.chart-table tr:last-child td {
    border-bottom: 0;
}
.chart-table .table td {
    border-bottom: 1px solid #ededed;
    border-right: 0;
    height: auto;
    line-height: normal;
    padding-left: 15px;
    padding-top: 10px;
}
table>tbody>tr>td.no-content_wrap {
    text-align: center;
    padding: 50px 0!important;
    border-bottom: 0;
}
.chart-table td {
    border-bottom: 1px solid #ededed;
    text-align: left;
    padding: 10px 0 8px 15px;
    white-space: nowrap;
}
.table td {
    border-bottom: 1px solid #ececec;
    border-right: 1px solid #ececec;
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
}
</style>