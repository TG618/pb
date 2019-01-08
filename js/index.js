$(function(){
	$(window).resize(function(){
		var cliwidth=document.body.clientWidth;
		var divwidth=cliwidth-2;
		$('music').css("width",divwidth+"px");
	})
})

