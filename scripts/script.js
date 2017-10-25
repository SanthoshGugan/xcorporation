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
});


// Stephen