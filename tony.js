// Landing page - navigation bar

window.onscroll = function() {fixedNavBar()};

const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

function fixedNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Project Gallery - image overlays

const overlayImage1 = document.getElementById('overlay1');

function showTextOverlay1 (){
  overlayImage1.style.opacity = "1"
}
function hideTextOverlay1 (){
  overlayImage1.style.opacity = "0"
}


const overlayImage2 = document.getElementById('overlay2');

function showTextOverlay2 (){
  overlayImage2.style.opacity = "1"
}

function hideTextOverlay2 (){
  overlayImage2.style.opacity = "0"
}


const overlayImage3 = document.getElementById('overlay3');

function showTextOverlay3 (){
  overlayImage3.style.opacity = "1"

}
function hideTextOverlay3 (){
  overlayImage3.style.opacity = "0"
}


const overlayImage4 = document.getElementById('overlay4');

function showTextOverlay4 (){
  overlayImage4.style.opacity = "1"
}
function hideTextOverlay4 (){
  overlayImage4.style.opacity = "0"
}

// Image loop - image loop

let index = 0;

function showArray() {
  let imageArray = document.getElementsByClassName("imageLoop");
  for (let i = 0; i < imageArray.length; i++) {
    imageArray[i].style.display = "none";  
  }
  index++;
  if (index > imageArray.length) {index = 1};    
  imageArray[index-1].style.display = "block";  
  setTimeout(showArray, 1500); // loop delay
}

showArray();