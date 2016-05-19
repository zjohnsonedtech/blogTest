var main = function(){
	$('.article').removeClass('current');
	$('.post').hide();
	$('#hide').hide();


	$('#expand').click(function(){
		$(this).parentUntil(article).addClass('current');
    		$('.current').children('.excerpt').hide();
    		$('.current').children('#expand').hide();
    		$('.current').children('.post').show();
    		$('.current').children('#hide').show();
    	
	});

	$('#hide').click(function(){
		$('.current').children('.post').hide();
		$('.current').children('#hide').hide();
		$('.current').children('.excerpt').show();
		$('.current').children('#expand').show();
	});


};

$(document).ready(main);
