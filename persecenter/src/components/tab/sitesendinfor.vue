<template>
    <div>
        <!-- 站点公告发送消息 -->
        <form method="post" novalidate="novalidate">
            <div class="follow-question">
                <div class="control-group">
                    <label class="control-label" style="line-height: 12px;">问题类型：</label>
                       <select class="controls pt-0" name="advisoryType">
                            <option value="offerApplication">优惠申请</option>
                            <option value="financeProblem">财务问题</option>
                            <option value="suggest">意见建议</option>
                            <option value="otherProblem">其他问题</option>
                        </select>
            </div>
                <div class="control-group">
                    <label class="control-label">标题：</label>
                    <div class="controls">
                        <input type="text" name="result.advisoryTitle" maxlength="100" class="input-big" placeholder="请输入2-100个字符" aria-required="true" aria-invalid="true"><span class="tips orange"><i class="mark plaintsmall"></i>请填写标题！</span>
                        <p class="character msg">0/100</p>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label">内容：</label>
                    <div class="controls">
                    <textarea class="textarea-big" maxlength="2000" name="result.advisoryContent" style="height: 180px;" placeholder="至少输入1个字符"></textarea>
                        <p class="character textareaMsg">0/2000</p>
                    </div>
                </div>
                <div class="submit">
                <a title="提交" class="btn btn-blue middle-big">
                        提交
                </a>
                <a title="取消" class="btn btn-blue middle-big">
                        取消
                  </a>
               </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.follow-question {
    margin: 20px;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.clearfix:before, .clearfix:after, .row:before, .row:after, .control-group:before, .control-group:after {
    display: table;
    content: " ";
}
.control-group .control-label {
    float: left;
    width: 114px;
    padding-top: 10px;
    text-align: right;
    vertical-align: top;
}
.control-group .controls {
    vertical-align: middle;
    padding-top: 5px;
    position: relative;
    float: left;
    max-width: 800px;
}
.pt-0 {
    padding-top: 0!important;
}
select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input {
    display: inline-block;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    vertical-align: middle;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}
select, input[type="file"] {
    height: 30px;
    line-height: 30px;
}
select {
    background-color: #fff;
    border: 1px solid #ccc;
}
.clearfix:after, .row:after, .control-group:after {
    clear: both;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.control-group .control-label {
    float: left;
    width: 114px;
    padding-top: 10px;
    text-align: right;
    vertical-align: top;
}
.control-group .controls {
    vertical-align: middle;
    padding-top: 5px;
    position: relative;
    float: left;
    max-width: 800px;
}
.follow-question .controls span.tips {
    position: absolute;
    display: block;
    line-height: 30px;
    top: 7px;
    left: 500px;
    width: 350px;
}
.tips {
    font-size: 13px;
}
.character {
    text-align: right;
    position: absolute;
    bottom: 12px;
    right: 24px;
    color: #ccc;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.control-group .control-label {
    float: left;
    width: 114px;
    padding-top: 10px;
    text-align: right;
    vertical-align: top;
}
.textarea-big {
    background: #fff;
    border: 1px solid #cecfd0;
    padding-left: 10px;
    margin-right: 5px;
    width: 465px!important;
    height: 100px;
    padding: 10px;
    padding-bottom: 20px;
}
.character {
    text-align: right;
    position: absolute;
    bottom: 12px;
    right: 24px;
    color: #ccc;
}
.follow-question .submit {
    margin-left: 113px;
}
.middle-big {
    width: 93px;
    border-radius: 3px;
    text-align: center;
    font-family: "Microsoft YaHei";
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
.btn-blue {
    background: #2772ee!important;
    color: #fff!important;
    border: 1px solid #2772ee!important;
}
.error {
    border: 1px solid #f34235;
}
.input-big {
    background: #fff;
    border: 1px solid #cecfd0;
    height: 30px;
    line-height: 30px;
    width: 400px;
    padding-left: 10px;
    margin-right: 5px;
    padding-right: 75px;
}
.mark.plaintsmall {
    background-position: -46px -7px;
    margin-top: -3px;
}
.mark {
    display: inline-block;
    padding-right: 5px;
    vertical-align: middle;
    width: 18px;
    height: 19px;
    background: url("../../assets/images/mark.png") no-repeat top left;
    cursor: pointer;
}
</style>