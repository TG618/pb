$(function(){
	$(window).resize(function(){
		var cliwidth=document.body.clientWidth;
		var divwidth=cliwidth-2;
		$('music').css("width",divwidth+"px");
	})
})
$(function(){
	$(window).resize(function(){
		var cliheight=document.body.clientHeight;
		var divheight=cliheight-10;
		$('text .textcell').css("height",divheight+"px");
	})
})
