var end = Date.now() + (1 * 500);

var colors = ['#000', '#fff', '#f3f3f3'];

(function frame() {
	confetti({
		particleCount: 10,
		startVelocity: 40,
		angle: 320,
		spread: 155,
		origin: {
			x: -0.1,
			y: -0.1,
		},
		colors: colors
	});
	confetti({
		particleCount: 6,
		startVelocity: 70,
		angle: 120,
		spread: 55,
		origin: {
			x: 1,
			y: 1,
		},
		colors: colors
	});
	if (Date.now() < end) {
		requestAnimationFrame(frame);
	}
}());

// Add click event listener to the document
document.addEventListener('click', function(event) {
  // Get the click position
  var x = event.clientX;
  var y = event.clientY;

  // Call the confetti method at the clicked position
  confetti({
    particleCount: 100,  // Number of confetti particles
    startVelocity: 30,  // Initial speed of confetti particles
    spread: 360,  // Spread of confetti particles
    origin: {  // Position of the confetti burst
      x: x / window.innerWidth,
      y: y / window.innerHeight
    },
	colors: colors
  });

  confetti({
		particleCount: 100,
		startVelocity: 40,
		angle: 320,
		spread: 155,
		origin: {
			x: -0.1,
			y: -0.1,
		},
		colors: colors
	});
	confetti({
		particleCount: 100,
		startVelocity: 70,
		angle: 120,
		spread: 55,
		origin: {
			x: 1,
			y: 1,
		},
		colors: colors
	});
});