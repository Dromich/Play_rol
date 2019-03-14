
var article = document.getElementsByTagName("article"),
videos = document.getElementsByTagName("video"),

	fraction = 0.9
function checkScroll() {

	for (var i = 0; i < article.length; i++) {

		

let art = article[i];

		var video = videos[i];

		var x = art.offsetLeft,
			y = art.offsetTop,
			w = art.offsetWidth,
			h = art.offsetHeight,
			r = x + w,  //right       
			b = y + h, //bottom
			visibleX,
			visibleY,
			visible;

		visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
		visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

		visible = visibleX * visibleY / (w * h) ;

		

		if (visible > fraction) {
			video.play();
		} else {
			video.pause();
		}
		//console.log(videos[i].id +" VISIB " + visible )
	}

}


window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);


for (var ix = 0; ix < videos.length; ix++) {
	videos[ix].addEventListener('click', function () {

		if (this.paused == true) {
			this.play();

		} else {
			this.pause();

		}
//this.muted = true;
	});
}
