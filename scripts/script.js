// Custom Javascript

// Santhosh

var headerScroll = function(vrtOff){
	if(vrtOff > 20){
		$('#header').addClass('transBg');
	}else{
		$('#header').removeClass('transBg');
	}	
};

$(document).ready(function(){

	/*ON load check the scroll position*/
	headerScroll(window.pageYOffset);

	$(document).scroll(function(event) {
		/* Act on the event */
		headerScroll(window.pageYOffset);

	});

	$('#dropdownMenu1').hover(function() {
			/* Stuff to do when the mouse enters the element */
			$("#dropDownMenu").fadeIn(400);

		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$("#dropDownMenu").delay(3000).fadeOut(400);			
	});
});


// Stephen