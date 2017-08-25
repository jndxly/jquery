$(function(){
	var index = 0;
	showImg(index);
	
	var $roll = $('#jnImageroll div a');
	$roll.hover(function(){
		if(timer){
			
			clearInterval(timer);
		}
		index = $roll.index(this);
		showImg(index);
	},function(){
		timer = setInterval(function(){
			showImg(index);
			index = ++index % 5;
		},5000);
	});
	
	var timer = setInterval(function(){
		showImg(index);
		index = ++index % 5;
	},5000);
	
	function showImg(len){
		var $img = $('#JS_imgWrap img');
		var $roll = $('#jnImageroll div a');
//		$img.eq(len).show().siblings().hide();
		$img.eq(len).stop(true,true).fadeIn().siblings().fadeOut();
//		$roll.eq(len).focus().siblings().blur();
		$roll.removeClass("chos").css("opacity", "0.7").eq(len).addClass("chos").css("opacity","1");
		
	}
	
	
}
		
);