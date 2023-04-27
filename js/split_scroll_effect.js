function SplitScroll() {
	const controller = new ScrollMagic.Controller();

	var scroll_1 = new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: '.stay-effect-1',
		triggerHook: 0
	})
	.setPin('.stay-effect-1')
	.addIndicators()
	.addTo(controller);
	scroll_1.removeIndicators();

	var scroll_2 = new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: '.stay-effect-2',
		triggerHook: 0
	})
	.setPin('.stay-effect-2')
	.addIndicators()
	.addTo(controller);
	scroll_2.removeIndicators();
}

if ($(window).width() > 500) { // setting for responsive layout
	SplitScroll(); // cancel effect on mobile device
}

// var splitEffect;

// window.addEventListener('resize', function(event) {
// 	if ($(window).width() == 1024) {
// 		splitEffect = true;
// 	} else if ($(window).width() == 768) {
// 		splitEffect = false;
// 	}

// 	if (splitEffect) {
// 		SplitScroll();
// 	}
// });


// function isLandscape() {
//   return(window.orientation === 90 || window.orientation === -90);
// }

// var splitScroll;

// window.addEventListener('resize', function(event){
//   // do stuff here
//   isLandscape();
//   if (isLandscape()) {
//   	// alert("LANDSCAPE");
//   	if ($(window).width() > 500) {
//   		splitScroll = true;
//   	} else {
//   		splitScroll = true;
//   	}
//   } else {
//   	// alert("PORTRAIT");
//   	if ($(window).width() > 800) {
//   		splitScroll = true;
//   	} else {
//   		splitScroll = true;
//   	}
//   }
// });

// if (splitScroll) {
// 	SplitScroll();
// }












/*
// Know if element is inside the screen
var peakImage_1 = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if (entries[0].isIntersecting === true) {
		$('.attraction-img').attr("src", "img/attraction/peak_01.jpg");
		console.log('peakImage_1 is inside the screen');
	} else {
		console.log('peakImage_1 is outside the screen');
	}
}
, { threshold: [0] }); // 0 = enter the screen; 1 = reach the bottom
peakImage_1.observe(document.querySelector("#peak-img-1"));

var peakImage_2 = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if (entries[0].isIntersecting === true) {
		$('.attraction-img').attr("src", "img/attraction/peak_02.jpg");
		console.log('peakImage_2 is inside the screen');
	} else {
		console.log('peakImage_2 is outside the screen');
	}
}
, { threshold: [0] }); // 0 = enter the screen; 1 = reach the bottom
peakImage_2.observe(document.querySelector("#peak-img-2"));
*/