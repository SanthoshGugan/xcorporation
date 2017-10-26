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

	/*Show search drop down on hover*/
	$('#dropdownMenu1').hover(function() {
			/* Stuff to do when the mouse enters the element */
			$("#dropDownMenu").fadeIn(400);

		}, function() {
			/* Stuff to do when the mouse leaves the element */
			setTimeout(function(){
				if(!($('#dropDownMenu input').is(":focus")))
				{
					$("#dropDownMenu").fadeOut(400);
				}
			},3000);		
	});

	//fade out search dropdown when hover away
	$('#dropDownMenu').hover(function(){}, function(){
		$('#dropDownMenu').fadeOut(400);
	});

	//sidebar on hamburger
	$('#hamburger').click(function(event) {
		$('.mainContent').addClass('moveAway');
	});
});


// Stephen