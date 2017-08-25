$(function(){
	$('#inputSearch').focus(function(){
		$('#inputSearch').addClass('focus');
		var val = $('#inputSearch').val();
		if(val && val == this.defaultValue){
			
			$('#inputSearch').val("");
		}
		
	}).blur(function(){
		$('#inputSearch').removeClass('focus');
		var val = $('#inputSearch').val();
		if(val && val == ""){
			
			$('#inputSearch').val(this.defaultValue);
		}
	}).keyup(function(e){
		if(e.which == 13){
			
			alert('提交表单成功');
		}
		
	});
	
	
	
})