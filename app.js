var main = function(){
	$('.post').hide();
	$('.hide').hide();

	$('.expand').click(function(){
		$(this).parentsUntil('.blogPost').addClass('current');
		
		$('.current').children('.excerpt').hide();
		$('.current').children('.expand').hide();
		$('.current').children('.post').show();
		$('.current').children('.hide').show();
	});

	$('.hide').click(function(){
		$('.post').hide();
		$('.hide').hide();
		$('.excerpt').show();
		$('.expand').show();
	});


};

$(document).ready(main);
