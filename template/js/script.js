document.querySelector('.hamburger-icon').addEventListener('click', function () {

    document.querySelector('.h-icon').classList.toggle('open');
    });

document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    if(el_autohide){
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        }); 
        // window.addEventListener
    }
    // if
    
    }); 


anim = document.getElementById('opening-animation');
home = document.getElementById("home");

if(home) {
home.addEventListener("load", openingAnimation());
}



function openingAnimation() {
  var video = document.getElementById('opening-animation');
  var source = document.createElement('source');
  var source2 = document.createElement('source');
  setTimeout(function() {
  source.setAttribute('src', '/template/img/Logo.webm');
  source.setAttribute('type', 'video/webm');
  video.appendChild(source);
  video.play();
  setTimeout(function() {
    video.pause();
    source.setAttribute('src', '/template/img/Loop.webm');
    source.setAttribute('type', 'video/webm');
    video.load();
    video.play();
    video.loop=true;
  }, 2500);
},900);
}

var preStart

window.addEventListener('load', function(){
var layers = document.querySelectorAll('.solid');
layers.forEach((element) => {
  element.classList.remove('active');
  element.classList.add("unload");
  setTimeout(function () {
    element.classList.remove('unload');
    element.style.opacity="0";
    }, 900);
  });
});


var Anchors = document.getElementsByTagName("a");
var layers = document.querySelectorAll('.solid');
for (var i = 0; i < Anchors.length; i++) {
  Anchors[i].addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      var linkLocation = this.href
      layers.forEach((element) => {
        element.style.opacity="100%";
        element.classList.add("active");
      });

      setTimeout(function () {
        window.location = linkLocation;
      }, 900);
    },
    false
  );
}
