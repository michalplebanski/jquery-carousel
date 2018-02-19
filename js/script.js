
var number = Math.floor(Math.random()*5)+1;
var timer1 = 0,
	timer2 = 0,
	span1 = document.getElementById("span1"),
	span2 = document.getElementById("span2"),
	span3 = document.getElementById("span3"),
	span4 = document.getElementById("span4"),
	span5 = document.getElementById("span5");

span1.addEventListener("click", function() { setSlide(1); });
span2.addEventListener("click", function() { setSlide(2); });
span3.addEventListener("click", function() { setSlide(3); });
span4.addEventListener("click", function() { setSlide(4); });
span5.addEventListener("click", function() { setSlide(5); });

function setSlide(slideNr) {
	clearTimeout(timer1);
	clearTimeout(timer2);
	number = slideNr-1;
	hide();
	setTimeout("changeSlide()", 500);
}

function hide() {
	$("#slider").fadeOut(500);
}

function changeSlide() {
	number++;
	if(number>5) number=1;
	var file = "<img src=\"slides/slide" + number +".png\" />";
	document.getElementById("slider").innerHTML = file;

	$("#slider").fadeIn(500);

	timer1=setTimeout("changeSlide()", 5000);
	timer2=setTimeout("hide()", 4500);
}

changeSlide();
	
