$(document).ready(function(){
	$('#slidshow > section:last').css('display','block');
	setInterval(function(){
			$('#slidshow > section:last').fadeOut(1500);
			$('#slidshow > section:first').appendTo('#slidshow');
			$('#slidshow > section:last').fadeIn(1500);
	},6000);
    //کلید عقبگرد اسلایدشو
	$('#back').click(function(){
		$('#slidshow > section:last').fadeOut();
		$('#slidshow > section:last').prependTo('#slidshow');
		$('#slidshow > section:last').css('display','block');
	});
    //کلید رفتن به تصویر بعدی اسلایدشو
	$('#next').click(function(){
		$('#slidshow > section:last').fadeOut();
		$('#slidshow > section:first').appendTo('#slidshow');
		$('#slidshow > section:last').css('display','block');
	});
});