<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="Maincharts" id="getChart" :style="{width: '100%', height: '300px'}"></div>
      </el-col>
      <el-col :span="8">
        <div class="rightChart bankInfo">
          <strong>近15天注单汇总1</strong>
          <ul>
            <li>
              <div>注单总额</div>
              <div>000</div>
            </li>
            <li>
              <div>有效注单总额</div>
              <div>000</div>
            </li>
            <li>
              <div>输赢总额</div>
              <div>000</div>
            </li>
            <li>
              <div>注单总笔数</div>
              <div>000</div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="24">
        <div class="Maincharts" id="finace_static" :style="{width: '100%', height: '300px'}"></div>
      </el-col>
    </el-row>
    <!-- table表格 -->
    <section class="loadingLog">
      <el-table :data="tableData" border tooltip-effect="light">
        <el-table-column prop="address" label></el-table-column>
        <el-table-column prop="address" label="微信存款(在线)"></el-table-column>
        <el-table-column prop="address" label="支付宝存款(在线)"></el-table-column>
        <el-table-column prop="date" label="qq钱包存款(在线)"></el-table-column>
        <el-table-column prop="date" label="银联网银(在线)"></el-table-column>
        <el-table-column prop="date" label="云闪付(在线)"></el-table-column>
        <el-table-column prop="date" label="京东(在线)"></el-table-column>
        <el-table-column prop="date" label="微信存款(汇款)"></el-table-column>
        <el-table-column prop="date" label="支付宝存款(汇款)"></el-table-column>
        <el-table-column prop="date" label="QQ钱包存款(汇款)"></el-table-column>
        <el-table-column prop="date" label="银联网银(汇款)"></el-table-column>
        <el-table-column prop="date" label="云闪付(汇款)"></el-table-column>
        <el-table-column prop="date" label="京东(汇款)"></el-table-column>
        <el-table-column prop="date" label="取款"></el-table-column>
        <el-table-column prop="date" label="净流入"></el-table-column>
      </el-table>
    </section>
    <section class="loadingLog">
      <h1>近10次登陆日志</h1>
      <el-table :data="tableData" border tooltip-effect="light">
        <el-table-column prop="address" label="登陆IP"></el-table-column>
        <el-table-column prop="address" label="登陆地址"></el-table-column>
        <el-table-column prop="date" label="登录时间"></el-table-column>
        <el-table-column prop="date" label="登陆网址"></el-table-column>
      </el-table>
    </section>

    <section class="loadingLog griptable">
      <el-row :gutter="20" style="width:100%">
        <el-col :span="12">
          <div style="width:100%">
            <strong class="tableTitle">会员信息</strong>
            <MemberInfoDetail view="plain"></MemberInfoDetail>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <div class="bankInfo">
              <strong class="tableTitle">账户信息</strong>
              <ul>
                <li>
                  <div>我的钱包：</div>
                  <div>000</div>
                </li>
                <li>
                  <div>彩票账户额度：</div>
                  <div>000</div>
                </li>
                <li>
                  <div>总额：</div>
                  <div>000</div>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bankInfo">
            <strong class="tableTitle">银行卡信息</strong>
            <ul>
              <li>
                <div>开户银行：</div>
                <div>农业银行</div>
              </li>
              <li>
                <div>开户人：</div>
                <div>王世爵</div>
              </li>
              <li>
                <div>开户地址：</div>
                <div>重庆开县农业银行</div>
              </li>
              <li>
                <div>银行账号：</div>
                <div>62284846545645645646456456</div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import MemberInfoDetail from '@/views/member/MemberInfoDetail'
import echarts from 'echarts'
export default {
  name: 'echarts',
  data() {
    return {
      times: [],
      toBets: [],
      toVBets: [],
      toWins: [],
      toCnts: [],
      tableData: [],
      disLiInfo: true
    }
  },
  components: {
    MemberInfoDetail
  },
  methods: {
    drawLine() {
      let options = {
        title: {
          text: '近15天注单统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['注单总额', '有效注单总额', '输赢总额', '注单笔数']
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '注单总额',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '有效注单总额',
            type: 'line',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '输赢总额',
            type: 'line',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '注单笔数',
            type: 'line',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
      var getEcharts = echarts.init(document.getElementById('getChart'))
      var finace_static = echarts.init(document.getElementById('finace_static'))
      getEcharts.setOption(options)
      finace_static.setOption(options)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine()
    })
  }
}
</script>

<style lang="scss" scoped>
.Maincharts_comtain,
.griptable {
  display: flex;
  margin-top: 5px;
}
.bankInfo {
  ul {
    padding: 0 0 0 5px;
    li {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }
  }
}

.tableTitle {
  padding: 10px 0;
  display: block;
}
</style>