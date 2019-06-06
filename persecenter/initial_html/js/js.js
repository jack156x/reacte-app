
$(function(){
 
 $('.ud-condition').click(function(){   
   $(this).addClass("show");
	if($(".sh-condition").css("display")!='none'){
      $(".sh-condition").hide()//A不显示
	   $(this).removeClass("show");
      }else{
        $(".sh-condition").show()//A不显示
		$(this).addClass("show");
           }
 
});

 
 $('.more-pull-down').click(function(){   
 
	if($("#expendBanks").css("display")!='none'){
      $("#expendBanks").hide()//A不显示
	   $(this).children('i').removeClass("up");
	   $(this).children('i').addClass("down");
	   
      }else{
        $("#expendBanks").show()//A不显示
		$(this).children('i').addClass("up");
		$(this).children('i').removeClass("down");
		 
           }
 
});

 $('.bank-spreadout .down').click(function(){   
  
      $(".bank-spreadout .up").show();
	  $(".other").show();
	  $(".bank-spreadout .down").hide();
	  
	  
	  
});
 $('.bank-spreadout .up').click(function(){   
  
      $(".bank-spreadout .down").show();
	  $(".other").hide();
	  $(".bank-spreadout .up").hide();
	  
});


 $('.bank-spreadout .down').click(function(){   
  
      $(".bank-spreadout .up").show();
	  $(".other").show();
	  $(".bank-spreadout .down").hide();
	  
	  
	  
});
 $('.bank-spreadout .up').click(function(){   
  
      $(".bank-spreadout .down").show();
	  $(".other").hide();
	  $(".bank-spreadout .up").hide();
	  
});


  $('.moneyhide .ico-ask').click(function(){   
 
	if($(this).hasClass('show')){
   	   $(this).removeClass("show");
	   $(this).addClass("hide");
	   $(".assets-money").hide();
	   $(".hide-assets").show();
      }else{
       $(this).removeClass("hide");
	   $(this).addClass("show");
	   $(".assets-money").show();
	   $(".hide-assets").hide();
	   
           }
 
  });
});