var xs=$()
$(window).scroll(function(){
  if($(window).scrollTop()>1050){
  	$('footer').css('background','black');
  }else if($(window).scrollTop() > 500){
  	$('main').css('background','white');
  }else{}
})
var fts = function(){
 	  $('.fortwodivs').css('display','flex');
 	  $('.fortwodivs1').css('display','none');
 	  $('.fortwodivs2').css('display','none');
		}
	var sts = function(){
 	  $('.fortwodivs').css('display','none');
 	  $('.fortwodivs1').css('display','block');
 	  $('.fortwodivs2').css('display','none');
		}

	var bts = function(){
 	  $('.fortwodivs').css('display','none');
 	  $('.fortwodivs1').css('display','none');
 	  $('.fortwodivs2').css('display','block');
		}
 	
 	$(window).scroll(function(){
		if ($(window).scrollTop() > 10) {
		$('.nav').addClass('on-scroll-header');
		}
		else {
		$('.nav').removeClass('on-scroll-header')
		}
	});
