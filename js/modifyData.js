$(function(){
	//进度条
	var modifymuch = $(".modify-much b").text();
	$(".pro-list").css("width",''+modifymuch+'%');
	if (modifymuch>=80) {
		$(".pro-list").css("background-color","#6eca5e")
	}else if(modifymuch>=30&&modifymuch<80){
		$(".pro-list").css("background-color","#dfa152")
	}
	else if(modifymuch<30){
		$(".pro-list").css("background-color","#e35a53")
	};		
	//无序列表隔行换色
	$(".modify-list ul li:nth-child(even)").addClass("even");
	$(".modify-list ul li").last().css("border-bottom","none");
	//编辑收起js
	$(".modify-list li .modify-edit").on("click",function(){
		$(this).each(function(){
			if($(".modify-edit").is(":hidden")){
				$(".modify-list li .modify-up").click();
			}
		})
		$(this).hide();
		$(this).next(".modify-up").show();
		$(this).closest("li").css("height","auto").find(".modify_hide").show();
	})
	$(".modify-list li .modify-up").on("click",function(){
		$(this).hide();
		$(this).prev(".modify-edit").show();
		$(this).closest("li").css("height","38px").find(".modify_hide").hide();
	})
	$(".menber_sub").on("click",function(){
		$(".modify-up,.modify_hide").hide();
		$(".modify-edit").show();
	})
})