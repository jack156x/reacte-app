//www.yongyisou.com客服插件
//代码维护修改by野狼技术：QQ1615241386
if(show>0){
	document.writeln("<STYLE type=text/css>")
	document.writeln("#backTop {width: 54px;height: 54px;overflow: hidden;right: 15px;position: fixed;z-index: 100;bottom: 30px;}")
	document.writeln("#backTop a {display: block;border-radius: 2px;width: 54px;height: 54px;overflow: hidden;background: url(images/ico_fix.png) no-repeat 0 -118px;}")
	document.writeln("#backTop a:hover {opacity: 0.8;}")
	document.writeln(".yys_kefu * {padding:0px;margin:0px;list-style:none;}")
	document.writeln(".yys_kefu .clearfix:before, .clearfix:after {content: '';display: table;}")
	document.writeln(".yys_kefu .clearfix:after {clear: both;overflow: hidden;}")
	document.writeln(".yys_kefu .clearfix {zoom: 1;}")
	document.writeln(".yys_kefu {font-family: 'microsoft yahei', '宋体', Arial;position:absolute;z-index: 9999;right:0px;top:80px;width:39px;*position:absolute;height:551px;overflow:hidden}")
	document.writeln(".yys_kefu .bd_left {position:absolute;width:39px;height:198px;left:0px;top:100px;background:url(images/kefu_left.png) no-repeat 0 0;cursor:pointer;}")
	document.writeln(".yys_kefu .bd {position:absolute;left:39px;top:0px;padding:80px 15px 10px 15px;background:#FFF url(images/onlinebg.jpg) no-repeat 0 0;border: 1px solid #c9eeff;border-radius: 2px}")
	document.writeln(".yys_kefu .bd ul {line-height: 1.4;}")
	document.writeln(".yys_kefu .bd ul li {margin-bottom: 5px;overflow: hidden;}")
	document.writeln(".yys_kefu .bd ul li .tit {font-size: 14px;}")
	document.writeln(".yys_kefu .bd ul li .btn {margin-bottom: 4px;width: 120px;height: 26px;display: block;text-indent: 44px;color: #FFF !important;font-size: 13px;line-height: 26px;text-decoration: none;}")
	document.writeln(".yys_kefu .bd ul li .qq {background: url(images/btn_qqo.png) no-repeat;}")
	document.writeln(".yys_kefu .bd ul li .baidu {background: url(images/btn_sq.png) no-repeat;}")
	document.writeln(".yys_kefu .bd ul li .erweima {height:120px; width:120px; margin:0px;}")
	document.writeln(".yys_kefu .bd ul li .tel{color: #e00;font-size: 16px;background:none;}")
	document.writeln(".yys_kefu .bd ul li a:hover {filter:Alpha(Opacity=80); /* for IE */opacity: 0.8;}")
	document.writeln(".codeAdv {color: #00a3e9;text-align: center;font-size: 16px;}")
	document.writeln(".codeAdv .hdtxt {font-size: 20px;display: block;margin-bottom: 4px;}")
	document.writeln("</STYLE>")
	document.writeln("<div id='backTop'><a href='#' title='返回顶部'></a></div>")
	document.writeln("<div class='yys_kefu'>")
	 document.writeln(" <div class='bd'>")
	   document.writeln(" <ul>")
	   document.writeln(" <li><span class='tit blue'>QQ咨询</span></li>")	   
	   $.each(qq,function(index,content){
		 document.writeln(" <li><a class='btn qq' target='_blank' title='' href='http://wpa.qq.com/msgrd?v=3&uin="+content.qq+"&site=qq&menu=yes'>"+content.name+"</a></li>")   
	   });	
	   document.writeln("<li><span class='tit'>百度商桥</span></li>")	   
	   $.each(baidu,function(index,content){
		  document.writeln("<li><a class='btn baidu' target='_blank' title='' href='"+content.url+"'>"+content.name+"</a></li>")
	   });
	   document.writeln("<li><span class='tit'>微信咨询</span></li>")
	   document.writeln("<li><img src='images/kefu_erweima.jpg' alt='微信二维码' class='erweima'></li>") 
	   $.each(tel,function(index,content){		         
		  document.writeln("<li><span class='tit'>"+content.name+"</span></li>")
		  document.writeln("<li><span class='tel'>"+content.tel+"</span></li>")
	   });
		document.writeln("</ul>")
	  document.writeln("</div>")
	  document.writeln("<div class='bd_left'>")
	  document.writeln("</div>")
	document.writeln("</div>")
$(function(){
   var Top = ($(window).height() - parseInt($(".yys_kefu").css("height")))/2;
   var isShow = 1;
   $(".yys_kefu").css("top",function(){
	   return Top + 'px';
   });
   $("#backTop").hide();
   var menuYloc = $(".yys_kefu").offset().top;
   $(window).scroll(function (){
	 if(Top < 84 && parseInt($(".yys_kefu").css("width")) > 190)
	    isShow = 0;
	 else 
	    isShow = 1;
	 var offsetTop = menuYloc +$(window).scrollTop()+"px";
	 if ($(window).scrollTop()>400 && isShow != 0){
		$("#backTop").fadeIn(500);
	 }else{
		$("#backTop").fadeOut(500);
	 }
	 $(".yys_kefu").animate({top : offsetTop },{ duration:400, queue:false }); 
   });
 
 $("#backTop").click(function(){
	$('body,html').animate({scrollTop:0},500);
	return false;
 });
  $(".bd_left").toggle_yys(function(){$(".yys_kefu").stop().animate({width:191},300);if(Top < 84){$("#backTop").fadeOut(500);};},function(){$(".yys_kefu").stop().animate({width:39},300);if(Top < 84){$("#backTop").fadeIn(500);};});
 
 });
$.fn.toggle_yys = function( fn, fn2 ) {
    var args = arguments,guid = fn.guid || $.guid++,i=0,
    toggle = function( event ) {
      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
      event.preventDefault();
      return args[ lastToggle ].apply( this, arguments ) || false;
    };
    toggle.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }
    return this.click( toggle );
};

} 
