
$(window).load(function(){
		$('#loader').css( 'opacity', '0' );
		$('#loader').delay(1000).queue(function() {
			$('#loader').addClass('hidden');
			$(this).dequeue();
		});	
});

$(document).ready(function(){
	$(".typed").typed({
		strings: ["Kaupungin", "Kodin", "Kadun", "Suomen", "Puhelimen", "Keittiön"],
		startDelay: 900,
		typeSpeed: 80,
        backSpeed: 40,
        backDelay: 900
	});
	$(".flexslider").flexslider({
		animation: "fade",
		slideshowSpeed: 8000,   
		animationSpeed: 1000, 
		directionNav: true, 
		slideshow: false,
		smoothHeight: false,
		controlNav: true, 
		manualControls: ".case-controller-nav li"
	});
	// Waypoints
		$("#phone1").waypoint(function(direction) {
		  $("#pitch").transition({ opacity: 1 });
		}, { offset: "50%" });
		$("#features").waypoint(function(direction) {
		  $(".flexslider").transition({ opacity: 1 });
		}, { offset: "60%" });
		$("#teaser3").waypoint(function(direction) {
		  $(".teasers3content").transition({ opacity: 1 });
		}, { offset: "60%" });
		$("#team").waypoint(function(direction) {
		  $(".team-wrapper").transition({ opacity: 1 });
		}, { offset: "60%" });
		$("#teaser2").waypoint(function(direction) {
		  $(".teasers2content").transition({ opacity: 1 });
		}, { offset: "60%" });
	

})