//ie6 ie7处理
$(document).ready(function(){  
    if(navigator.userAgent.indexOf("MSIE")>0){   
        if(navigator.userAgent.indexOf("MSIE 6.0")>0){   
          alert("你的浏览器版本太旧,请升级或使用主流的浏览器(谷歌,火狐等等)!");   
          window.close();
        }   
        // if(navigator.userAgent.indexOf("MSIE 7.0")>0){  
        // alert("你的浏览器版本太旧,请升级或使用主流的浏览器(谷歌,火狐等等)!");   
        // window.close();
        // }   
    } 
//用户框 登录后鼠标移上去出现退出框
    var stc;
    $(".D2_user_name,.D2_user_pic").live("mousemove mouseenter",function(){ 
        $(".D2_user_hide").show();
    }); 
    $(".D2_user_hide").live("mousemove",function(){     
        if(stc){
            clearTimeout(stc);//清除定时器
        }
        $(".D2_user_hide").show();
    }); 
    $(".D2_rt_user").live("mouseleave",function(){ 
        stc = setTimeout(function (){           
            $(".D2_user_hide").hide();
            clearTimeout(stc);
        },800);    
    });
//框架宽度高度%
    function down_height() {
        var win_h = $(window).height();
        var y_top = $(".D2_logo").height();
        $(".y_main,.y_rt").css("height", win_h);
        $(".y_lt,.y_lt_small").css("height", win_h - y_top);
        $(".y_iframe,.tab_iframe").css("height", win_h - y_top);
    };
    down_height();
//窗口变化,对应尺寸变化    
    $(window).resize(function(){
        var win_w = $(window).width();
        down_height();
        if (win_w<770) {
          $(".D2_rt_menber").hide();
        }else{
          $(".D2_rt_menber").show();
        }
    });
//菜单折叠
    $(".D2_red").on("click",function(){
        $(this).hide();
        $(".y_lt,.D2_logo_rt").hide();
        $(".D2_red2,.y_lt_small").show();
        $(".D2_logo").css("width","80px");
        $(".y_rt").css("margin-left","80px");
    });
    $(".D2_red2").on("click",function(){
        $(this).hide();
        $(".D2_red,.y_lt,.D2_logo_rt").show();
        $(".y_lt_small").hide();
        $(".D2_logo").css("width","200px");
        $(".y_rt").css("margin-left","200px");
    });
//菜单折叠后
    $(".sf-menu > li > a").on("mouseenter",function(){       
        $(this).find("img").hide();
        $(this).find("p").show();
    });
    $(".sf-menu > li > a").on("mouseleave",function(){       
        $(this).find("p").hide();
        $(this).find("img").show();
    });
//菜单展开 点击空白关闭菜单    
    $(function(){
        $(".y_rt").on("click",function(){
            $(".sf-menu ul").hide();
        });
    });
    //加载页面前执行(页面正在加载)
    function loading_start(){
       var h = $(window).height();
       $(".overlay").css({"height": h });
       $(".overlay").css({'display':'block','opacity':'0.7','filter':'alpha(opacity=0.7)'});
       $(".showbox").stop(true).animate({'top':'44%','opacity':'1'},200);
    }
    loading_start();
    //加载页面结束执行
     function loading_end(){
      setTimeout(function(){
          $(".showbox").stop(true).animate({'top':'50%','opacity':'0'},400,function(){
            $(".showbox").fadeOut();
          });
          $(".overlay").css({'display':'none','opacity':'0'});
      },200);
    }
    //页面加载完成时执行
    $(window).load(function(){
        loading_end();
    });

}); 

