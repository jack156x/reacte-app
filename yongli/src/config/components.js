/*主页签展示组件预处理
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 13:09:57 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-28 13:35:37
 */
export const Home = resolve => require(['@/views/Home.vue'], resolve);
/***会员信息管理 */
export const MemberInfo = resolve => require(['@/views/member/Info.vue'], resolve);
/***会员账户核查 */
export const MemberAccount = resolve => require(['@/views/member/Account.vue'], resolve);
/**会员日志管理*/
export const MemberLog = resolve => require(['@/views/member/Log.vue'], resolve);
/**会员卡片管理*/
export const MemberCard = resolve => require(['@/views/member/Card.vue'], resolve);
/**黑名单管理*/
export const MemberBlacklist = resolve => require(['@/views/member/Blacklist.vue'], resolve);
/**关键信息管理 */
export const MemberKeyinfo = resolve => require(['@/views/member/MemberKeyinfo.vue'], resolve);
/**会员分组管理 */
export const MemberGroup = resolve => require(['@/views/member/MemberGroup.vue'], resolve);
/**会员资料管理 */
export const MemberData = resolve => require(['@/views/member/MemberData.vue'], resolve);
/**会员报表统计 */
export const MemberReport = resolve => require(['@/views/member/MemberReport.vue'], resolve);
/**加减款操作*/
export const FinanceAddandsubtract = resolve => require(['@/views/finance/Addandsubtract.vue'], resolve);
/**填单存款管理*/
export const FinanceDeposit = resolve => require(['@/views/finance/Deposit.vue'], resolve);
/**在线存款管理*/
export const FinanceOnlinedeposit = resolve => require(['@/views/finance/Onlinedeposit.vue'], resolve);

/**提款申请管理 */
export const FinanceWithdraw = resolve => require(['@/views/finance/Withdraw.vue'], resolve);
/**会员资金管理 */
export const FinanceFund = resolve => require(['@/views/finance/Fund.vue'], resolve);
/**额度转换管理 */
export const FinanceTransform = resolve => require(['@/views/finance/Transform.vue'], resolve);
/**收支财务总汇 */
export const FinanceSummarizing = resolve => require(['@/views/finance/Summarizing.vue'], resolve);


/**会员返水设置 */
export const RakebackSettings = resolve => require(['@/views/rakeback/Settings.vue'], resolve);
/**会员返水信息 */
export const RakebackInfo = resolve => require(['@/views/rakeback/Info.vue'], resolve);



/* 不在左侧菜单对应的组件 */
/**提款安全警报 */
export const WithdrawSafeWarn = resolve => require(['@/views/finance/WithdrawSafeWarn.vue'], resolve);
/**会员登录日志 */
export const LogLogin = resolve => require(["@/views/member/LogLogin"], resolve);

/**上线提醒 */
export const LoginRemind = resolve=>require(['@/views/rests/LoginRemind'], resolve);
/**转入转出提醒 */
export const IncomeOutRemind = resolve=>require(['@/views/rests/IncomeOutRemind'], resolve);
/**会员取款待审核 */
export const WithdrawTable = resolve=>require(['@/views/finance/WithdrawTable'], resolve);
/**会员入款待审核 */
export const NoAuditList = resolve=>require(['@/views/finance/NoAuditList'], resolve);
/**会员反馈信息 */
export const Feedback = resolve=>require(['@/views/rests/Feedback'], resolve);
/**个人信息 */
export const Personal = resolve=>require(['@/views/rests/Personal'], resolve);

/**会员账户核查组件-会员财务报表|会员投注报表 */
export const StateMember = resolve=>require(['@/views/member/StateMember'], resolve);

export default {
    Home,
    MemberInfo,
    MemberAccount,
    MemberLog,
    MemberCard,
    MemberBlacklist,
    MemberKeyinfo,
    MemberGroup,
    MemberData,
    MemberReport,

    FinanceAddandsubtract,
    FinanceDeposit,
    FinanceOnlinedeposit,

    FinanceWithdraw,
    FinanceFund,
    FinanceTransform,
    FinanceSummarizing,
    RakebackSettings,
    RakebackInfo,
    WithdrawSafeWarn,



    LogLogin,
    LoginRemind,
    IncomeOutRemind,
    WithdrawTable,
    NoAuditList,
    Feedback,
    Personal,
    StateMember,
}