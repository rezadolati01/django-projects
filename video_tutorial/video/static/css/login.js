"use strict";
var script = document.createElement('script');
$(document).ready(function(){
	$('#sabt-e-nam').click(function(){
		$('#popy').css('display','none');
		$('#popy2').css('display','block');
	});
	$('#vo-rood').click(function(){
		$('#popy2').css('display','none');
		$('#popy').css('display','block');
	});
	$('#bazgasht').click(function(){
		location.reload();
	});
});