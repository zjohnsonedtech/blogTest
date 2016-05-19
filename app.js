var main = function(){
	$('.post').hide();
	$('.hide').hide();

	$('.expand').click(function(){
		$('.article').removeClass('current');
		$(this).parentsUntil('.blogPost').addClass('current');
		
		
		$('.current').children('.excerpt').hide();
		$('.current').children('.expand').hide();
		$('.current').children('.post').show();
		$('.current').children('.hide').show();
	});

	$('.hide').click(function(){
		$('.current').children('.post').hide();
		$('.current').children('.hide').hide();
		$('.current').children('.excerpt').show();
		$('.current').children('.expand').show();
		
		$(this).parentsUntil('.blogPost').removeClass('current');
	});


};

$(document).ready(main);
