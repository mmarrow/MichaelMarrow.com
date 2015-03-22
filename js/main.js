// Typed JS 
$(document).ready(function(){
	$(".typed").typed({
			strings: ["Hi my name is Michael Marrow",
								"My passion lies in creating",
								"I'm a UI/UX Developer",
								"I'm a Designer",
								"I'm a Developer",
								"... ^1000",
								"I'm a Creative Technologist. ^30000",
							 ],
			typeSpeed: 100,
		
			startDelay: 0,
			// backspacing speed
			backSpeed: 0,
			// time before backspacing
			backDelay: 2000,
			// loop
			loop: true,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|"
		});
});

// Slick Carousel
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
  	slidesToScroll: 3,
  	autoplay: true,
  	autoplaySpeed: 2000,
  });
	$('.autoplay').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
