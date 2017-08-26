$(function(){
	$tooltip = $('#jnNoticeInfo ul li a');
	var x= 10, y = 20;
	$tooltip.hover(function(e){
		
		this.myTitle = this.title;
		this.title = "";
//		var txt = $(this).text();
		var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
		$('body').append(tooltip);
		$('#tooltip').css({
			"left":(e.pageX + x) + "px",
			"top":(e.pageY + y) + "px"
			
		}).show("fast");
	},function(e){
		this.title = this.myTitle;
		$("#tooltip").remove();
	});
	$tooltip.mousemove(function(e){
		$('#tooltip').css({
			"left":(e.pageX + x) + "px",
			"top":(e.pageY + y) + "px"
			
		});
		
	})
});
/* 超链接文字提示 */
/* 超链接文字提示 */
//$(function(){
//    var x = 10;  
//	var y = 20;
//	$("a.tooltip").mouseover(function(e){
//       	this.myTitle = this.title;
//		this.title = "";	
//	    var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>"; //创建 div 元素
//		$("body").append(tooltip);	//把它追加到文档中
//		$("#tooltip")
//			.css({
//				"top": (e.pageY+y) + "px",
//				"left": (e.pageX+x)  + "px"
//			}).show("fast");	  //设置x坐标和y坐标，并且显示
//    }).mouseout(function(){		
//		this.title = this.myTitle;
//		$("#tooltip").remove();   //移除 
//    }).mousemove(function(e){
//		$("#tooltip")
//			.css({
//				"top": (e.pageY+y) + "px",
//				"left": (e.pageX+x)  + "px"
//			});
//	});
//})
	
	
	
	
//});