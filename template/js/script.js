//When the hamburger icon is clicked toggle the drop down menu
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    document.querySelector(".h-icon").classList.toggle("open");
  });

//When scrolling down hide the navigation bar
//but when we scroll up reveal the navigation bar
document.addEventListener("DOMContentLoaded", function () {
  autohide = document.querySelector(".autohide");

  //check if there is a autohide class attached to anything
  if (autohide) {
    //set the top of the last scrolled position to 0
    var last_scroll_top = 0;
    //whenever the window is scrolled run this function
    window.addEventListener("scroll", function () {
      //set scroll_top to the current position
      let scroll_top = window.scrollY;
      //if scroll_top is less than the previous position
      //then reveal the navbar
      if (scroll_top < last_scroll_top) {
        autohide.classList.remove("scrolled-down");
        autohide.classList.add("scrolled-up");
      }
      //otherwise keep it hidden
      else {
        autohide.classList.remove("scrolled-up");
        autohide.classList.add("scrolled-down");
      }
      //and then set the last_scroll_top to the new position
      last_scroll_top = scroll_top;
    });
  }
});

anim = document.getElementById("opening-animation");
home = document.getElementById("home");

//if there is a home id on the page run the opening animations
if (home) {
  home.addEventListener("load", openingAnimation());
}

function openingAnimation() {
  var video = document.getElementById("opening-animation");
  var source = document.createElement("source");

  //after 900ms create a new source and append it to the video tag
  setTimeout(function () {
    source.setAttribute("src", "/template/img/Logo.webm");
    source.setAttribute("type", "video/webm");
    video.appendChild(source);
    video.play();
    //then after 2500ms pause the current video and replace the video with the new one
    //and loop it
    setTimeout(function () {
      video.pause();
      source.setAttribute("src", "/template/img/Loop.webm");
      source.setAttribute("type", "video/webm");
      video.load();
      video.play();
      video.loop = true;
    }, 2500);
  }, 900);
}

//Whenever a page is loaded play the unloaded transition screen
window.addEventListener("load", function () {
  var layers = document.querySelectorAll(".solid");
  layers.forEach((element) => {
    element.classList.remove("active");
    element.classList.add("unload");
    setTimeout(function () {
      element.classList.remove("unload");
      element.style.opacity = "0";
      element.style.zIndex = "-999";
    }, 900);
  });
});

var Anchors = document.getElementsByTagName("a");
var layers = document.querySelectorAll(".solid");

//Check how many a tags there are
//and store them into an array
for (var i = 0; i < Anchors.length; i++) {
  //if any of the links are clicked then run the event
  Anchors[i].addEventListener("click", function (event) {
    if (!this.classList.contains("external")) {
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
  });
}

var thumb = document.querySelectorAll(".thumbnail");
var sub_btn = document.querySelectorAll(".sub-btn");
var work_copy = document.getElementById("work-copy");
var work_title = document.getElementById("work-title");
var work_sub = document.getElementById("work-sub");
var work_description = document.getElementById("work-description");

var title_array = [
  "Feel free to explore!",
  "Illustrating My Imagination",
  "Designs to elevate your style",
  "Lights, Camera, Action!",
  "The magic in movement"
];

var subtitle_array = [
  "ALL",
  "ILLUSTRATIONS",
  "APPAREL DESIGN",
  "VIDEOS",
  "MOTION GRAPHICS",
];

description_array = [
  "Welcome to my gallery! These are all the smaller projects I've done. (hover over the boxes for a description)",
  "Programs used: Adobe Illustrator, Clip studio EX, Adobe Photoshop",
  "Designs I've made with intentions with either embroidering or printing",
  "Some video I worked on either editing, or producing!",
  "Motion graphic and titles I did using Adobe aftereffects"
];

for (var i = 0; i < sub_btn.length; i++) {
  var sub_array = Array.from(sub_btn);
  sub_btn[i].addEventListener(
    "click",
    function (i) {
      thumb.forEach((element) => {
        if (this.id != "all") {
          if (!element.classList.contains(this.id)) {
            element.classList.add("fade");
            setTimeout(function () {
              element.classList.add("vanish");
            }, 300);
          } else {
            element.classList.remove("vanish");
            setTimeout(function () {
              element.classList.remove("fade");
            }, 300);
          }
        } else {
          element.classList.remove("vanish");
          setTimeout(function () {
            element.classList.remove("fade");
          }, 300);
        }
      });

      //map makes another array of only ids from the "i" argument
      //and returns the postion based off what this.id is
      const index = sub_array.map((i) => i.id).indexOf(this.id);
      var buttons = document.getElementById('work-buttons');
      if (index < 3 && index > 0){
        buttons.querySelector('#instagram-button').style.display = 'block';
        buttons.querySelector('#contact-button').style.display = 'none';
        buttons.querySelector('#youtube-button').style.display = 'none';
        buttons.querySelector('#tiktok-button').style.display = 'none';
      }
      else if (index >= 3){
        buttons.querySelector('#instagram-button').style.display = 'none';
        buttons.querySelector('#contact-button').style.display = 'none';
        buttons.querySelector('#youtube-button').style.display = 'block';
        buttons.querySelector('#tiktok-button').style.display = 'block';
      }
      else if (index == 0){
        buttons.querySelector('#instagram-button').style.display = 'none';
        buttons.querySelector('#contact-button').style.display = 'block';
        buttons.querySelector('#youtube-button').style.display = 'none';
        buttons.querySelector('#tiktok-button').style.display = 'none';
      }

      work_copy.classList.add("fade-left");

      setTimeout(function () {
        work_title.innerHTML = title_array[index];
        work_sub.innerHTML = subtitle_array[index];
        work_description.innerHTML = description_array[index];
        work_copy.classList.remove("fade-left");
      }, 200);
      }
    ,
    false
  );
}

thumb.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("hovered");
    element.querySelector(".thumb-description").style.display = "block";
    setTimeout(function () {
      element.querySelector(".thumb-description").classList.add("reveal");
    }, 200);
  });
});

thumb.forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.classList.remove("hovered");
    element.querySelector(".thumb-description").classList.remove("reveal");
    element.querySelector(".thumb-description").style.display = "none";
  });
});

let slideIndex;
var album;

var showAlbum = function (id) {
  slideIndex = 1;
  album = document.getElementById(id);
  album.classList.add("visible");
  document.addEventListener("keydown", arrowControls);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAlbum();
    }
  });

  const previews = Array.from(album.getElementsByClassName("modal-preview"));
  previews.forEach((e, index) => {
    e.addEventListener("click", function () {
      showSlide((slideIndex = index + 1));
    });
  });

  showSlide(slideIndex);
};

var thing = document.querySelectorAll(".album");
thing.forEach((e) => {
  slides = e.querySelectorAll(".slide");
  preview = e.querySelector(".dots");
  slides.forEach((e) => {
    var alt = e.getElementsByTagName("img")[0].alt;
    var source = e.getElementsByTagName("img")[0].src;
    var slide_preview = document.createElement("div");
    var img = document.createElement("img");

    preview.appendChild(slide_preview);
    slide_preview.classList.add("slide-preview");
    slide_preview.appendChild(img);
    img.src = source;
    img.alt = alt;
    img.classList.add("modal-preview");
  });
});

// Add click event listener to album triggers
var albumTriggers = document.querySelectorAll(".album-trigger");
albumTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    showAlbum(this.getAttribute("data-target"));
  });
});

// Define function to close album
var closeAlbum = function () {
  album.classList.remove("visible");
};

function arrowControls(e) {
  e.preventDefault();
  if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
    showSlide((slideIndex -= 1));
  }
  if (e.key === "ArrowRight" || e.key === "ArrowUp") {
    showSlide((slideIndex += 1));
  }
}

// Add click event listener to close buttons
var closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    closeAlbum();
    document.removeEventListener("keydown", arrowControls);
  });
});

var slide_control = document.querySelectorAll(".slide-control");

slide_control.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.classList.contains("previous-slide")) {
      showSlide((slideIndex -= 1));
    } else if (element.classList.contains("next-slide")) {
      showSlide((slideIndex += 1));
    }
  });
});

// This is your logic for the light box. It will decide which slide to show
// and which dot is active.

function showSlide(n) {
  const slides = album.getElementsByClassName("slide");
  let modalPreviews = album.getElementsByClassName("slide-preview");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "flex";
  modalPreviews[slideIndex - 1].className += " active";
}
