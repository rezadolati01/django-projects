"use strict";
var script = document.createElement('script');
$(document).ready(function(){
	var widflx ='-' +  $('.flxul-sec1').css('width');
	var wid = $('#oll').css('width');
	var wit = '360px';
	if(wid == wit){
		$('.sldsh-big').remove();
	}else{
		$('.sldsh-small').remove();
	}
		$('#sldsh > section:last').fadeIn();
		setInterval(function(){
			$('#sldsh > section:last').fadeOut(1500);
			$('#sldsh > section:first').appendTo('#sldsh');
			$('#sldsh > section:last').fadeIn(1500);
		},6000);
		$('#sldbck').click(function(){
			$('#sldsh > section:last').fadeOut();
			$('#sldsh > section:last').prependTo('#sldsh');
			$('#sldsh > section:last').fadeIn();
		});
		$('#sldnxt').click(function(){
			$('#sldsh > section:last').fadeOut();
			$('#sldsh > section:first').appendTo('#sldsh');
			$('#sldsh > section:last').fadeIn();
		});
		$('#newsldbck').click(function(){
			$('#newsldsh > section:last').fadeOut();
			$('#newsldsh > section:last').prependTo('#newsldsh');
			$('#newsldsh > section:last').fadeIn();
		});
		$('#newsldnxt').click(function(){
			$('#newsldsh > section:last').fadeOut(700);
			$('#newsldsh > section:first').appendTo('#newsldsh');
			$('#newsldsh > section:last').fadeIn(700);
		});
		$('#flxbck1').click(function(){
			$('#flxul1').animate({'left':widflx},function(){
			$('#flxul1 > a:first').appendTo('#flxul1');
			$('#flxul1').css('left','0');})
		});
		$('#flxnxt1').click(function(){
			$('#flxul1').css('left',widflx);
			$('#flxul1 > a:last').prependTo('#flxul1');
			$('#flxul1').animate({'left':'0'});
		});
		$('#flxbck2').click(function(){
			$('#flxul2').animate({'left':'-213'},function(){
			$('#flxul2 > a:first').appendTo('#flxul2');
			$('#flxul2').css('left','0');})
		});
		$('#flxnxt2').click(function(){
			$('#flxul2').css('left',widflx);
			$('#flxul2 > a:last').prependTo('#flxul2');
			$('#flxul2').animate({'left':'0'});
		});
		$('#flxbck3').click(function(){
			$('#flxul3').animate({'left':'-213'},function(){
			$('#flxul3 > a:first').appendTo('#flxul3');
			$('#flxul3').css('left','0');})
		});
		$('#flxnxt3').click(function(){
			$('#flxul3').css('left',widflx);
			$('#flxul3 > a:last').prependTo('#flxul3');
			$('#flxul3').animate({'left':'0'});
		});
		$('.usr').click(function(){
			$('body').css('overflow','hidden');
			$('#usrpop').fadeIn(250);
			$('#all').css('display','block');
		});
		$('#popclose,#all').click(function(){
			$('body').css('overflow','scroll');
			$('#usrpop').fadeOut(250);
			$('#all').css('display','none');
			$('#poperr1 , #poperr2 , #poperr3').fadeOut(250);
			$('#poperr11 , #poperr12 , #poperr13').fadeOut(250);
			$('#popsub').css('margin','40px 0 0 0');
			$('#popform,#popformlog').css('overflow-y','hidden');
		});
		$('#popform1 > input').click(function(){
			$('#poperr1 , #poperr2 , #poperr3').fadeIn(250);
			$('#popsub').css('margin','20px 0 0 0');
		});
		$('#popformlog1 > input').click(function(){
			$('#poperr11 , #poperr12 , #poperr13').fadeIn(250);
			$('#popsub').css('margin','20px 0 0 0');
		});
		$('#popreg').click(function(){
			$('#popformlog').fadeOut(250);
			$('#popform').delay(240).fadeIn(250);
			$('#popsub').css('margin','20px 0 0 0');
		});
		$('#poplog').click(function(){
			$('#popform').fadeOut(250);
			$('#popformlog').delay(240).fadeIn(250);
			$('#popsub').css('margin','20px 0 0 0');
		});
		$('#open , #opened').hover(function(){
			$('#opened').toggle();
		});
		$('#jost , #jostoju').hover(function(){
			$('#jostoju').toggle();
		});
		$('#mahsul,#mahsulat').hover(function(){
			$('#mahsulat').toggle();
		});
		$('#newsldsh > section:last').fadeIn();
		setInterval(function(){
			$('#newsldsh > section:last').fadeOut(1500);
			$('#newsldsh > section:first').appendTo('#newsldsh');
			$('#newsldsh > section:last').fadeIn(1500);
		},4000);
		$('.vared,#varedshod').hover(function(){
			$('#varedshod').toggle();
		});
		$('#mahsulat , #mahsul').hover(function(){
			$('#mahsul').css('border-bottom','#167785 2px solid');
		} , function(){
			$('#mahsul').css('border-bottom','white 2px solid');
		});
		$('.vared , #varedshod').hover(function(){
			$('.vared').css('border-bottom','#167785 2px solid');
		} , function(){
			$('.vared').css('border-bottom','white 2px solid');
		});
		$('#poplog').hover(function(){
			$(this).css({'background-color':'white' , 'transition':'.25s'});
			$('#poplog > span').css({'color':'#167785' , 'transition':'.25s'});
		} , function(){
			$(this).css({'background-color':'#167785' , 'transition':'.25s'});
			$('#poplog > span').css({'color':'white' , 'transition':'.25s'});
		});
		$('#popreg').hover(function(){
			$(this).css({'background-color':'white' , 'transition':'.25s'});
			$('#popreg > span').css({'color':'#167785' , 'transition':'.25s'});
		} , function(){
			$(this).css({'background-color':'#167785' , 'transition':'.25s'});
			$('#popreg > span').css({'color':'white' , 'transition':'.25s'});
		});
	});
