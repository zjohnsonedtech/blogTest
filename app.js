var main = function(){
	$('.post').hide();
	$('.hide').hide();

	$('.expand').click(function(){
		var article = $(this).parent().parent();
		
		article.children('.excerpt, .post, .expand, .hide').toggle();
		
	});

	$('.hide').click(function(){
		var article = $(this).parent().parent();
		
		article.children('.excerpt, .post, .expand, .hide').toggle();
	});


};

$(document).ready(main);
