var main = function(){
	$('.post').hide();
	$('.hide').hide();

	$('.expand').click(function(){
		var article = $(this).parent().parent();
		
		article.children('div').toggle();
		
	});

	$('.hide').click(function(){
		var article = $(this).parent().parent();
		
		article.children('div').toggle();
	});


};

$(document).ready(main);
