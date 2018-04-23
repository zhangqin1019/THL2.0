
function tree(data) {
    for (var i = 0; i < data.length; i++) {
        var data2 = data[i];
        if (data[i].icon == "icon-th") {
            $("#rootUL").append("<li data-name='" + data[i].code + "'><a><i class='" + data[i].icon + "'></i> " + data[i].name + "</a></li>");
        } else {
            var children = $("li[data-name='" + data[i].parentCode + "']").children("ul");
            if (children.length == 0) {
                $("li[data-name='" + data[i].parentCode + "']").append("<ul></ul>")
            }
            $("li[data-name='" + data[i].parentCode + "'] > ul").append(
                "<li data-name='" + data[i].code + "'>" +
                "<a>" +
                "<i class='" + data[i].icon + "'></i> " +
                data[i].name +
                "</a>" +
                "</li>")
        }
        for (var j = 0; j < data[i].child.length; j++) {
            var child = data[i].child[j];
            var children = $("li[data-name='" + child.parentCode + "']").children("ul");
            if (children.length == 0) {
                $("li[data-name='" + child.parentCode + "']").append("<ul></ul>")
            }
            $("li[data-name='" + child.parentCode + "'] > ul").append(
                "<li data-name='" + child.code + "'>" +
                "<a>" +
                "<i class='" + child.icon + "'></i> " +
                child.name +
                "</a>" +
                "</li>")
            var child2 = data[i].child[j].child;
            tree(child2)
        }
        tree(data[i]);
    }

}
    
function tree_date(){
    $('.tree li:has(ul)').addClass('parent_li').find(' > a > strong').attr('title', '关闭');
    $('.tree li.parent_li > a > strong').on('click', function (e) {
        var children = $(this).parent().parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', '展开').siblings(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', '关闭').siblings(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
            e.stopPropagation();
    }); 

    $("#rootUL > li > ul >li").each(function(){
        $(this).find("ul > li").addClass("border-left");
    });
//向里外都选择
    $("#rootUL li input").on('click',function(){
        var ul = $(this).parents("ul");
        function cen_(){
            ul.each(function(i,e){
                var length = $(e).find(":checked").length;
                if(parseInt(length) > 0){
                    $(e).addClass("check_str");
                    $(this).prev("a").find("label").addClass("check_str");
                    $(this).prev("a").find("input").attr("checked",true);
                }else{
                    $(e).removeClass("check_str");
                    $(this).prev("a").find("label").removeClass("check_str");
                    $(this).prev("a").find("input").attr("checked",false);
                }
            }); 
        }
        cen_();
        if ($(this).is(":checked")) {
                $(this).next("label").addClass("check_str");
                $(this).closest("a").next("ul").find("label").addClass("check_str");
                $(this).closest("a").next("ul").find("input").attr("checked",true);
        }else{
                $(this).next("label").removeClass("check_str");
                $(this).closest("a").next("ul").find("label").removeClass("check_str");
                $(this).closest("a").next("ul").find("input").attr("checked",false);
                cen_();
        }
    });
//向里选择
    // $("#rootUL li input").on('click',function(){
    //     var ul = $(this).parents("ul");
    //     function cen_(){
    //             var length = $(this).find(":checked").length;
    //             if(parseInt(length) > 0){
    //                 $(this).addClass("check_str");
    //                 $(this).prev("a").find("label").addClass("check_str");
    //                 $(this).prev("a").find("input").attr("checked",true);
    //             }else{
    //                 $(this).removeClass("check_str");
    //                 $(this).prev("a").find("label").removeClass("check_str");
    //                 $(this).prev("a").find("input").attr("checked",false);
    //             }
    //     }
    //     cen_();
    //     if ($(this).is(":checked")) {
    //             $(this).next("label").addClass("check_str");
    //             $(this).closest("a").next("ul").find("label").addClass("check_str");
    //             $(this).closest("a").next("ul").find("input").attr("checked",true);
    //     }else{
    //             $(this).next("label").removeClass("check_str");
    //             $(this).closest("a").next("ul").find("label").removeClass("check_str");
    //             $(this).closest("a").next("ul").find("input").attr("checked",false);
    //             cen_();
    //     }
    // });
    //文件夹打开/关闭初始化
    $("#rootUL li strong").each(function(i,e){
            var tit = $(e).attr("title");
            if (tit =="关闭"){
                $(this).prev("span").find("img").attr("src","/src/images/folder-open.png");
                $(e).prev(".l").find("img").attr("src","/src/images/folder-open.png");
            }
            if (tit =="展开"){
                $(this).prev("span").find("img").attr("src","/src/images/list-sel.png");
                $(e).prev(".l").find("img").attr("src","/src/images/list-sel.png");
               }
    });
    //文件夹点击事件
    $("#rootUL li strong").on('click',function(){
        var ul = $(this).parents("ul").find("strong");
        ul.each(function(i,e){
            var tit = $(e).attr("title");
            if (tit =="关闭"){
                $(this).prev("span").find("img").attr("src","/src/images/folder-open.png");
                $(e).prev(".l").find("img").attr("src","/src/images/folder-open.png");
            }
            if (tit =="展开"){
                $(this).prev("span").find("img").attr("src","/src/images/list-sel.png");
                $(e).prev(".l").find("img").attr("src","/src/images/list-sel.png");
            }
        }); 
    });
}
$(function(){
    tree_date();
})