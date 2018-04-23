$(function(){
    //记住密码
    $(".log_tip b input").attr("checked", true);
    $(".log_tip label").on("click",function(){
        if($(".log_tip b input").is(':checked')) {
            $(".log_tip").removeClass("log_tip_noclick");
        }else{
            $(".log_tip").addClass("log_tip_noclick");
        };
    })
    //input框效果
    $(".log_border").on("click",function(){
        $(this).find("input").focus();
    })


//根据不同的入口引用不同的样式和js
    function GetRequest() {
       var url = location.search; //获取url中"?"符后的字串  
       if (url=='?0') {
        $("html,body").css("backgroundColor","#2797c0");
        $(".log_all").removeClass("dis,manu,tax,drug,hospital,health,backstage");
        $(".log_all").addClass("med");
        $(".log_all_f2 h3").text("医疗机构登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #bad8e3 solid","backgroundColor":"#d8f2fb"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }
       else if (url=='?1') {
        $("html,body").css("backgroundColor","#24a9b2");
        $(".log_all").removeClass("dis,med,tax,drug,hospital,health,backstage");
        $(".log_all").addClass("manu");
        $(".log_all_f2 h3").text("生产企业登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #bfdcdc solid","backgroundColor":"#e6ffff"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }
        else if (url=='?2') {
        $("html,body").css("backgroundColor","#2cae85");
        $(".log_all").removeClass("med,manu,tax,drug,hospital,health,backstage");
        $(".log_all").addClass("dis");
        $(".log_all_f2 h3").text("配送企业登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #c8e1d1 solid","backgroundColor":"#f1fef6"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }
       else if (url=='?3') {
        $("html,body").css("backgroundColor","#3fb35c");
        $(".log_all").removeClass("med,manu,dis,drug,hospital,health,backstage");
        $(".log_all").addClass("tax");
        $(".log_all_f2 h3").text("税局登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #d3ead9 solid","backgroundColor":"#f0fff4"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }
       else if (url=='?4') {
        $("html,body").css("backgroundColor","#e59f44");
        $(".log_all").removeClass("med,manu,dis,tax,hospital,health,backstage");
        $(".log_all").addClass("drug");
        $(".log_all_f2 h3").text("药监局登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #e9dcca solid","backgroundColor":"#fff4e5"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }
       else if (url=='?5') {
        $("html,body").css("backgroundColor","#d9b54b");
        $(".log_all").removeClass("med,manu,dis,tax,drug,health,backstage");
        $(".log_all").addClass("hospital");
        $(".log_all_f2 h3").text("医院中心登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #e8e1ca solid","backgroundColor":"#fffcf2"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }
       else if (url=='?6') {
        $("html,body").css("backgroundColor","#a14ee0");
        $(".log_all").removeClass("med,manu,dis,tax,drug,hospital,backstage");
        $(".log_all").addClass("health");
        $(".log_all_f2 h3").text("医保局登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #d5c2e3 solid","backgroundColor":"#eee9fe"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }else if (url=='?7') {
        $("html,body").css("backgroundColor","#2868c1");
        $(".log_all").removeClass("med,manu,dis,tax,drug,hospital,health");
        $(".log_all").addClass("backstage");
        $(".log_all_f1 img").attr("src","images/back-title.png");
        $(".log_all_f2 h3").text("后台管理登录");
        $(".log_border input").on("focus",function(){
            $(this).closest(".log_border").css({"border":"2px #cfd8e5 solid","backgroundColor":"#e4effe"});
        })
        $(".log_border input").on("blur",function(){
            $(this).closest(".log_border").css({"border":"2px #dddddd solid","backgroundColor":"#f3f4f4"});
        })
       }else{
            window.location.href="GuidePage.aspx"; 
       };
    }  
    GetRequest(); 

})