$(function(){
	$('#skin li').click(function(){
		
		switchSkin(this.id);
		
		
	});
	
	var skin = $.cookie("mySkinClass");
	if(skin){
		switchSkin(skin);
		
	}
	
	
});

function switchSkin(skin){
		
		$("#" + skin).addClass("selected").siblings().removeClass('selected');;
		$.cookie("mySkinClass",skin, { path: '/', expires: 10 });
		$("#cssfile").attr('href',"styles/skin/" + skin + ".css")
	}