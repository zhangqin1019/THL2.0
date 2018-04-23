function messages(){
    art.dialog({
        lock:true,
        title: '编辑模块名称',
        content:'<div class="alert_con">'+
                    '<table class="edit_table">'+
                        '<tbody>'+
                            '<tr class="edit_name">'+
                                '<td class="edit_f1"><input  type="text" value="模块名称"/></td>'+
                                '<td class="edit_f2"><input id="cheakbox_val" type="hidden" value=""/><input  type="text" placeholder="模块路径"/></td>'+
                                '<td><a class="edit_add" href="JavaScript:;"><span>添加子层</span></a></td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>',
        okVal: '确定',
        ok: function () {},
        cancelVal:'关闭',
        cancel: function () {}
    });
}

//弹出层 编辑 删除功能
$(function(){
    var html = "<tr class='edit_name'><td class='edit_f1'><input type='text' placeholder='子层模块名称'/></td><td class='edit_f2'><input  type='text' placeholder='新模块路径'/></td><td><a class='edit_del' href='JavaScript:;'><span>删除</span></a></td></tr>";

    $(".edit_del").live("click",function(){
      $(this).closest(".edit_name").remove();
    });
    $(".edit_add").live("click",function(){
      $(this).closest("tbody").append(html);
    });
    $(".parent_li a").live("mouseenter",function(){
      $(this).find("b").show();
    });
    $(".parent_li a").live("mouseleave",function(){
      $(this).find("b").hide();
    });
});

