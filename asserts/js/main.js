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
$(function(){
  AOS.init();
  $('.scrolling').scrollWatchMapTo('nav ul li a');
  $('#myskdslider').skdslider({
      slideSelector: '.slide',
      delay:5000, 
      animationSpeed: 1000,
      showNextPrev:true,
      showPlayButton:false,
      autoSlide:true,
      animationType:'sliding'
    });
});
