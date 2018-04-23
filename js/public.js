$(function(){
  $("body").on("click",function(){
    parent.$('.y_rt',parent.document).trigger('click');
  })


//加载页面前执行(页面正在加载)
	loading_start();
	//页面加载完成时执行
	$(window).load(function(){
	    loading_end();
	});

})
//加载页面前执行(页面正在加载)
 	function loading_start(){
	   var h = $(window).height();
	   $(".overlay").css({"height": h });
	   $(".overlay").css({'display':'block','opacity':'0.7','filter':'alpha(opacity=0.7)'});
	   $(".showbox").show();
	   $(".showbox").stop(true).animate({'top':'44%','opacity':'1'},200);
	}

	//加载页面结束执行
	 function loading_end(){
	  setTimeout(function(){
	      $(".showbox").stop(true).animate({'top':'50%','opacity':'0'},400,function(){
            $(".showbox").fadeOut();
          });
	      $(".overlay").css({'display':'none','opacity':'0'});
	  },200);
	}