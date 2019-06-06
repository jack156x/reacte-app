<template>
    <div>
        <!-- 团队记录 -->
        <div id="playerRecommendAward">
            <div class="invite-way teamRecord">
                <div class="titleline"><h2>直属团队</h2></div>
                <div class="invite-box chart-table">
                    <table class="table table-striped table-hover dataTable" width="100%" border="1" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th style="text-align: center;border:1px solid #ededed;width: 34%">玩家账号</th>
                            <th style="text-align: center;border:1px solid #ededed;width: 34%">推荐玩家数</th>
                            <th style="text-align: center;border:1px solid #ededed;width: 34%">今日新增推荐</th>
                        </tr>
                        </thead><thead>
                        </thead><tbody>
                        <tr>
                                <td style="text-align: center;border:1px solid #ededed;width: 34%">linda(自身)</td>
                                <td style="text-align: center;border:1px solid #ededed;width: 34%">0</td>
                                <td style="text-align: center;border:1px solid #ededed;width: 34%">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.invite-way {
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid #d8dee0;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 2px 3px 0 #eef4f7;
}
.invite-total .titleline, .invite-way .titleline {
    border-top: 1px solid #d8dee0;
    position: relative;
    margin-top: -21px;
}
.invite-total h2, .invite-way h2 {
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    background: #fff;
    width: 100px;
    margin-left: 20px;
    top: -15px;
    text-align: center;
    font-weight: bold;
}
.invite-box {
    margin-top: 30px;
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
</style>