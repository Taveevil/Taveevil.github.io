
//When the hamburger icon is clicked toggle the drop down menu
document.querySelector('.hamburger-icon').addEventListener('click', function () {
    document.querySelector('.h-icon').classList.toggle('open');
   });


//When scrolling down hide the navigation bar
//but when we scroll up reveal the navigation bar 
document.addEventListener("DOMContentLoaded", function(){

    autohide = document.querySelector('.autohide');
    
    //check if there is a autohide class attached to anything
    if(autohide){
      //set the top of the last scrolled position to 0
        var last_scroll_top = 0;
        //whenever the window is scrolled run this function
        window.addEventListener('scroll', function() {
          //set scroll_top to the current position
            let scroll_top = window.scrollY;
            //if scroll_top is less than the previous position
            //then reveal the navbar
            if(scroll_top < last_scroll_top) {
                autohide.classList.remove('scrolled-down');
                autohide.classList.add('scrolled-up');
            }
            //otherwise keep it hidden
            else {
                autohide.classList.remove('scrolled-up');
                autohide.classList.add('scrolled-down');
            }
            //and then set the last_scroll_top to the new position
            last_scroll_top = scroll_top;
        }); 
    }
    }); 


anim = document.getElementById('opening-animation');
home = document.getElementById("home");

//if there is a home id on the page run the opening animations
if(home) {
home.addEventListener("load", openingAnimation());
}

function openingAnimation() {
  var video = document.getElementById('opening-animation');
  var source = document.createElement('source');

  //after 900ms create a new source and append it to the video tag
  setTimeout(function() {
  source.setAttribute('src', '/template/img/Logo.webm');
  source.setAttribute('type', 'video/webm');
  video.appendChild(source);
  video.play();
  //then after 2500ms pause the current video and replace the video with the new one
  //and loop it
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

//Whenever a page is loaded play the unloaded transition screen
window.addEventListener('load', function(){
var layers = document.querySelectorAll('.solid');
layers.forEach((element) => {
  element.classList.remove('active');
  element.classList.add("unload");
  setTimeout(function () {
    element.classList.remove('unload');
    element.style.opacity="0";
    element.style.zIndex="-999";
    }, 900);
  });
});


var Anchors = document.getElementsByTagName("a");
var layers = document.querySelectorAll(".solid");

//Check how many a tags there are
//and store them into an array
for (var i = 0; i < Anchors.length; i++) {
  //if any of the links are clicked then run the event
  Anchors[i].addEventListener(
    "click",
    function (event) {
      if (!this.classList.contains('external')) {
              //stop the link from instantly switching pages
              event.preventDefault();
              //get the link of the anchor
              var linkLocation = this.href;
              //run the transition animation
              layers.forEach((element) => {
                element.style.opacity = "100%";
                element.style.zIndex = "999";
                element.classList.add("active");
              });
              //then after 900ms switch pages
              setTimeout(function () {
                window.location = linkLocation;
              }, 900);
      }
    }
  );
}

var thumb = document.querySelectorAll('.thumbnail');
var sub_btn = document.querySelectorAll('.sub-btn'); 
var work_copy = document.getElementById('work-copy');
var work_title = document.getElementById('work-title');
var work_sub = document.getElementById('work-sub');
var work_description = document.getElementById('work-description');

var title_array = 
['Expressing creativity,\ one design at a time',
'fuck u', 
'bruh']

var subtitle_array = 
['all',
'Site12',
'Apparel design',
'Videos & motion graphics',
'side projects']

description_array =
['Welcome to my design portfolio, where creativity meets pixel-perfection. Let\'s bring your ideas to life!'
]

for (var i=0; i < sub_btn.length; i++){
  var sub_array = Array.from(sub_btn);
  sub_btn[i].addEventListener('click',function(i){
      thumb.forEach((element) => { 
        if(this.id != 'all'){  
          if (!element.classList.contains(this.id)){
            element.classList.add('fade');
            setTimeout(function(){
              element.classList.add('vanish');
            },300);
          } 
          else{
            element.classList.remove('vanish');
            setTimeout(function(){
              element.classList.remove('fade');
            },300);
          }
        }
        else{
          element.classList.remove('vanish');
          setTimeout(function(){
            element.classList.remove('fade');
          },300);
        }
    });

    //map makes another array of only ids from the "i" argument
    //and returns the postion based off what this.id is 
    const index = sub_array.map(i => i.id).indexOf(this.id);

    work_copy.classList.add('fade-left');

    setTimeout(function(){
      work_title.innerHTML = title_array[index];
      work_sub.innerHTML = subtitle_array[index];
      work_description.innerHTML = description_array[index];
      work_copy.classList.remove('fade-left');
    },200);

  }
  ,false);
}


thumb.forEach(element => {
  element.addEventListener('mouseover',() =>{ 
      element.classList.add('hovered')
      element.querySelector('.description').classList.add('reveal');
    }
  )
});

thumb.forEach(element => {
  element.addEventListener('mouseout',() =>{ 
      element.classList.remove('hovered');
      element.querySelector('.description').classList.remove('reveal');
    }
  )
});

