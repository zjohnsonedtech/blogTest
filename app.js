var main = function(){
	$('.post').hide();
	$('#hide').hide();

	$('#expand').click(function(){
		$('.excerpt').hide();
		$('#expand').hide();
		$('.post').show();
		$('#hide').show();
	});

	$('#hide').click(function(){
		$('.post').hide();
		$('#hide').hide();
		$('.excerpt').show();
		$('#expand').show();
	});


};

$(document).ready(main);