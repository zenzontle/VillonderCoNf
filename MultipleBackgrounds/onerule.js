$(document).ready(function()) {
	var sea = $(".sample5 .sea")[0];
	var fishesX = 30;
	var fishesY = 90;
	var fishX = 0;
	var fishY = 0;
	var mermaidX = 0;
	var t = 0;

	function animationLoop() {
		fishesY = 90 + Math.floor(30 * Math.sin(t++ / 180.0));
		if (--fishesX < 0) fishesX - 480;
		mermaidX += 0.5;
		if (mermaidX > 480) mermaidX = 0;
		fishY = -10 + (10 * Math.cos(t * 0.091));
		fishX = 10 + (5 * Math.sin(t * 0.07));

		sea.style.backgroundPosition = "top " + fishY + "px right" + fishX + "px, " + mermaidX + "px bottom," + fishesX + "px " fishesY + "px, top left";

		window.requestAnimFrame(animationLoop);
	}
	animationLoop();
}