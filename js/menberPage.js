$(function(){
    //选项卡切换
    $(".menber_nav li").on("click",function(){
        $(".menber_nav li a").removeClass("menber_box_cur");
        $(this).find("a").addClass("menber_box_cur");
        $(".menber_term").hide().eq($(".menber_nav li").index(this)).fadeIn();
        $(".menber_next,.menber_prev").attr("name",$(".menber_nav li").index(this));
        var num=$(this).nextAll().length, max=$(".menber_nav li").length-1;
        if(num==0){
            $(".menber_next").hide();
            $(".menber_prev,.menber_sub").show();
            $(".menber_sub").css("background-color","#019dd6");
        }else if(num==max){
            $(".menber_prev,.menber_sub").hide();
            $(".menber_next").show().css("background-color","#019dd6");
        }else{
            $(".menber_sub").hide();
            $(".menber_prev,.menber_next").show();
        }
    })
    $(".menber_next").on("click",function(){
        var input_num= $(this).attr("name");
        var input_num= parseInt(input_num);
        var input_max=$(".menber_nav li").length;
        for (var i = 0; i < input_max; i++) {
            if (input_num==i) {
                var relt_num=input_num+1;
                $('.menber_nav li a:eq('+relt_num+')').click();
                $(".menber_next,.menber_prev").attr("name",relt_num);
            };
        };
    })
    $(".menber_prev").on("click",function(){
        var input_num= $(this).attr("name");
        var input_num= parseInt(input_num);
        var input_max=$(".menber_nav li").length;
        for (var i = 1; i < input_max; i++) {
            if (input_num==i) {
                var relt_num=input_num-1;
                $('.menber_nav li a:eq('+relt_num+')').click();
                $(".menber_next,.menber_prev").attr("name",relt_num);
            };
        };
    })

    //判断选项卡数量分配选项卡宽(百分比)
    var nav_num = $(".menber_nav li").length;
    var nav_ps = 100/nav_num;
    if (nav_num>5) {
        $(".menber_box .menber_nav li a").css("font-size","12px")
    };
    $(".menber_box .menber_nav li").css("width",""+nav_ps+"%");
    //条件文字长度控制
    $(".menber_li span").each(function(){
        if($(this).text().length>6){
          $(this).css("line-height","18px")
        }
    })
    //上传按钮hover
    $(".menber_file").on("mouseenter",function(){
        $(this).closest(".menber_up").find(".menber_upload").css("background","url(/src/images/upload.png) no-repeat #019dd6 15px 6px")
    })
    $(".menber_file").on("mouseleave",function(){
        $(this).closest(".menber_up").find(".menber_upload").css("background","url(/src/images/upload.png) no-repeat #9b9b9b 15px 6px")
    })
    
})