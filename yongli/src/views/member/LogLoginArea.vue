<template>
  <div class="echarts">
    <section class="mb-5" style="display: flex;">
        <el-date-picker v-model="datetime" value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange" :picker-options="pickerOptions2"
            range-separator="至" start-placeholder="时间起始" end-placeholder="时间结束" align="right" class="date square-right">
        </el-date-picker>
        <el-button slot="append" icon="el-icon-search" @click="logPageSearch" class="search-icon"></el-button>
        <el-button class="ml-5" type="primary" @click="mapClick">地图按钮</el-button>
        <el-button class="ml-5" type="primary"  @click="showTableClick">表格按钮</el-button>
    </section>
    <section class="tableBox" v-show="isShowTable">
        <el-table height="100%" :data="tableData" border>
            <el-table-column prop="no" label="" width="80"></el-table-column>
            <el-table-column prop="login_province" label="省份" width="180"></el-table-column>
            <el-table-column prop="user_num" label="人数">
                <template slot-scope="scope">
                    {{ scope.row.user_num }}
                    <el-link class="el-icon-search" @click="memberNumsList(scope.row)"></el-link>
                </template>
            </el-table-column>
        </el-table>
        <Pagination ref="pagination" :data="searchParams" url="member.loginAreaTable" @paging="pagingCallback"></Pagination>
    </section>
    <!-- 账号详情 -->
    <el-dialog custom-class="inDialog" :title="dialogTitle" :visible.sync="memberNumsDialog" width="920px"
        @closed="currentNumsDetails={}">
        <LogLogin class="inbody" :details="currentNumsDetails" :memberListType="viewType"></LogLogin>
    </el-dialog>
    <div v-show="isShowMap" :style="{height:'800px',width:'100%',background:'#fff'}" ref="myEchart"></div>
    
  </div>
</template>
<script>
    // 引入 ECharts 主模块
    const echarts = require('echarts/lib/echarts');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    import 'echarts/map/js/china.js' // 引入中国地图数据
    import {
        quickChooseTime
    } from "@/config/quickChooseTime";
    import Pagination from "@/components/Pagination";
    import LogLogin from "@/views/member/LogLogin";
    export default {
    name: "echarts",
    data() {
      return {
        chart: null,
        pickerOptions2: {
            shortcuts: quickChooseTime
        },
        tableData:[],
        mapData: [],
        searchParams:{},
        datetime:"",
        isShowMap: true,
        isShowTable: false,
        memberNumsDialog: false,
        currentNumsDetails: {},
        viewType: 'LoginArea'
      };
    },
    updated() {
      this.chinaConfigure();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    watch: {
			datetime() {
				if(this.datetime === null) {
					this.datetime = [];
				}
      }
		},
    methods: {
      chinaConfigure() {
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
          backgroundColor: "#fff",
          title: {
              text:"全国人数分布",
              x:'center',
              fontWeight: 400,
              top:30
          },
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['#778899', '#87CEEB', '#2494f2']
          },
          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: '#333'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#333'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [{
              type: 'scatter',
              coordinateSystem: 'geo' // 对应上方配置
            },
            {
              name: '', // 浮动框的标题
              type: 'map',
              geoIndex: 0,
              data: this.mapData
            }
          ]
        })
      },
      pagingCallback(results, response) {
        this.tableData = results;
        this.mapData = results;
        this.mapData.forEach(function(v) {
            delete v.no
        })
        this.mapData = JSON.parse(JSON.stringify(results).replace(/login_province/g,"name").replace(/user_num/g,"value"))
        console.log(this.mapData)
        // results：返回的列表数据
        // response：请求接口返回的响应数据
        // do something...
      },
      logPageSearch() {
        this.searchParams = {
            action_time_start: this.datetime[0],
            action_time_end: this.datetime[1],
        };
        this.$logger.log(this.searchParams)
        this.$nextTick(() => {
          this.$refs.pagination.refresh(this.searchParams)
        })
      },
      mapClick() {
          this.isShowMap = true;
          this.isShowTable= false;

      },
      showTableClick() {
          this.isShowTable = true;
          this.isShowMap = false;
      },
      memberNumsList(data) {
        this.currentNumsDetails = data;
        this.$logger.log(this.currentNumsDetails);
        this.memberNumsDialog = true;
        },
    },
    components: {
        Pagination,
        LogLogin
    },
    computed: {
        dialogTitle() {
            return `【${this.currentNumsDetails.login_province}】登录会员`;
        }
    }
  }
</script>
<style lang="scss">
@import '@/styles/sass/variable.scss';
    .echarts {
        width: 100%;
        height: calc(100% - 54px);
        .ml-5 { margin-left: 5px!important;}
        .tableBox {
            height: calc(100% - 67px);
        }
        .rangeTime {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .search-icon {
          background-color: #F2F6FC;
          border-color: $l2BorderColor;
          border-radius: 0 4px 4px 0;
        }
    }
</style>
