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
	//اسلایدشو اصلی//___________________________________________________
	$('#sldsh').addClass('slide');
	$('#sldsh').mouseenter(function(){
		$('#sldsh').removeClass('slide');
	}).mouseleave(function(){
		$('#sldsh').addClass('slide');
	});
	$('#sldsh > section:last').css('display','block');
	setInterval(function(){
		if($('#sldsh').hasClass('slide')){
			$('#sldsh > section:last').fadeOut(1500);
			$('#sldsh > section:first').appendTo('#sldsh');
			$('#sldsh > section:last').fadeIn(1500);
		}
	},6000);
	//کلید عقبگرد اسلایدشو اصلی//____________________________________________
	$('#sldbck').click(function(){
		$('#sldsh > section:last').fadeOut();
		$('#sldsh > section:last').prependTo('#sldsh');
		$('#sldsh > section:last').css('display','block');
	});
	//کلید رفتن به تصویر بعدی اسلایدشو اصلی//___________________________________
	$('#sldnxt').click(function(){
		$('#sldsh > section:last').fadeOut();
		$('#sldsh > section:first').appendTo('#sldsh');
		$('#sldsh > section:last').css('display','block');
	});
	//اسلایدشو خبرنامه//___________________________________________________________
	$('#newsldsh').addClass('newslide');
	$('#newsldsh').mouseenter(function(){
		$('#newsldsh').removeClass('newslide');
	}).mouseleave(function(){
		$('#newsldsh').addClass('newslide');
	});
	$('#newsldsh > section:last').css('display','block');
	setInterval(function(){
		if($('#newsldsh').hasClass('newslide')){
			$('#newsldsh > section:last').fadeOut(1500);
			$('#newsldsh > section:first').appendTo('#newsldsh');
			$('#newsldsh > section:last').fadeIn(1500);
		}
	},4000);
	//کلید عقبگرد اسلایدشو خبرنامه//____________________________________________
	$('#newsldbck').click(function(){
		$('#newsldsh > section:last').fadeOut();
		$('#newsldsh > section:last').prependTo('#newsldsh');
		$('#newsldsh > section:last').css('display','block');
	});
	//کلید رفتن به تصویر بعدی اسلایدشو خبرنامه//___________________________________
	$('#newsldnxt').click(function(){
		$('#newsldsh > section:last').fadeOut(700);
		$('#newsldsh > section:first').appendTo('#newsldsh');
		$('#newsldsh > section:last').fadeIn(700);
	});
	//عقبگرد فلکس باکس 1 //___________________________________________________________
	$('#flxbck1').click(function(){
		$('#flxul1').animate({'left':widflx},function(){
			$('#flxul1 > a:first').appendTo('#flxul1');
			$('#flxul1').css('left','0');
		})
	});
	// جلو رفتن فلکس باکس 1 //____________________________________________________
	$('#flxnxt1').click(function(){
		$('#flxul1').css('left',widflx);
		$('#flxul1 > a:last').prependTo('#flxul1');
		$('#flxul1').animate({'left':'0'});
	});
	//عقبگرد فلکس باکس 2 //___________________________________________________________
	$('#flxbck2').click(function(){
		$('#flxul2').animate({'left':'-213'},function(){
			$('#flxul2 > a:first').appendTo('#flxul2');
			$('#flxul2').css('left','0');
		});
	});
	// جلو رفتن فلکس باکس 2 //____________________________________________________
	$('#flxnxt2').click(function(){
		$('#flxul2').css('left',widflx);
		$('#flxul2 > a:last').prependTo('#flxul2');
		$('#flxul2').animate({'left':'0'});
	});
	//عقبگرد فلکس باکس 3 //___________________________________________________________
	$('#flxbck3').click(function(){
		$('#flxul3').animate({'left':'-213'},function(){
			$('#flxul3 > a:first').appendTo('#flxul3');
			$('#flxul3').css('left','0');
		});
	});
	// جلو رفتن فلکس باکس 3 //____________________________________________________
	$('#flxnxt3').click(function(){
		$('#flxul3').css('left',widflx);
		$('#flxul3 > a:last').prependTo('#flxul3');
		$('#flxul3').animate({'left':'0'});
	});
	// نمایش پاپ اپ ثبت نام و ورود //__________________________________________________
	$('.usr').click(function(){
		$('#usrpop').css('display','block');
		$('#all').css('display','block');
	});
	// تنظیمات بسته شدن پاپ آپ ثبت نام و ورود //_____________________________________
	$('#popclose,#all').click(function(){
		$('#usrpop').css('display','none');
		$('#all').css('display','none');
		$('#popsub').css('margin','40px 0px 0px 0px');
		$('#popform,#popformlog').css('overflow-y','hidden');
	});
	// تغییر سربرگ ثبت نام و ورود //____________________________________________________
	$('#popreg').click(function(){
		$('#popformlog').css('display','none');
		$('#popform').css('display','block');
		$('#popsub').css('margin','20px 0px 0px 0px');
	});
	// تغییر سربرگ ثبت نام و ورود //____________________________________________________
	$('#poplog').click(function(){
		$('#popform').css('display','none');
		$('#popformlog').css('display','block');
		$('#popsub').css('margin','20px 0px 0px 0px');
	});
	// دکمه باز شونده محصولات //____________________________________________________________
	$('#mahsulat , #mahsul').hover(function(){
		$('#mahsulat').removeClass('dis-non');
		$('#mahsulat').addClass('have');
		$('#mahsul > img').css({'transform':'rotate(180deg)' , 'transition':'.25s'});
		$('#mahsul').css({'border-bottom':'2px solid #167785' , 'transition':'.25s'});
	} , function(){
		$('#mahsulat').removeClass('have');
		$('#mahsulat').addClass('dis-non');
		$('#mahsul > img').css({'transform':'rotate(0deg)' , 'transition':'.25s'});
		$('#mahsul').css({'border-bottom':'2px solid white' , 'transition':'.25s'});
	});
	// دکمه باز شونده در سایز کوچک //______________________________________________________
	$('#open').click(function(){
		$('#opened').toggleClass('have');
		$('#opened').toggleClass('dis-non');
		$('.profi-1').toggleClass('has');
	});
	// دکمه باز شونده جست و جو //_______________________________________________________
	$('#jost').click(function(){
		$('#jostoju').toggleClass('have');
	});
	// دکمه بازشونده لاگین //_________________________________________________________________
	$('#varedshod , .vared').hover(function(){
		$('#varedshod').removeClass('dis-non');
		$('#varedshod').addClass('have');
		$('#img-down').css({'transform':'rotate(180deg)' , 'transition':'.25s'});
		$('.vared').css({'border-bottom':'2px solid #167785' , 'transition':'.25s'});
	} , function(){
		$('#varedshod').removeClass('have');
		$('#varedshod').addClass('dis-non');
		$('#img-down').css({'transform':'rotate(0deg)' , 'transition':'.25s'});
		$('.vared').css({'border-bottom':'2px solid white' , 'transition':'.25s'});
	});
	//________________________________________________________________________________________
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