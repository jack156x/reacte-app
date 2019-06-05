<template>
  <div class="tableContent">
    <!-- 全部会员 充值会员 未充值会员 彩金会员 删除会员 会员转移params.deviceType -->
    <div class="flexbox">
      <div class="itemflexLeft">
        <el-button-group class="btn-container mr-5" v-model="selectBtn" style="float:left;" v-if="OnlinemRexp">
          <el-button
            v-for="btnName in buttonSelect"
            :class="{'el-button--primary':active == btnName.val}"
            :label="btnName.val"
            :key="btnName.val"
            @click="screeningEquipment(btnName.val)"
          >{{btnName.label}}</el-button>
        </el-button-group>
        <el-select v-model="selectTime" :placeholder="formShow?'==请选择最后登陆==':'==请选择注册时间=='" v-if="!gameManage" class="mr-5">
          <el-option label="最后登陆" value="last_time" v-if="formShow"></el-option>
          <el-option label="注册时间" value="date_joined"></el-option>
        </el-select>
        <el-date-picker
          v-if="setmemberName"
          v-model="datetime"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="|"
          start-placeholder="请输入起始时间"
          end-placeholder="请输入结束时间"
          align="right"
          class="d_col mr-5"
          value-format="yyyy-MM-dd HH:mm:ss"
        ></el-date-picker>
        <el-select v-model="group" placeholder="==请选择组别==" class="mr-5" v-if="setmemberName">
          <el-option v-for="item in groupType" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
        <el-select v-model="member_bag" placeholder="==请选择==" v-if="showSelect" class="mr-5">
          <el-option label="钱包余额" value="bag_money"></el-option>
          <el-option label="会员输赢" value="winlose_money"></el-option>
          <el-option label="存款次数" value="account_number" v-if="Groupcalltype"></el-option>
          <el-option label="取款金额" value="withdrawal_amount" v-if="Groupcalltype"></el-option>
          <el-option label="取款次数" value="withdrawals_number" v-if="Groupcalltype"></el-option>
        </el-select>
        <div style="display:inline-block" v-if="showSelect" class="mr-5">
          <span class="menber-container">
            <div class="el-input el-input--small el-input--suffix">
              <el-input type="number" autocomplete="off" v-model="min_value" min="0"></el-input>
            </div>
          </span>
          <el-button>至</el-button>
          <span class="menber-container">
            <div class="el-input el-input--small el-input--suffix">
              <el-input type="number" autocomplete="off" v-model="max_value" min="0"></el-input>
            </div>
          </span>
        </div>
        <el-input class="searcher_b" placeholder="请输入搜索条件" v-model="searcher" v-if="!Groupcalltype">
          <el-select slot="prepend" v-model="account" placeholder="=请选择=" v-if="showSelect">
            <el-option label="会员账号" value="username"></el-option>
            <el-option label="会员姓名" value="realname"></el-option>
            <el-option label="登陆IP" value="reg_ip"></el-option>
            <el-option label="登陆地址" value="last_ip"></el-option>
            <el-option label="邀请码" value="promotion_code"></el-option>
          </el-select>
          <el-button slot="append" type="primary" @click="Search" icon="el-icon-search" class="search-icon"></el-button>
        </el-input>
        <el-input v-if="Groupcalltype" placeholder="请输入代理账号" v-model="agentUserName" class="searcher_b">
          <el-button slot="append" type="primary" @click="Search" icon="el-icon-search" class="search-icon"></el-button>
        </el-input>
      </div>
      <div class="itemFlexright" v-if="!Groupcalltype">
        <el-button-group>
          <el-button type="primary" icon="el-icon-refresh" @click="refreshTable" v-if="OnlinemRexp">同步</el-button>
          <!-- <el-button type="primary" icon="el-icon-plus" v-if="TestGame">新建</el-button> -->
          <el-button type="primary" icon="el-icon-refresh" v-if="TestGame" class="mr-5" @click="refreshTable"></el-button>
          <el-button type="primary" icon="el-icon-refresh" v-if="!TestGame" class="mr-5" @click="refreshTable"></el-button>
        </el-button-group>
      </div>
    </div>
    <section class="showTableList">
      <el-table :data="tableList" height="100%" :default-sort="{prop: 'id', order: 'descending'}" border @selection-change="changeSelected">
        <el-table-column type="index" label=" " width="50" v-if="propType" align="center"></el-table-column>
        <el-table-column type="selection" width="55" v-if="Groupcalltype"></el-table-column>
        <template v-if="CodeMenbepropType">
          <el-table-column key="1" prop="promotion_code" label="邀请码" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="registTime">
          <el-table-column key="2" prop="date_joined" label="注册时间" width="140"></el-table-column>
        </template>
        <template v-if="QueryAccount">
          <el-table-column key="3" prop="username" label="查询账号" width="150" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <el-link class="iconfont icon-fangdajing text_pad" @click="dialogTable(scope.row)" style="color:#1ABC9C;" v-if="!Groupcalltype"></el-link>
              <span class="account_text">{{ scope.row.username}}</span>
            </template>
          </el-table-column>
        </template>
        <template v-if="setmemberName">
          <el-table-column key="4" prop="realname" label="会员姓名" :show-overflow-tooltip="true"></el-table-column>
        </template>

        <template v-if="memberAccount">
          <el-table-column key="5" prop="username" label="会员账号" :show-overflow-tooltip="true"></el-table-column>
        </template>

        <template v-if="groupMember">
          <el-table-column key="6" prop="group" label="会员组别" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span>{{groupToName(groupType,scope.row.group)}}</span>
            </template>
          </el-table-column>
        </template>

        <template v-if="membershipGrade">
          <el-table-column key="7" prop="id" label="会员级别" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.id}}</span>
            </template>
          </el-table-column>
        </template>

        <template v-if="walletBalance">
          <el-table-column key="8" prop="bag_money" label="钱包余额" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div style="text-align:right">
                <el-link class="iconfont icon-fangdajing text_pad" @click="walletBalanceTable(scope.row)" style="color:orange"></el-link>
                <span>{{ scope.row.bag_money }}123</span>
              </div>
            </template>
          </el-table-column>
        </template>

        <template v-if="waterAccount">
          <el-table-column key="9" prop="rakebackprogram_account" label="返水账户" :show-overflow-tooltip="true"></el-table-column>
        </template>

        <template v-if="financialWinning">
          <el-table-column key="10" prop="financial_win_or_lose" label="财务输赢" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div style="text-align:right;">
                <el-link class="iconfont icon-fangdajing text_pad" @click="winpopUp(scope.row)" style="color:#FF6600;"></el-link>
                <span>{{ scope.row.financial_win_or_lose }}</span>
              </div>
            </template>
          </el-table-column>
        </template>

        <template v-if="agentAccount">
          <el-table-column key="11" prop="agent_account" label="所属代理账号" width="110" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <!-- <span class="iconfont icon-fangdajing text_pad belong" style="color:#1ABC9C;"></span> -->
              <span>{{ scope.row.agent_name }}</span>
            </template>
          </el-table-column>
        </template>

        <template v-if="agentName">
          <el-table-column key="12" prop="agent_name" label="所属代理姓名" width="110" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <!-- <span class="iconfont icon-fangdajing text_pad belong" style="color:#1ABC9C;"></span> -->
              <span>{{ scope.row.agent_nickname}}</span>
            </template>
          </el-table-column>
        </template>

        <template v-if="prepaid">
          <el-table-column key="13" prop="whether_recharge" label="是否充值" align="center">
            <template slot-scope="scope">
              <span class="nolink" :class="Rightwrong(scope.row.whether_recharge)"></span>
            </template>
          </el-table-column>
        </template>

        <template v-if="monitoring">
          <el-table-column key="14" prop="whether_monitor" label="是否监控" align="center">
            <template slot-scope="scope">
              <el-link :class="Rightwrong(scope.row.whether_monitor)" @click="WhetherMonitoring(scope.row)"></el-link>
            </template>
          </el-table-column>
        </template>
        <template v-if="onlineRemand">
          <el-table-column key="15" prop="whether_online_warn" label="上线提醒" align="center">
            <template slot-scope="scope">
              <el-link :class="Rightwrong(scope.row.whether_online_warn)" @click="onlineRemarked(scope.row)"></el-link>
            </template>
          </el-table-column>
        </template>
        <template v-if="regiestIp">
          <el-table-column key="16" prop="whether_agent" label="是否代理" align="center">
            <template slot-scope="scope">
              <span class="nolink" :class="Rightwrong(scope.row.whether_agent)"></span>
            </template>
          </el-table-column>
        </template>

        <template v-if="abnormal">
          <el-table-column key="17" prop="whether_odd" label="是否异常" align="center">
            <template slot-scope="scope">
              <el-link :class="Rightwrong(scope.row.whether_odd)" @click="addabnormalMember(scope.row)"></el-link>
            </template>
          </el-table-column>
        </template>
        <template v-if="whetherlock">
          <el-table-column key="18" prop="whether_locking" label="是否锁定" align="center">
            <template slot-scope="scope">
              <el-link :class="Rightwrong(scope.row.whether_locking)" @click="Whetherlock(scope.row)"></el-link>
            </template>
          </el-table-column>
        </template>
        <template v-if="regiestIp">
          <el-table-column key="19" prop="reg_ip" label="注册Ip" width="150">
            <template slot-scope="scope">
              <el-link class="iconfont icon-fangdajing text_pad" @click="LoginLogMethod(scope.row)"></el-link>
              {{scope.row.reg_ip}}
            </template>
          </el-table-column>
        </template>
        <template v-if="regiestIp">
          <el-table-column key="20" prop="last_ip" label="登陆信息" width="150" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <el-link class="iconfont icon-fangdajing text_pad" @click="LoginLogMethod(scope.row)"></el-link>
              {{scope.row.last_ip}}
            </template>
          </el-table-column>
        </template>
        <template v-if="winningOrlosing">
          <el-table-column key="21" prop="winlose_money" label="会员输赢">
            <template slot-scope="scope">
              <span>{{scope.row.winlose_money}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="winpopUp(scope.row)" style="color:#FF6600;" v-if="!Groupcalltype"></el-link>
            </template>
          </el-table-column>
        </template>
        <template v-if="belongAgent">
          <el-table-column key="22" prop="agent_realname" label="所属代理" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="LoginAddress">
          <el-table-column key="23" prop="whether_recharge" label="是否存款"></el-table-column>
        </template>
        <template v-if="LoginAddress">
          <el-table-column key="24" prop="last_ip" label="登陆地址" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="LoginAddress">
          <el-table-column key="25" prop="reg_ip" label="登陆Ip" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="LoginAddress">
          <el-table-column key="26" prop="login_url" label="登陆网址" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="LoginAddress">
          <el-table-column key="27" prop="last_login" label="登陆时间" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="LoginAddress">
          <el-table-column key="28" prop="last_device_id" label="登陆设备" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="Promotionidentity">
          <el-table-column key="29" prop="spread_code" label="推广标识" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="30" prop="accounttreasure.pay_money" label="存款金额"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="31" prop="accounttreasure.pay_times" label="存款次数"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="32" prop="accounttreasure.out_all_money" label="提款金额"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="33" prop="accounttreasure.withdraw_times" label="提款次数"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="34" prop="accounttreasure.lottery_money" label="彩金派送"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="35" prop="accounttreasure.lottery_times" label="彩金派送次数" v-if="Groupcalltype"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="36" prop="accounttreasure.rakeback_money" label="返水派送" v-if="Groupcalltype"></el-table-column>
        </template>
        <template v-if="promotionId">
          <el-table-column key="37" prop="accounttreasure.rakeback_times" label="返水派送次数" v-if="Groupcalltype"></el-table-column>
        </template>
        <template v-if="deleteMembers">
          <el-table-column key="38" prop="del_time" label="删除时间" sortable></el-table-column>
        </template>
        <template v-if="deleteMembers">
          <el-table-column key="39" prop="del_remark " label="删除备注" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="whetherOnline">
          <el-table-column key="40" prop="online" label="是否在线" sortable width="100">
            <template slot-scope="scope">
              <span>{{scope.row.online==0?'不在线':'在线'}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="dialogTable(scope.row)" style="color:#FF6600;"></el-link>
            </template>
          </el-table-column>
        </template>
        <template v-if="note">
          <el-table-column key="41" prop="remark" label="备注" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="createAccount">
          <el-table-column key="42" prop="create_account" label="创建操作账号"></el-table-column>
        </template>
        <template v-if="createAccount">
          <el-table-column key="43" prop="create_time" label="创建时间"></el-table-column>
        </template>
        <template v-if="gameManage">
          <el-table-column key="44" prop="designation" label="名称" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="gameManage">
          <el-table-column key="45" prop="game_id" label="游戏ID"></el-table-column>
        </template>
        <template v-if="gameManage">
          <el-table-column key="46" prop="game_code" label="游戏编码" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="gameManage">
          <el-table-column key="47" prop="game_type" label="游戏名称" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="noLoading">
          <el-table-column key="48" label="未登录天数" width="100">
            <template slot-scope="scope">
              <div>{{nologinData(scope.row.last_login,'last_login')}}</div>
            </template>
          </el-table-column>
        </template>
        <template v-if="noLoading">
          <el-table-column key="49" label="未投注天数" width="100">
            <template slot-scope="scope">
              <div>{{nologinData(scope.row.last_play_time,'last_play_time')}}</div>
            </template>
          </el-table-column>
        </template>
        <template v-if="noLoading">
          <el-table-column key="50" prop="last_login" label="最后登录时间" width="100"></el-table-column>
        </template>
        <template v-if="noLoading">
          <el-table-column key="51" prop="monitoring_reason" label="监控原因" width="100" :show-overflow-tooltip="true"></el-table-column>
        </template>
        <template v-if="whetherlock">
          <el-table-column key="52" label="操作" width="500">
            <template slot-scope="scope">
              <div style="display:flex;">
                <el-button type="text" class="btn-green" @click="echartPop(scope.row)">会员详情</el-button>
                <span class="iconfontLine"></span>
                <el-button type="text" class="btn-green" @click="Safetywarning(scope.row)">安全预警</el-button>
                <span class="iconfontLine"></span>
                <el-button type="text" class="btn-green" @click="EditMemberTitle(scope.row)">调整组别</el-button>
                <span class="iconfontLine"></span>
                <el-button type="text" class="btn-green">赔率预览</el-button>
                <span class="iconfontLine"></span>
                <el-button type="text" class="btn-green" @click="pointDials(scope.row)">抽点详情</el-button>
                <span class="iconfontLine"></span>
                <el-button type="text" class="btn-green" @click="pointEnble(scope.row)">升级代理</el-button>
                <span class="iconfontLine"></span>
                <el-button type="text" class="btn-green" @click="meneyCollenS(scope.row)">资金回收</el-button>
              </div>
            </template>
          </el-table-column>
        </template>
        <template v-if="OnlinemRexp">
          <el-table-column key="53" prop="id" label="操作">
            <template slot-scope="scope">
              <el-button type="text" class="btn-green" @click="offline(scope.row)">踢线</el-button>
            </template>
          </el-table-column>
        </template>

        <template v-if="Prepaidmenbers">
          <el-table-column key="54" prop="id" label="操作">
            <template slot-scope="scope">
              <el-button type="text" class="btn-green" @click="echartPop(scope.row.agent_nickname)">会员详情</el-button>
            </template>
          </el-table-column>
        </template>
        <template v-if="Monitorings">
          <el-table-column key="55" prop="id" label="操作" width="200">
            <template slot-scope="scope">
              <el-button type="text" class="btn-green" @click="echartPop(scope.row)">会员详情</el-button>
              <span class="iconfontLine"></span>
              <el-button type="text" class="btn-green" @click="CancelMonito(scope.row)">取消监控</el-button>
            </template>
          </el-table-column>
        </template>
        <template v-if="TransferBtn">
          <el-table-column key="56" prop="id" label="操作">
            <template slot-scope="scope">
              <el-button type="text" class="btn-green" @click="ChangeUpData(scope.row)">变更上级</el-button>
            </template>
          </el-table-column>
        </template>

        <template v-if="gameManage">
          <el-table-column key="57" prop="id" label="操作" align="center">
            <el-button type="text" class="btn-green">游戏操作</el-button>
          </el-table-column>
        </template>
      </el-table>
      <Pagination ref="pagination" :url="getURL" @paging="pagingCallback" :data="searcontain"></Pagination>
    </section>

    <!-- 会员账号弹出窗口 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】会员信息'" :visible.sync="dialogTableVisible" v-dialogDrag>
      <MemberInforDetail :FormData="FormValue" @closeWindow="closeWindow" :readonly="readonly" :style="dialogCss"></MemberInforDetail>
    </el-dialog>

    <!-- 会员账号明细弹出窗口 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】会员账户明细'" :visible.sync="deTaileTable" v-dialogDrag>
      <MemberDetail :accountID="accountId" :style="dialogCss"></MemberDetail>
    </el-dialog>
    <!-- 会员输赢明细 -->
    <el-dialog :title="dialogtitle.Title+'会员输赢明细'" :visible.sync="Financialwin" v-dialogDrag width="80%">
      <MemberWin :username="sentName" :view-types="viewType" :style="dialogCss"></MemberWin>
    </el-dialog>

    <!-- 会员登陆日志 -->
    <el-dialog :title="dialogtitle.Title+'会员登陆日志'" :visible.sync="LoadingLog" v-dialogDrag width="70%">
      <LogLogin :style="dialogCss" :view-type="propType" :details="form"></LogLogin>
    </el-dialog>
    <!-- 会员详情 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】会员详细信息'" :visible.sync="echartDetatilMember" v-dialogDrag width="70%">
      <MemberEchartdetails :style="dialogCss" style="overflow:auto;"></MemberEchartdetails>
    </el-dialog>

    <!-- 调整组别 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】会员组别'" :visible.sync="EditMember" v-dialogDrag width="20%">
      <EditMemberzb :groupData="FormValue" @closeWindow="closeWindow"></EditMemberzb>
    </el-dialog>
    <!-- 调整组别 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】代理会员可抽点数详情'" :visible.sync="pointDetail" v-dialogDrag width="20%">
      <MemberPointsDetails :Takedetails="FormValue"></MemberPointsDetails>
    </el-dialog>

    <!-- 资金回收 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】资金回收'" :visible.sync="meneyCollen" v-dialogDrag width="20%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="平台标识">
          <el-select v-model="form.username" placeholder="请选择平台标识" style="width:100%">
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="rightBtn">
        <el-button @click="moneyback()">资金查询</el-button>
        <el-button type="primary" @click="moneyback()">资金回收</el-button>
      </div>
    </el-dialog>

    <!-- 会员组别添加为异常会员 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】会员，添加为异常会员'" :visible.sync="EditAbnor" v-dialogDrag width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="查询账号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="提示备注">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item label="备注原因">
          <el-input type="textarea" :rows="2" v-model="form.tip_remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="rightBtn">
        <el-button type="primary" @click="addAbnor">确认</el-button>
        <el-button @click="EditAbnor=false">关闭</el-button>
      </div>
    </el-dialog>
    <!-- 更改上级 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】更改上级'" :visible.sync="changeUp" v-dialogDrag width="70%">
      <ChangesSsuperior></ChangesSsuperior>
    </el-dialog>
  </div>
</template>

<script>
import { quickChooseTime } from '@/config/quickChooseTime'
import Pagination from '@/components/Pagination'
import MemberInforDetail from '@/views/member/MemberInfoDetail'
import MemberDetail from '@/views/member/MemberDetail'
import LogLogin from '@/views/member/LogLogin'
import MemberWin from '@/views/finance/Fund'
import MemberEchartdetails from '@/views/member/MemberEchartdetails'
import EditMemberzb from '@/views/member/EditMemberzb'
import MemberPointsDetails from '@/views/member/MemberPointsDetails'
import ChangesSsuperior from '@/views/member/ChangeSuperior'
import { getMemberGroup, patchMemberCount, moneyrakeback } from '@/services/member'
import { ADD_TAB_ACTIVE } from '@/config/mutation-types.js'
const moneyOptions = [
  {
    label: 'pc在线',
    val: 'pc'
  },
  {
    label: 'wap在线',
    val: 'wap'
  },
  {
    label: 'android在线',
    val: 'android'
  },
  {
    label: 'ios在线',
    val: 'ios'
  }
]
export default {
  props: {
    props: {
      type: Object,
      reuired: true
    }
  },
  name: 'AllMember',
  data() {
    return {
      agentUserName: '',
      multipleSelection: [],
      viewType: [1, 2],
      searcontain: '',
      active: moneyOptions[0].val,
      readonly: false,
      takedetails: {},
      view: 'plain',
      sentName: '',
      selectTime: '',
      selectBtn: '',
      account: '',
      groupType: null,
      checkboxGroup: moneyOptions[0],
      buttonSelect: moneyOptions,
      dialogTableVisible: false,
      Financialwin: false,
      deTaileTable: false,
      LoadingLog: false,
      echartDetatilMember: false,
      EditMember: false,
      tatisle: false,
      pointDetail: false,
      meneyCollen: false,
      EditAbnor: false,
      changeUp: false,
      FormValue: {},
      accountId: '',
      dialogtitle: {
        Title: ''
      },
      form: {},
      accounts: [],
      tableData: [],
      date_joined: '',
      pickerOptions: {
        shortcuts: quickChooseTime
      },
      group: '',
      member_bag: '',
      datetime: '',
      username: '',
      searcher: '',
      searchParams: {},
      tableList: [],
      max_value: '',
      min_value: ''
    }
  },
  components: {
    Pagination,
    MemberInforDetail,
    MemberDetail,
    MemberWin,
    LogLogin,
    MemberEchartdetails,
    EditMemberzb,
    MemberPointsDetails,
    ChangesSsuperior
  },
  created() {
    this.selectTime = 'date_joined'
    this.member_bag = 'bag_money'
    this.account = 'username'
    this.searcontain = JSON.parse(JSON.stringify(this.getURlParmas))
  },
  computed: {
    propType() {
      return this.props.type
    },
    getURL() {
      return this.props.url
    },
    getURlParmas() {
      return this.props.data
    },
    nologinData() {
      return function(Datemumber, type) {
        if (!Datemumber) {
          if (type == 'last_login') {
            return '尚未登陆'
          } else {
            return '尚未投注'
          }
        } else {
          return parseInt(Math.abs(new Date() - new Date(Datemumber)) / 1000 / 60 / 60 / 24)
        }
      }
    },
    CodeMenbepropType() {
      return /^Allmenber|Onlinemenber|PrepaidMember|UnchargedMember|MosaicGoldMembers|MonitoringMember|TransferMember$/.test(this.propType)
    },
    registTime() {
      return /^Allmenber|Onlinemenber|PrepaidMember|UnchargedMember|MosaicGoldMembers|TransferMember|MonitoringMember|DeleteMember|AbnormalMember|OnlineRemind$/.test(
        this.propType
      )
    },
    QueryAccount() {
      /*查询账号*/
      return /^Allmenber|Onlinemenber|PrepaidMember|MonitoringMember|GameManageMember|TransferMember|OnlineRemind|Groupcall$/.test(this.propType)
    },
    setmemberName() {
      return /^Allmenber|Onlinemenber|PrepaidMember|UnchargedMember|MosaicGoldMembers|MonitoringMember|DeleteMember|AbnormalMember|TestMember|TransferMember|OnlineRemind|Groupcall$/.test(
        this.propType
      )
    },
    memberAccount() {
      return /^Onlinemenber|UnchargedMember|MosaicGoldMembers|DeleteMember|AbnormalMember|TestMember$/.test(this.propType)
    },
    groupMember() {
      return /^Allmenber|Onlinemenber|PrepaidMember|UnchargedMember|MosaicGoldMembers|MonitoringMember|DeleteMember|AbnormalMember|TransferMember|OnlineRemind|Groupcall$/.test(
        this.propType
      )
    },
    membershipGrade() {
      return /^Allmenber|Onlinemenber|PrepaidMember|TransferMember$/.test(this.propType)
    },
    walletBalance() {
      return /^Allmenber|Onlinemenber|PrepaidMember|UnchargedMember|MosaicGoldMembers|MonitoringMember|DeleteMember|AbnormalMember|TestMember|TransferMember|OnlineRemind$/.test(
        this.propType
      )
    },
    waterAccount() {
      return /^Allmenber|OnlineRemind|AbnormalMember|DeleteMember|MonitoringMember|UnchargedMember|MosaicGoldMembers|PrepaidMember|Onlinemenber$/.test(
        this.propType
      )
    },
    financialWinning() {
      return /^Allmenber|PrepaidMember|MonitoringMember|DeleteMember|AbnormalMember|OnlineRemind$/.test(this.propType)
    },
    agentAccount() {
      return /^Allmenber|OnlineRemind|TransferMember|MonitoringMember|PrepaidMember$/.test(this.propType)
    },
    agentName() {
      return /^Allmenber|PrepaidMember|MonitoringMember|TransferMember|OnlineRemind$/.test(this.propType)
    },
    prepaid() {
      return /^Allmenber|TransferMember$/.test(this.propType)
    },
    abnormal() {
      return /^OnlineRemind|MonitoringMember|UnchargedMember|MosaicGoldMembers|PrepaidMember|Onlinemenber|Allmenber$/.test(this.propType)
    },
    monitoring() {
      return /^Allmenber|TransferMember|MonitoringMember|PrepaidMember$/.test(this.propType)
    },
    belongAgent() {
      return /^Onlinemenber|UnchargedMember|MosaicGoldMembers|DeleteMember|AbnormalMember$/.test(this.propType)
    },
    winningOrlosing() {
      return /^Onlinemenber|UnchargedMember|MosaicGoldMembers|TransferMember|Groupcall$/.test(this.propType)
    },
    LoginAddress() {
      return /^UnchargedMember|MosaicGoldMembers|Onlinemenber$/.test(this.propType)
    },
    Promotionidentity() {
      return /^MonitoringMember|PrepaidMember$/.test(this.propType)
    },
    promotionId() {
      return /^MonitoringMember|PrepaidMember|Groupcall$/.test(this.propType)
    },
    Groupcalltype() {
      return /^Groupcall$/.test(this.propType)
    },
    whetherOnline() {
      return /^AbnormalMember|TestMember|OnlineRemind$/.test(this.propType)
    },
    noLoading() {
      return /^OnlineRemind$/.test(this.propType)
    },
    Prepaidmenbers() {
      return /^PrepaidMember|UnchargedMember|MosaicGoldMembers$/.test(this.propType)
    },
    Monitorings() {
      return /^MonitoringMember|OnlineRemind$/.test(this.propType)
    },
    deleteMembers() {
      return /^DeleteMember$/.test(this.propType)
    },
    OnlinemRexp() {
      return /^Onlinemenber$/.test(this.propType)
    },
    regiestIp() {
      return /^Allmenber|TransferMember$/.test(this.propType)
    },
    TransferBtn() {
      return /^TransferMember$/.test(this.propType)
    },
    gameManage() {
      return /^GameManageMember$/.test(this.propType)
    },
    onlineRemand() {
      return /^Allmenber|OnlineRemind$/.test(this.propType)
    },
    TestGame() {
      return /^TestMember|GameManageMember$/.test(this.propType)
    },
    whetherlock() {
      return /^Allmenber$/.test(this.propType)
    },
    createAccount() {
      return /^TestMember$/.test(this.propType)
    },
    note() {
      return /^AbnormalMember$/.test(this.propType)
    },
    formShow() {
      return /^MonitoringMember|OnlineRemind$/.test(this.propType)
    },
    testMember() {
      return /^AbnormalMember|TestMember$/.test(this.propType)
    },
    showSelect() {
      return /^Allmenber|Onlinemenber|PrepaidMember|UnchargedMember|MosaicGoldMembers|MonitoringMember|DeleteMember|TransferMember|OnlineRemind|Groupcall$/.test(
        this.propType
      )
    },
    showRegistTime() {
      return /^Allmenber|Onlinemenber|PrepaidMember|UnchargedMember|MosaicGoldMembers|DeleteMember|TransferMember|TestMember|AbnormalMember$/.test(
        this.propType
      )
    },
    Rightwrong() {
      return function(value) {
        return (value = '0' ? 'el-icon-error' : 'el-icon-success')
      }
    },
    groupToName() {
      return function(maparray, id) {
        for (let item of maparray) {
          if (item.id == id) {
            return item.name
          }
        }
      }
    }
  },
  mounted() {
    this.getMemberGroups()
  },
  methods: {
    changeSelected(val) {
      this.multipleSelection = val
      this.$emit('selectedChange', val)
    },
    Safetywarning(data) {
      const component = `WithdrawSafeWarn`
      const flag = `${component}_${data.id}`
      this.$store.commit(ADD_TAB_ACTIVE, {
        title: `安全预警`,
        path: component,
        flag
      })
    },
    getMemberGroups() {
      getMemberGroup().then(res => {
        res.results.unshift({
          id: '',
          name: '全部组别'
        })
        this.groupType = res.results
        this.group = res.results[0].id
      })
    },
    pagingCallback(results, response) {
      this.tableList = results
    },
    refreshTable() {
      this.$nextTick(() => {
        this.$refs.pagination.refresh()
      })
    },
    Search() {
      let [datetime, group] = [this.datetime, this.group]
      let params = {}
      if (this.showSelect) {
        /***注册时间**/
        if (this.selectTime == 'date_joined') {
          if (this.member_bag == 'bag_money') {
            params = {
              date_joined: !datetime ? '' : datetime[0],
              date_joined_end: !datetime ? '' : datetime[1],
              group: this.group ? this.group : '',
              [this.account ? this.account : 'username']: this.searcher,
              bag_money: this.min_value,
              bag_money_max: this.max_value
            }
          } else {
            if (this.member_bag == 'winlose_money') {
              params = {
                date_joined: !datetime ? '' : datetime[0],
                date_joined_end: !datetime ? '' : datetime[1],
                group: this.group ? this.group : '',
                [this.account ? this.account : 'username']: this.searcher,
                winlose_money: this.min_value,
                winlose_money_max: this.max_value
              }
            } else {
              if (this.member_bag == 'account_number') {
                params = {
                  date_joined: !datetime ? '' : datetime[0],
                  date_joined_end: !datetime ? '' : datetime[1],
                  group: this.group ? this.group : '',
                  [this.account ? this.account : 'username']: this.searcher,
                  // 存款次数
                  in_all_money: this.min_value,
                  in_all_money_max: this.max_value
                }
              } else {
                if (this.member_bag == 'withdrawal_amount') {
                  params = {
                    date_joined: !datetime ? '' : datetime[0],
                    date_joined_end: !datetime ? '' : datetime[1],
                    group: this.group ? this.group : '',
                    [this.account ? this.account : 'username']: this.searcher,
                    // 取款金额
                    out_all_money: this.min_value,
                    out_all_money_max: this.max_value
                  }
                } else {
                  if (this.member_bag == 'withdrawal_amount') {
                    params = {
                      date_joined: !datetime ? '' : datetime[0],
                      date_joined_end: !datetime ? '' : datetime[1],
                      group: this.group ? this.group : '',
                      [this.account ? this.account : 'username']: this.searcher,
                      // 取款次数
                      withdraw_times: this.min_value,
                      withdraw_times_max: this.max_value
                    }
                  } else {
                    params = {
                      date_joined: !datetime ? '' : datetime[0],
                      date_joined_end: !datetime ? '' : datetime[1],
                      group: this.group ? this.group : '',
                      [this.account ? this.account : 'username']: this.searcher
                    }
                  }
                }
              }
            }
          }
        } else {
          /***最后登陆时间**/
          if (this.selectTime == 'last_time') {
            if (this.member_bag == 'bag_money') {
              params = {
                last_login: datetime ? datetime[0] : datetime,
                last_login_end: datetime ? datetime[1] : datetime,
                group: this.group ? this.group : '',
                [this.account ? this.account : 'username']: this.searcher,
                bag_money: this.min_value,
                bag_money_max: this.max_value
              }
            } else {
              if (this.member_bag == 'winlose_money') {
                params = {
                  last_login: datetime ? datetime[0] : datetime,
                  last_login_end: datetime ? datetime[1] : datetime,
                  group: this.group ? this.group : '',
                  [this.account ? this.account : 'username']: this.searcher,
                  winlose_money: this.min_value,
                  winlose_money_max: this.max_value
                }
              } else {
                if (this.member_bag == 'account_number') {
                  params = {
                    last_login: datetime ? datetime[0] : datetime,
                    last_login_end: datetime ? datetime[1] : datetime,
                    group: this.group ? this.group : '',
                    [this.account ? this.account : 'username']: this.searcher,
                    // 存款次数
                    in_all_money: this.min_value,
                    in_all_money_max: this.max_value
                  }
                } else {
                  if (this.member_bag == 'withdrawal_amount') {
                    params = {
                      last_login: datetime ? datetime[0] : datetime,
                      last_login_end: datetime ? datetime[1] : datetime,
                      group: this.group ? this.group : '',
                      [this.account ? this.account : 'username']: this.searcher,
                      // 取款金额
                      out_all_money: this.min_value,
                      out_all_money_max: this.max_value
                    }
                  } else {
                    if (this.member_bag == 'withdrawal_amount') {
                      params = {
                        last_login: datetime ? datetime[0] : datetime,
                        last_login_end: datetime ? datetime[1] : datetime,
                        group: this.group ? this.group : '',
                        [this.account ? this.account : 'username']: this.searcher,
                        // 取款次数
                        withdraw_times: this.min_value,
                        withdraw_times_max: this.max_value
                      }
                    } else {
                      params = {
                        last_login: datetime ? datetime[0] : datetime,
                        last_login_end: datetime ? datetime[1] : datetime,
                        group: this.group ? this.group : '',
                        [this.account ? this.account : 'username']: this.searcher
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (this.member_bag == 'bag_money') {
              // 钱包余额
              params = {
                group: this.group ? this.group : '',
                [this.account ? this.account : 'username']: this.searcher,
                bag_money: this.min_value,
                bag_money_max: this.max_value
              }
            } else {
              if (this.member_bag == 'winlose_money') {
                // 会员输赢
                params = {
                  group: this.group ? this.group : '',
                  [this.account ? this.account : 'username']: this.searcher,
                  winlose_money: this.min_value,
                  winlose_money_max: this.max_value
                }
              } else {
                if (this.member_bag == 'account_number') {
                  params = {
                    group: this.group ? this.group : '',
                    [this.account ? this.account : 'username']: this.searcher,
                    // 存款次数
                    in_all_money: this.min_value,
                    in_all_money_max: this.max_value
                  }
                } else {
                  if (this.member_bag == 'withdrawal_amount') {
                    params = {
                      group: this.group ? this.group : '',
                      [this.account ? this.account : 'username']: this.searcher,
                      // 取款金额
                      out_all_money: this.min_value,
                      out_all_money_max: this.max_value
                    }
                  } else {
                    if (this.member_bag == 'withdrawal_amount') {
                      params = {
                        group: this.group ? this.group : '',
                        [this.account ? this.account : 'username']: this.searcher,
                        // 取款次数
                        withdraw_times: this.min_value,
                        withdraw_times_max: this.max_value
                      }
                    } else {
                      params = {
                        group: this.group ? this.group : '',
                        [this.account ? this.account : 'username']: this.searcher
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (this.Groupcalltype) {
          params.agent_username = this.agentUserName
        }
      }
      /***删除空对象 */
      for (const key in params) {
        if (params[key] === '') {
          delete params[key]
        }
      }
      if (this.testMember) {
        params = {
          [!this.selectTime ? 'date_joined' : this.selectTime]: !datetime[0] ? '' : datetime[0],
          group: this.group,
          username: this.searcher
        }
      }
      if (this.gameManage) {
        params = {
          username: this.searcher
        }
      }
      this.$logger.log(params)
      this.searcontain = Object.assign({}, this.getURlParmas, params)
      this.$logger.log(this.searcontain)
      this.refreshTable()
    },
    screeningEquipment(data) {
      const datas = data.replace('在线', '')
      this.searcontain = { device: datas }
      this.active = data
      this.refreshTable()
    },
    dialogTable(InitData) {
      this.FormValue = InitData
      this.dialogtitle.Title = InitData.username
      this.dialogTableVisible = true
    },
    ChangeUpData(data) {
      this.dialogtitle.Title = data.username
      this.changeUp = true
    },
    walletBalanceTable(data) {
      this.dialogtitle.Title = data.username
      this.accountId = data.id
      this.deTaileTable = true
    },
    winpopUp(data) {
      this.dialogtitle.Title = data.username
      this.sentName = data.username
      this.Financialwin = true
    },
    LoginLogMethod(name) {
      this.dialogtitle.Title = name.username
      this.form = JSON.parse(JSON.stringify(name))
      this.LoadingLog = true
    },
    echartPop(data) {
      this.dialogtitle.Title = data.username
      this.echartDetatilMember = true
    },
    EditMemberTitle(data) {
      this.dialogtitle.Title = data.username
      this.FormValue = JSON.parse(JSON.stringify(data))
      this.EditMember = true
    },
    pointDials(initdata) {
      this.FormValue = JSON.parse(JSON.stringify(initdata))
      this.dialogtitle.Title = initdata.username
      this.pointDetail = true
    },
    meneyCollenS(data) {
      this.dialogtitle.Title = data.username
      this.meneyCollen = true
      this.FormValue = JSON.parse(JSON.stringify(data))
    },
    moneyback() {
      const params = {
        user_id: this.FormValue.id
      }
      moneyrakeback(params).then(res => {
        if (res.hasOwnProperty('detail')) {
          this.$notify({
            title: '成功',
            message: res.detail,
            type: 'success'
          })
        }
      })
    },
    addabnormalMember(data) {
      /***添加异常会员 */
      this.dialogtitle.Title = data.username
      this.form = JSON.parse(JSON.stringify(data))
      this.EditAbnor = true
    },
    addAbnor() {
      let params = {
        username: this.form.name,
        remark: this.form.remark,
        result: this.form.tip_remark,
        id: this.form.id,
        whether_odd: 1
      }
      patchMemberCount(params).then(res => {
        if (res) {
          this.$notify({
            title: '成功',
            message: '设定成功',
            type: 'success'
          })
        }
      })
      this.EditAbnor = false
    },
    closeWindow(value) {
      this.dialogTableVisible = value
      this.EditMember = value
    },
    WhetherMonitoring(name) {
      let Nametext = '您确认监控【' + name.username + '】会员?'
      const title = '系统提示'
      this.confirm(Nametext, title, () => {
        const whether_monitors = {
          whether_monitor: name.whether_monitor,
          id: name.id
        }
        patchMemberCount(whether_monitors).then(res => {
          if (res) {
            this.$notify({
              title: '成功',
              message: '设定成功',
              type: 'success'
            })
          }
        })
      })
    },
    onlineRemarked(name) {
      let Nametext = '您确认?, 将【' + name.username + '】会员，添加为上线提醒会员'
      const title = '系统提示'
      const _this = this
      this.confirm(Nametext, title, () => {
        this.searchParams = {
          whether_online_warn: name.whether_online_warn,
          id: name.id
        }
        patchMemberCount(this.searchParams).then(res => {
          this.$notify({
            title: '成功',
            message: '设定成功',
            type: 'success'
          })
        })
      })
    },
    Whetherlock(name) {
      let Nametext = '亲，请确定锁定【' + name.username + "】会员?锁定后用户将无法登陆'"
      const title = '系统提示'
      const _this = this
      this.confirm(Nametext, title, () => {
        const locking = {
          whether_locking: name.whether_locking,
          id: name.id
        }
        patchMemberCount(locking).then(res => {
          this.$notify({
            title: '成功',
            message: '设定成功',
            type: 'success'
          })
        })
      })
    },
    offline(data) {
      let Nametext = '您确定【' + data.username + '】会员，踢下线？'
      const title = '系统提示'
      const _this = this
      this.confirm(Nametext, title, () => {
        _this.$message({
          type: 'success',
          message: '操作成功!'
        })
      })
    },
    pointEnble(data) {
      let Nametext = '亲，您确认将【' + data.username + '】会员，升级为代理么？'
      const title = '系统提示'
      const _this = this
      this.confirm(Nametext, title, () => {
        const upgrade = {
          whether_agent: 1,
          id: data.id
        }
        patchMemberCount(upgrade).then(res => {
          this.$notify({
            title: '成功',
            message: '设定成功',
            type: 'success'
          })
        })
      })
    },
    CancelMonito(data) {
      let Nametext = '您确认解除对【' + data.username + '】会员的监控？'
      const title = '系统提示'
      this.confirm(Nametext, title, () => {
        const locking = {
          whether_monitor: 0,
          id: data.id
        }
        patchMemberCount(locking).then(res => {
          this.$notify({
            title: '成功',
            message: '成功取消',
            type: 'success'
          })
        })
      })
    },
    confirm(textName, title, callback) {
      this.$confirm(textName, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      })
        .then(() => {
          callback()
        })
        .catch(e => {
          this.$logger.log(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$color: rgb(26, 188, 156);
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.itemflexLeft {
  display: flex;
  align-items: center;
}
.searcher_b {
  width: 260px;
}

.tableContent {
  height: calc(100% - 54px);

  .showTableList {
    height: calc(100% - 77px);
  }

  .el-table {
    width: 100%;
    margin-top: 5px;
    height: 100%;
  }
}
.el-select {
  width: 100px;
}
.menber-container {
  display: inline-block;
  width: 80px;
}
.d_col {
  width: 280px;
}
.btn-container {
  display: inline-block;
  margin-right: 5px;
}
.el-input--small {
  /deep/.el-input__inner {
    padding-right: 0;
  }
}
.iconfontLine::after {
  content: '|';
}
.btn-green {
  padding: 4px 5px;
  color: #475059;
}
.rightBtn {
  text-align: right;
}
.el-link {
  display: inline-block;
  padding: 0 8px;
}
.el-link:hover {
  text-decoration: none;
}
.belong {
  display: inline-block;
  padding: 0 5px;
}
.nolink {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 500;
}
</style>
