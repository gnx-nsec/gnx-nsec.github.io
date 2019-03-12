var toggle = document.getElementById("myToggle");
toggle.addEventListener("click",myToggler);
function myToggler(e){
    var myEvent = e.target;
    if(myEvent.className === 'btn-open'){
        myEvent.className = 'btn-close';
    }
    else if(myEvent.className === 'btn-close'){
        myEvent.className = 'btn-open';
    }
}
/*..............................Animation with wow.js and animation.css..............................*/
new WOW().init();

// carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/*.......................................Scrolling activation effect..........................................*/
$(function(){
  $('.scrolling').scrollWatchMapTo('nav ul li a');
});
