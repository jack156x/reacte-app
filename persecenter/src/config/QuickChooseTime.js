// 游戏公告的时间快选功能
export const quickChooseTime=[{
    text: '今天',
    onClick(picker) {
        picker.$emit('pick', [new Date(),new Date()]);
    }
}, {
    text: '昨天',
    onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', [date,new Date()]);
    }
}, 
{
    text: '本周',
    onClick(picker) {
        const start = new Date();
        const nowDayweek = start.getDay();
        const nowYear= start.getFullYear();
        const nowMonth = start.getMonth();
        const nowDay = start.getDate()+1;
        const startdate= new Date(nowYear,nowMonth,nowDay - nowDayweek)
        const weekEndDate= new Date(nowYear, nowMonth, nowDay + (6 - nowDayweek))
        picker.$emit('pick', [startdate, weekEndDate]);
    }
},
{
    text: '上周',
    onClick(picker) {
        const start = new Date();
        const nowDayweek = start.getDay();
        const nowYear= start.getFullYear();
        const nowMonth = start.getMonth();
        const nowDay = start.getDate()+1;
        const startdate= new Date(nowYear,nowMonth,nowDay - nowDayweek-7)
        const weekEndDate= new Date(nowYear, nowMonth, nowDay + (nowDayweek-7))
        picker.$emit('pick', [startdate, weekEndDate]);
    }
},
{
    text: '本月',
    onClick(picker) {
        const start = new Date();
        const nowYear= start.getFullYear();
        const nowMonth = start.getMonth();
        const monthstartDate= new Date(nowYear,nowMonth,1);
        const monthendDate=new Date(nowYear,nowMonth+1,1);
        const lastDaty=(monthendDate - monthstartDate)/(1000 * 60 * 60 * 24);
        const monthEndDate= new Date(nowYear, nowMonth,lastDaty);
        picker.$emit('pick', [monthstartDate, monthEndDate]);
    }
},
{
    text: '上月',
    onClick(picker) {
        const start=new Date();
        const lastMonthDate = new Date();
        lastMonthDate.setDate(1);
        lastMonthDate.setMonth(lastMonthDate.getMonth()-1);
        const nowYear= start.getFullYear();
        const lastMonth = lastMonthDate.getMonth();
        const lastMonthStartDate = new Date(nowYear, lastMonth, 1);
        const lastMonthEndDate = new Date(nowYear, lastMonth + 1, 1);
        const lastDay=(lastMonthEndDate - lastMonthStartDate)/(1000 * 60 * 60 * 24)
        const lastMonthEndDates = new Date(nowYear, lastMonth, lastDay);
        picker.$emit('pick', [lastMonthStartDate,lastMonthEndDates]);
    }
},
{
    text: '最近7天',
    onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
    }
},{
    text: '最近30天',
    onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
    }
}];
export const options=[{
    value: '',
    label: '所有游戏'
    }, {
    value: '选项2',
    label: '旧GG捕鱼'
    }, {
    value: '选项3',
    label: 'SG电子'
    }, {
    value: '选项4',
    label: 'Ebet如意厅'
    }, {
    value: '选项5',
    label: 'AG大厅'
    },{
    value:'选项6',
    label:'MG电子'
}]