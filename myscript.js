$(document).ready(function(){
	
	$("#hide").click(function(){
		$("p").hide();
	});
	$("img").click(function(){
		$("p").show();
		$(".stl").css({"color":"red","background-color":"black"});
	});
});