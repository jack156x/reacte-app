<template>
  <div>
    <div class="tabmenu">
      <ul class="tab">
        <li
          v-for="(tab,index) in tabList"
          @click="changeTab(tab)"
          :class="{on:tabIndex==index}"
          :key="index"
        >
          <a class="current gameAnn">{{tab.name}}</a>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabScomponent",
  props: {
    tabList: Array,
    tabIndex: Number
  },
  data() {
    return {};
  },
  methods: {
    changeTab: function(tab) {
      this.$emit("changeTab", tab);
    }
  }
};
</script>

<style scoped>
.tabmenu {
  border-bottom: 1px solid #93bdee;
  margin-top: 20px;
  height: 40px;
}
.tabmenu ul.tab {
  display: inline-block;
  margin-left: 20px;
  height: 38px;
  position: relative;
}
.tabmenu ul.tab li {
  display: inline-block;
  text-align: center;
  color: #808080;
  font-weight: bold;
  font-size: 15px;
  height: 38px;
  line-height: 38px;
  margin-right: 5px;
}
.tabmenu ul.tab li a {
  height: 38px;
  display: block;
  padding: 0 15px 0 15px;
  text-align: center;
  border: 1px solid #dbe3ef;
  border-bottom: 0 solid #fff;
  background: #fff;
  color: #808080;
  position: relative;
}
.rgeechar {
  margin-left: 20px;
  margin-top: 23px;
}
.btnalign {
  text-align: left;
  margin-top: 10px;
}
.history {
  border: 1px solid #d3d8dc;
  background: #f7f8f9;
  border-radius: 4px;
  padding: 10px 20px;
  margin-right: 20px;
  line-height: 30px;
}
.btnalign.btnalign:before,
.btnalign.btnalign:after {
  display: table;
  content: " ";
}
.daterangepickers {
  position: relative;
  display: inline-block;
  width: 100%;
}
.btnalign.btnalign button.btn {
  margin: 0;
  margin-left: 5px;
  padding: 5px 10px !important;
}

button.daterangepickers {
  width: auto;
}
.btnalign button {
  vertical-align: middle;
  margin-top: 3px;
}
.daterangepickers {
  position: relative;
  display: inline-block;
  width: 100%;
}
.history select {
  margin-top: 0;
  margin-left: 10px;
  margin-bottom: 0;
  height: 32px;
  vertical-align: top;
}
.btnalign.btnalign input.form-control {
  margin: 0;
  border: 1px solid #ddd;
}
.form-control {
  padding: 5px 12px;
}
select {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
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
.btnalign.btnalign button.btn {
  margin: 0;
  margin-left: 5px;
  padding: 5px 10px !important;
}
.btnalign button {
  vertical-align: middle;
  margin-top: 3px;
}
.btn-big {
  border-radius: 3px;
  text-align: center;
  font-family: "Microsoft YaHei";
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}
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
table > tbody > tr > td.no-content_wrap {
  text-align: center;
  padding: 50px 0 !important;
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
.tabmenu.tabmenu-2 {
  border: 0;
  margin-left: 20px;
  height: auto;
}
.tabmenu {
  border-bottom: 1px solid #93bdee;
  margin-top: 20px;
  height: 40px;
}
.tabmenu.tabmenu-2 .tab-2 li {
  display: inline-block;
  text-align: center;
  color: #808080;
  font-weight: bold;
  font-size: 15px;
  margin-right: 10px;
  position: relative;
}
.tabmenu.tabmenu-2 .tab-2 a.current.active {
  border: 2px solid transparent;
  color: #fff;
  display: block;
  background: #2772ee;
}
.tabmenu.tabmenu-2 .tab-2 a.current {
  border: 2px solid #eee;
  color: #fff;
  display: block;
  padding: 5px 10px;
  background: #fff;
  color: #808080;
}
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
.alldelete {
  width: 260px;
  display: inline-block;
}
.alldelete input {
  vertical-align: middle;
  margin-right: 5px;
}
.pagination-total > .alldelete span.show {
  display: inline !important;
  margin-left: 5px;
}
.pagination-total > .alldelete span {
  display: none;
}
.show {
  display: block !important;
}
.bdtop3 {
  margin: 20px;
  border: 1px solid #d3d8dc;
  padding: 10px;
  background: #f7f8f9;
  border-radius: 4px;
}
.clearfix:before,
.clearfix:after,
.row:before,
.row:after,
.control-group:before,
.control-group:after {
  display: table;
  content: " ";
}
.bdtop3 .col-sm-3 {
  line-height: 30px;
}
.bdtop3 .pull-left {
  margin: 0 5px 0 0;
}
.pull-left {
  float: left;
  margin-top: 3px;
}
.pull-left {
  float: left;
}
.pull-left select {
  height: 24px;
  vertical-align: initial;
  margin-top: 0;
  margin-bottom: 0;
}
.bdtop3 .col-sm-3 > .pull-left span.m-l-sm {
  max-width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0;
}
.dataTables_paginate.paging_simple_numbers {
  margin-top: 0;
}
div.dataTables_paginate > div input.min {
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
.pages.form-inline .btn-sm {
  height: 32px;
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
.pagination li.previous,
.pagination li.next {
  width: auto;
  max-width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pagination li {
  float: left;
  margin-right: 5px;
  width: 32px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 24px;
  text-align: center;
  display: block;
  border-radius: 2px;
}
.pagination li.current {
  border-color: #2772ee;
}
.pagination li.previous a,
.pagination li.next a {
  padding: 3px 5px;
  font-size: 0;
}
.pagination li a {
  color: #666;
  display: block;
  padding: 3px 0;
  background: #fff;
  border: 1px solid #ddd;
}
.pull-right {
  float: right;
}
.tabmenu ul.tab li.on a {
  border: 1px solid #93bdee;
  background: #fff;
  height: 40px;
  border-bottom: 0 solid #fff;
  color: #2772ee;
}
</style>