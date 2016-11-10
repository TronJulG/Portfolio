$('.call-pop').click(function(e){
	e.preventDefault();

	var x=$(this).attr('data-pop-link');

	var popContent="<div class='pop-up-bg'></div><div class='pop-up'>";
	popContent+=$('.pop-up-hidden-content[data-pop="'+x+'"]').html();
	popContent+="<a href='' class='pop-close'></a></div>";

	$('body').append(popContent);

	$('.pop-up').css({
		'left':$(window).width()/2-($('.pop-up').width()/2)+'px',
		'top':$(window).scrollTop()+($(window).height()/2)-($('.pop-up').height()/2)+'px'
	})

});

$('body').on('click','.pop-close, .pop-up-bg',function(e){
	e.preventDefault();
	$('.pop-up-bg, .pop-up').remove();
})




 var slider=$('.gems'), sliderInitial=$('.gems').html();


function sliderGo(slider){
 slider.wrap('<div class="slider_width" data-index="0" />');
 var slides=slider.find('li').length, sliderWidth=slider.find('li').width()
 var sliderWrap=slider.parents('.slider_width');
 sliderWrap.width(sliderWidth);
 sliderWrap.append('<a href="" class="arrow arrow_1"><img class="arrow_1" src="images/1.jpg"></a>')
 sliderWrap.append('<a href="" class="arrow arrow_2"><img class="arrow_2" src="images/2.jpg"></a>')
}

function destroySlider(slider, sliderInitial){
	slider.parents('.slider_width').replaceWith('<div class="gems">'+sliderInitial+'</div>')
}

if($(window).width()>1000){
	sliderGo(slider);
}


$(window).resize(function(){
	//console.log($(window).width());
	if($(window).width()<1000){
		destroySlider(slider, sliderInitial)
	}
	else{
		sliderGo($('.gems'));
	}
})




 $('.arrow').click(function(e){
	 e.preventDefault();
	 var ind=+sliderWrap.attr('data-index'), option;
	
	 if($(this).is('.arrow_2')) option=(++ind<slides)
	 else option=(--ind>=0);
	
	 if(option){
		 slider.animate({'margin-left':-(sliderWidth)*(ind)+'px'},300);
		 sliderWrap.attr('data-index',ind)
	 }

 })
 