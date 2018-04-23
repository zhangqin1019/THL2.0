$(function(){
      // 表格行选中背景变灰色
      $(".listd-table tr td input").on("click",function(){
        if($(this).is(':checked')) {
          $(this).closest("tr").addClass("checked_tr");
        }else{
          $(this).closest("tr").removeClass("checked_tr");
          $(".listd-table .mar_rt").attr("checked", false);
        }
      });
      //表格全选_取消全选
      $(".listd-table input:checkbox").attr("checked", false);
      //初始化,载入取消全选
      $(".listd-table .mar_rt").on("click",function(){
        if($(this).is(':checked')) {
          $(".listd-table input:checkbox").attr("checked", true);
          $(".listd-table tr").addClass("checked_tr");
        }else{
          $(".listd-table input:checkbox").attr("checked", false);
          $(".listd-table tr").removeClass("checked_tr");
        }
      });
      table_bg();
      //点击分页按钮背景变蓝色
      $(".num-page .num-click").click(function(){
        $(this).addClass("page-bg");
        $(this).siblings().removeClass("page-bg");
      });
      //表格点击设置出现自定义列表
      $(".custom").click(function(){
        $(this).css("background-color","#019dd6");
        $(".field").css("display","block");
      });
      $(".custom").mouseleave(function(){
        $(".field").css("display","none");
        $(".custom").css("background-color","#9b9b9b");
      });
      //表格自定义按钮 移到鼠标才出现
      custom();     
      //(table自定义列)根据勾选内容,显示/隐藏 列(翻页需调用)
      table_title();  
      $(".field-content input").on("click",function(){
        table_click();
      })
      //表格滚动
      table_scroll();
      //(自定义)自定义列条件
      $(".zdy").click(function(){
        $(this).css("background-color","#019dd6");
        $(".else_hide").css("display","block");
        var asq = $(".asq").text();
        if (asq=='显示全部') {
            $(".asq").text("收起");
            $(".asq").css("background","url(/src/images/up_icon.png) no-repeat #9b9b9b right center");
            $(".search-list").animate({ 'max-height':'600px'});
        };
      });
      $(".zdy").mouseleave(function(){
        $(".else_hide").css("display","none");
        $(".search-right .zdy").css("background-color","#9b9b9b");
      });
      else_title();
      else_click();  
      $(".else_hide input").on("click",function(){
        else_click();
      })
      //(自定义)条件展开收起
      $(".asq").on("click",function(){
        var asq = $(".asq").text();
        if (asq=='显示全部') {
          $(".asq").text("收起");
          $(".asq").css("background","url(/src/images/up_icon.png) no-repeat #9b9b9b right center");
          $(".search-list").animate({ 'max-height':'600px'});
        }else{
          $(".asq").text("显示全部");
          $(".asq").css("background","url(/src/images/down_icon.png) no-repeat #019dd6 right center");
          $(".search-list").animate({ 'max-height':'61px'},100);
        };
      });
      //(自定义)条件文字长度控制
      $(".fm-title").each(function(){
        if($.trim($(this).text()).length>4){
          $(this).css("line-height","18px")
        }
      })
      //高级搜索
      $(".top_search").on("click",function(){
        var top_search = $(this).text();
        if (top_search=="高级搜索") {
          $(this).text("关闭高级搜索");
          $(".search-content").slideDown();
        }else{
          $(this).text("高级搜索");
          $(".search-content").slideUp();
        };
      });
});
function table_click(){
  $(".field-content input").each(function(i){
    if ($(this).is(':checked')) {
      $(this).closest(".layout-all").find(".layout-table").find(".listd-table tr th").eq(i).show();
      $(this).closest(".layout-all").find(".layout-table").find(".listd-table tr td:nth-child("+(i+1)+")").show();
    }else{
      $(this).closest(".layout-all").find(".layout-table").find(".listd-table tr th").eq(i).hide();
      $(this).closest(".layout-all").find(".layout-table").find(".listd-table tr td:nth-child("+(i+1)+")").hide();
    };
  });
}
//(自定义)根据勾选内容,显示/隐藏搜索条件
function else_click(){
  var url_name = pageName();
  $(".else_hide input").each(function(i){
    if ($(this).is(':checked')) {
        $(this).closest(".search-content").find(".search-list .fm-item").eq(i).show();
        $.cookie(url_name+i,1,{expires: 365});
      }else{
        $(this).closest(".search-content").find(".search-list .fm-item").eq(i).hide();
        $.cookie(url_name+i,0,{expires: 365});
      };
    var input_len = $(".else_hide input:checkbox:checked").length;  
    if(input_len<4&&input_len>0) {
      $(".search-btn,.asq").hide();
      $(".search-btn2").show();
    }else if(input_len==0) {
      $(".search-btn2,.search-btn").hide();
    }else{
      $(".search-btn2").hide();
      $(".search-btn,.asq").show();
    }; 
  });
}
//(自定义)根据勾选内容,url文件名称
function pageName(){
  var url_all = location.href;
  var url_some = url_all.split("/");
  var url_rel = url_some.slice(url_some.length-1, url_some.length).toString(String).split(".");
  return url_rel.slice(0, 1);
}
//(自定义)获取自定义条件字段,并加入到html
function else_title(){
  var url_name = pageName();
  $(".fm-title").each(function(i){
    var else__w= $(this).text();
    $.cookie(url_name+i);
    if($.cookie(url_name+i)==1){
        $(".else_hide ul").append('<li><label><input type="checkbox" name="'+url_name+i+'" checked="checked"/>'+else__w+'</label></li>');
    }else if($.cookie(url_name+i)==0){
        $(".else_hide ul").append('<li><label><input type="checkbox" name="'+url_name+i+'"/>'+else__w+'</label></li>');
    }else{
      $(".else_hide ul").append('<li><label><input type="checkbox"  checked="checked"/>'+else__w+'</label></li>');
    }
  });
}
 //(table自定义列)获取表格字段,并加入到html
function table_title(){
  $(".layout-table .listd-table tr th").each(function(){
    var value_w= $(this).text();
    if (value_w==''||value_w=='序号'||value_w=='操作'){
      $(".field-content").append('<label style="display:none"><input type="checkbox" checked="checked"/><span class="tab">NULL</span></label>');
    }else{
      $(".field-content").append('<label><input type="checkbox" checked="checked"/><span class="tab">'+value_w+'</span></label>');
    };
  });
}
//表格隔行换色
function table_bg(){
  $(".listd-table tr:odd").css("backgroundColor","#fbfeff");
  $(".listd-table tr:even").css("backgroundColor","#eff0f2");
}
//当表格超出时出现滚动条
function table_scroll(){
  if($(".listd-table").width()>$(".layout-table").width()){
    $(".layout-table").addClass("scroll");
  }else{
    $(".layout-table").removeClass("scroll");
  }
}
//表格外面操作数量为0时,外面的div隐藏
// function table_icon(){
//   var icon_num = $(".btn-list a").length;
//   if (icon_num==0) {
//     $(".btn-list").hide();
//   };
// }
//表格自定义按钮 移到鼠标才出现
function custom(){
  $(".listd-table,.custom").mouseenter(function(){
  $(".custom").css("display","block");
  });
  $(".listd-table,.custom").mouseleave(function(){
    $(".custom").css("display","none");
  });
}
//all
function all(){
  table_click();table_bg();table_scroll();custom();
}