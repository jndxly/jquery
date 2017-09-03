/* 滑过图片出现放大镜效果 */
$(function(){
	$("#jnBrandList li").each(function(index){
		var $img = $(this).find("img");
		$me = this;
		$img.load(function(){
			var img_w = $img.width();
			var img_h = $img.height();
			var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
			$li = $img.closest('li');
			$(spanHtml).appendTo($li);
		});
	})
	$("#jnBrandList").delegate(".imageMask", "hover", function(){
		$(this).toggleClass("imageOver");
	});
	
	/*
	$("#jnBrandList").find(".imageMask").live("hover", function(){
		$(this).toggleClass("imageOver");
	});
	*/
})