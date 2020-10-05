// Constants for elements
const animStart = document.getElementById("slideAnimStart");
const readCta = document.getElementById("readCta");
const content = document.getElementById("content");
const showDropDown = document.getElementById("showDropDown");
const hideDropDown = document.getElementById("hideDropDown");
const slide = document.getElementsByClassName("feature-panama__slide");
const animEnd = document.getElementById("slideAnimEnd");
const slide4Video = document.getElementById("slide4video");
const slide12Video = document.getElementById("slide12video");

const slide3PlayButton = document.getElementById("slide3PlayButton");
const slide3VimVideo = document.getElementById("slide3Video");
const slide3VideoBanner = document.getElementById("slide3VideoBanner");

const leftButton = document.getElementById("leftArrow");
const rightButton = document.getElementById("rightArrow");

const slide5PlayButton = document.getElementById("slide5PlayButton");
const slide5LoopVideo = document.getElementById("slide5LoopVideo");
const slide5VideoBanner = document.getElementById("slide5VideoBanner");
const slide5VimVideo = document.getElementById("slide5VimVideo");

const slide14PlayButton = document.getElementById("slide14PlayButton");
const slide14LoopVideo = document.getElementById("slide14LoopVideo");
const slide14VideoBanner = document.getElementById("slide14VideoBanner");
const slide14VimVideo = document.getElementById("slide14VimVideo");

let slideIndex = 1;
let firstPageLoad = true;
let preventArrowKeyFlag = true;

function imageSourceSwapper(i, extension){
  console.log("lazy loaded image " + i + extension);
  var currentImage = document.getElementById("grid-image-" + i + extension);
  currentImage.src = currentImage.dataset.src;
}

function lazyLoad(direction, tempSlideIndex){
  if(direction == "none"){ //User is selecting slides via the film strip.
    /*
    [start] - JSM 11/20/2019 - 4:00pm //START OF CAYO DE AGUA GROUP
    */
    for(var i = 1; i < 11; i++){
        imageSourceSwapper(i, "");
    } 
    for(var i = 11; i < 16; i++){
        if(i == 14 || i == 15){
            imageSourceSwapper(i, "a");
        }
        else{
            imageSourceSwapper(i, "");
        }
    }
    for(var i = 14; i < 20; i++){
        if(i == 14 || i == 15){
            imageSourceSwapper(i, "b");
        }
        else{
            imageSourceSwapper(i, "");
        }
    }
    imageSourceSwapper(6, "a");
    imageSourceSwapper(7, "a");
    /*
    [end] - JSM 11/20/2019 - 4:00pm //END OF CAYO DE AGUA GROUP
    */
    /*
    [start] - JSM 11/20/2019 - 4:00pm //START OF PLAYA VERDE
    */
    for(var i = 21; i < 26; i++){
        imageSourceSwapper(i, "");
    } 
    for(var i = 24; i < 30; i++){
      if(i == 24 || i == 25){
          imageSourceSwapper(i, "b");
      }
      else{
          imageSourceSwapper(i, "");
      }
    } 
    for(var i = 30; i < 35; i++){
        imageSourceSwapper(i, "");
    } 
    for(var i = 35; i < 42; i++){
        imageSourceSwapper(i, "");
    }
  /*
  [end] - JSM 11/20/2019 - 4:00pm //END OF PLAYA VERDE
  */
  }
  else{
    /*
    [start] - JSM 11/20/2019 - 4:00pm //START OF CAYO DE AGUA GROUP
    */
    imageSourceSwapper(6, "a");
    imageSourceSwapper(7, "a");
    if(tempSlideIndex == 6 && direction == "right"){
      for(var i = 1; i < 8; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 7 && direction == "right"){
      for(var i = 8; i < 11; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 8 && direction == "right"){
      for(var i = 11; i < 16; i++){
          if(i == 14 || i == 15){
              imageSourceSwapper(i, "a");
          }
          else{
              imageSourceSwapper(i, "");
          }
      }
    }
    else if(tempSlideIndex == 9 && direction == "right"){
      for(var i = 14; i < 20; i++){
          if(i == 14 || i == 15){
              imageSourceSwapper(i, "b");
          }
          else{
              imageSourceSwapper(i, "");
          }
      }
    }
    else if(tempSlideIndex == 11 && direction == "left"){
      for(var i = 14; i < 20; i++){
          if(i == 14 || i == 15){
              imageSourceSwapper(i, "b");
          }
          else{
              imageSourceSwapper(i, "");
          }
      }
    }
    else if(tempSlideIndex == 10 && direction == "left"){
      for(var i = 11; i < 16; i++){
          if(i == 14 || i == 15){
              imageSourceSwapper(i, "a");
          }
          else{
              imageSourceSwapper(i, "");
          }
      }
    }
    else if(tempSlideIndex == 9 && direction == "left"){
      for(var i = 6; i < 11; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 8 && direction == "left"){
      for(var i = 1; i < 6; i++){
          imageSourceSwapper(i, "");
      } 
    }
    /*
    [end] - JSM 11/20/2019 - 4:00pm //END OF CAYO DE AGUA GROUP
    */
    /*
    [start] - JSM 11/20/2019 - 4:00pm //START OF PLAYA VERDE
    */
    else if(tempSlideIndex == 14 && direction == "right"){
      for(var i = 21; i < 26; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 15 && direction == "right"){
      for(var i = 24; i < 30; i++){
        if(i == 24 || i == 25){
            imageSourceSwapper(i, "b");
        }
        else{
            imageSourceSwapper(i, "");
        }
      } 
    }
    else if(tempSlideIndex == 16 && direction == "right"){
      for(var i = 30; i < 35; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 17 && direction == "right"){
      for(var i = 35; i < 42; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 19 && direction == "left"){
      for(var i = 35; i < 42; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 18 && direction == "left"){
      for(var i = 30; i < 35; i++){
          imageSourceSwapper(i, "");
      } 
    }
    else if(tempSlideIndex == 17 && direction == "left"){
      for(var i = 24; i < 30; i++){
        if(i == 24 || i == 25){
            imageSourceSwapper(i, "b");
        }
        else{
            imageSourceSwapper(i, "");
        }
      } 
    }
    else if(tempSlideIndex == 16 && direction == "left"){
      for(var i = 21; i < 26; i++){
          imageSourceSwapper(i, "");
      } 
    }
    /*
    [end] - JSM 11/20/2019 - 4:00pm //END OF PLAYA VERDE
    */
    /*
    [start] - JSM 11/20/2019 - 4:00pm //START OF LAST SLIDE
    */
    if(tempSlideIndex == 22 && direction == "right"){
      var currentImage = document.getElementById("childWithSunGlasses");
      currentImage.src = currentImage.dataset.src;
    }
    else if(tempSlideIndex == 1 && direction == "left"){
      var currentImage = document.getElementById("childWithSunGlasses");
      currentImage.src = currentImage.dataset.src;
    }
    /*
    [end] - JSM 11/20/2019 - 4:00pm //END OF LAST SLIDE
    */
  }
}

function newSlide(n) {
  showSlides((slideIndex += n));
  playSlideVideo();
  pauseVideo(slide5LoopVideo, 5);
  forceAutoPlay(slide5LoopVideo, 5);
  pauseVideo(slide14LoopVideo, 14);
  forceAutoPlay(slide14LoopVideo, 14);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  if (n > slide.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  slide[slideIndex - 1].style.display = "block";

  removeArrows(slideIndex);
}

showSlides(slideIndex);

// detect the end of the first layer of animation
animStart.addEventListener("ended", function() {
  addContent();
});

// detect cta button click
readCta.addEventListener("click", function() {
  preventArrowKeyFlag = false;
  removeAnim();
  animEnd.play();

  // check to see if video has ended and move to next slide
  animEnd.addEventListener("ended", function() {
    nextSlide(2);
  });
});

// move to next slide using core showSlides function
function nextSlide(n) {
  showSlides((slideIndex = n));
}

// remove arrows on the first slide
function removeArrows(index) {
  let slideNum = index;
  if (slideNum == 1 && firstPageLoad == true) {
    leftButton.style.display = "none";
    rightButton.style.display = "none";
    firstPageLoad = false;
  } else {
    leftButton.style.display = "block";
    rightButton.style.display = "block";
  }
}

// make content visible in the browser but still occupy space in DOM
function addContent() {
  content.style.visibility = "visible";
}

// remove first layer animation, remove content, and add second layer animation to the DOM
function removeAnim() {
  let removeStartAnim = (document.getElementById(
    "slideAnimStart"
  ).style.display = "none");
  content.style.visibility = "hidden";

  // display second layer of animation ONLY if the first layer has been removed
  if (removeStartAnim) {
    animEnd.style.display = "block";
  }
}

function reAddAnim() {
  let removeStartAnim = (document.getElementById(
    "slideAnimStart"
  ).style.display = "block");
  content.style.visibility = "visible";

  // display second layer of animation ONLY if the first layer has been removed
  if (removeStartAnim) {
    animEnd.style.display = "none";
  }
}

showDropDown.addEventListener("click", function() {
  lazyLoad("none", slideIndex);
  dropdown.style.visibility = "visible";
  showDropDown.style.display = "none";
  hideDropDown.style.display = "block";
});

hideDropDown.addEventListener("click", function() {
  dropdown.style.visibility = "hidden";
  showDropDown.style.display = "block";
  hideDropDown.style.display = "none";
});

// function to remove video banners
function removeSlideBanner(banner) {
  banner.style.display = "none";
}

function addSlideBanner(banner) {
  banner.style.display = "block";
}

slide3PlayButton.addEventListener("click", function(e) {
  slide3VimVideo.src += "&autoplay=1";
  removeSlideBanner(slide3VideoBanner);
  e.preventDefault();
});

leftArrow.addEventListener("click", function(e) {
  //If the slide index is 3, replace the autoplay query string param with autopause.
  //NOTE: The user must click the banner in order for the autoplay param to be present
  //      in the video's URL; otherwise, this replace method will do nothing.
  if (slideIndex != 2) {
    slide3VimVideo.src = slide3VimVideo.src.replace(
      "&autoplay=1",
      "&autopause=1"
    );
  } else {
    //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
    addSlideBanner(slide3VideoBanner);
    slide3VimVideo.src = slide3VimVideo.src.replace("&autopause=1", "");
  }
  preventArrowKeyFlag = false;
  newSlide(-1);
  reanimate();
  e.preventDefault();
});

rightArrow.addEventListener("click", function(e) {
  //If the slide index is 3, replace the autoplay query string param with autopause.
  //NOTE: The user must click the banner in order for the autoplay param to be present
  //      in the video's URL; otherwise, this replace method will do nothing.
  if (slideIndex != 2) {
    slide3VimVideo.src = slide3VimVideo.src.replace(
      "&autoplay=1",
      "&autopause=1"
    );
  } else {
    //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
    addSlideBanner(slide3VideoBanner);
    slide3VimVideo.src = slide3VimVideo.src.replace("&autopause=1", "");
  }
  preventArrowKeyFlag = false;
  newSlide(1);
  reanimate();
  e.preventDefault();
});

slide5PlayButton.addEventListener("click", function(e) {
  slide5VimVideo.style.display = "block";
  // find a way to prevent the black screen when removing video from the DOM
  // need to add a loader or progress indicator video needs time to render because vimeo is SLOW!!!!
  slide5VimVideo.src += "&autoplay=1";
  removeSlideBanner(slide5VideoBanner);
  addFadeOutAnimation("slide5LoopVideo");
  e.preventDefault();
});

leftArrow.addEventListener("click", function(e) {
  lazyLoad("left", slideIndex);
  //If the slide index is 3, replace the autoplay query string param with autopause.
  //NOTE: The user must click the banner in order for the autoplay param to be present
  //      in the video's URL; otherwise, this replace method will do nothing.
  if (slideIndex != 5) {
    slide5VimVideo.src = slide5VimVideo.src.replace(
      "&autoplay=1",
      "&autopause=1"
    );
  } else {
    //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
    addSlideBanner(slide5VideoBanner);
    slide5VimVideo.src = slide5VimVideo.src.replace("&autopause=1", "");
  }
  e.preventDefault();
});

rightArrow.addEventListener("click", function(e) {
  lazyLoad("right", slideIndex);
  //If the slide index is 3, replace the autoplay query string param with autopause.
  //NOTE: The user must click the banner in order for the autoplay param to be present
  //      in the video's URL; otherwise, this replace method will do nothing.
  if (slideIndex != 5) {
    slide5VimVideo.src = slide5VimVideo.src.replace(
      "&autoplay=1",
      "&autopause=1"
    );
  } else {
    //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
    addSlideBanner(slide5VideoBanner);
    slide5VimVideo.src = slide5VimVideo.src.replace("&autopause=1", "");
  }
  e.preventDefault();
});

// force looping videos to autoplay
function forceAutoPlay(video, n) {
  if (slideIndex == n) {
    video.play();
  }
}

function pauseVideo(video, n) {
  if (slideIndex !== n) {
    video.pause();
    addSlideBanner(slide5VideoBanner);
  }
}

function reanimate() {
  if (slideIndex == 1 && firstPageLoad == false) {
    reAddAnim();
    animStart.currentTime = 5;
  }
}

slide14PlayButton.addEventListener("click", function(e) {
  removeSlideBanner(slide14VideoBanner);
  removeLoopingVideo(slide14LoopVideo, 3000);
  slide14VimVideo.style.display = "block";
  slide14VimVideo.src += "&autoplay=1";
  e.preventDefault();
});

leftArrow.addEventListener("click", function(e) {
  //If the slide index is 3, replace the autoplay query string param with autopause.
  //NOTE: The user must click the banner in order for the autoplay param to be present
  //      in the video's URL; otherwise, this replace method will do nothing.
  if (slideIndex != 14) {
    slide14VimVideo.src = slide14VimVideo.src.replace(
      "&autoplay=1",
      "&autopause=1"
    );
  } else {
    //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
    addSlideBanner(slide14VideoBanner);
    slide14VimVideo.src = slide14VimVideo.src.replace("&autopause=1", "");
  }
  e.preventDefault();
});

rightArrow.addEventListener("click", function(e) {
  //If the slide index is 3, replace the autoplay query string param with autopause.
  //NOTE: The user must click the banner in order for the autoplay param to be present
  //      in the video's URL; otherwise, this replace method will do nothing.
  if (slideIndex != 14) {
    slide14VimVideo.src = slide14VimVideo.src.replace(
      "&autoplay=1",
      "&autopause=1"
    );
  } else {
    //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
    addSlideBanner(slide14VideoBanner);
    slide14VimVideo.src = slide14VimVideo.src.replace("&autopause=1", "");
  }
  e.preventDefault();
});

// added delay to eliminate blackness when video is removed
function removeLoopingVideo(video, delay) {
  setTimeout(function() {
    video.style.display = "none";
  }, delay);
}

function pauseVideo(video, n) {
  if (slideIndex !== n) {
    video.pause();
    addSlideBanner(slide14VideoBanner);
  }
}

function playSlideVideo() {
  if (slideIndex == 4) {
    slide4Video.play();
  } else if (slideIndex == 12) {
    slide12Video.play();
  }
}

//modal logic
//! clean up - just get it to work for 9/5/2019
// images
let image1 = document.getElementById("grid-image-1");
let image2 = document.getElementById("grid-image-2");
let image3 = document.getElementById("grid-image-3");
let image4 = document.getElementById("grid-image-4");
let image5 = document.getElementById("grid-image-5");
let image6a = document.getElementById("grid-image-6a");
let image7a = document.getElementById("grid-image-7a");
let image6 = document.getElementById("grid-image-6");
let image7 = document.getElementById("grid-image-7");
let image8 = document.getElementById("grid-image-8");
let image9 = document.getElementById("grid-image-9");
let image10 = document.getElementById("grid-image-10");
let image11 = document.getElementById("grid-image-11");
let image12 = document.getElementById("grid-image-12");
let image13 = document.getElementById("grid-image-13");
let image14a = document.getElementById("grid-image-14a");
let image15a = document.getElementById("grid-image-15a");
let image14b = document.getElementById("grid-image-14b");
let image15b = document.getElementById("grid-image-15b");
let image16 = document.getElementById("grid-image-16");
let image17 = document.getElementById("grid-image-17");
let image18 = document.getElementById("grid-image-18");
let image19 = document.getElementById("grid-image-19");
let image20 = document.getElementById("grid-image-20");
let image21 = document.getElementById("grid-image-21");
let image22 = document.getElementById("grid-image-22");
let image23 = document.getElementById("grid-image-23");
let image24 = document.getElementById("grid-image-24");
let image25 = document.getElementById("grid-image-25");
let image24b = document.getElementById("grid-image-24b");
let image25b = document.getElementById("grid-image-25b");
let image26 = document.getElementById("grid-image-26");
let image27 = document.getElementById("grid-image-27");
let image28 = document.getElementById("grid-image-28");
let image29 = document.getElementById("grid-image-29");
let image30 = document.getElementById("grid-image-30");
let image31 = document.getElementById("grid-image-31");
let image32 = document.getElementById("grid-image-32");
let image33 = document.getElementById("grid-image-33");
let image34 = document.getElementById("grid-image-34");
let image35 = document.getElementById("grid-image-35");
let image36 = document.getElementById("grid-image-36");
let image37 = document.getElementById("grid-image-37");
let image38 = document.getElementById("grid-image-38");
let image39 = document.getElementById("grid-image-39");
let image40 = document.getElementById("grid-image-40");
let image41 = document.getElementById("grid-image-41");

let modalImage1 = document.getElementById("image1");
let modalImage2 = document.getElementById("image2");
let modalImage3 = document.getElementById("image3");
let modalImage4 = document.getElementById("image4");
let modalImage5 = document.getElementById("image5");
let modalImage6 = document.getElementById("image6");
let modalImage7 = document.getElementById("image7");
let modalImage8 = document.getElementById("image8");
let modalImage9 = document.getElementById("image9");
let modalImage10 = document.getElementById("image10");
let modalImage11 = document.getElementById("image11");
let modalImage12 = document.getElementById("image12");
let modalImage13 = document.getElementById("image13");
let modalImage14a = document.getElementById("image14a");
let modalImage15a = document.getElementById("image15a");
let modalImage14b = document.getElementById("image14b");
let modalImage15b = document.getElementById("image15b");
let modalImage16 = document.getElementById("image16");
let modalImage17 = document.getElementById("image17");
let modalImage18 = document.getElementById("image18");
let modalImage19 = document.getElementById("image19");
let modalImage21 = document.getElementById("image21");
let modalImage22 = document.getElementById("image22");
let modalImage23 = document.getElementById("image23");
let modalImage24 = document.getElementById("image24");
let modalImage25 = document.getElementById("image25");
let modalImage24b = document.getElementById("image24b");
let modalImage25b = document.getElementById("image25b");
let modalImage26 = document.getElementById("image26");
let modalImage27 = document.getElementById("image27");
let modalImage28 = document.getElementById("image28");
let modalImage29 = document.getElementById("image29");
let modalImage30 = document.getElementById("image30");
let modalImage31 = document.getElementById("image31");
let modalImage32 = document.getElementById("image32");
let modalImage33 = document.getElementById("image33");
let modalImage34 = document.getElementById("image34");
let modalImage35 = document.getElementById("image35");
let modalImage36 = document.getElementById("image36");
let modalImage37 = document.getElementById("image37");
let modalImage38 = document.getElementById("image38");
let modalImage39 = document.getElementById("image39");
let modalImage40 = document.getElementById("image40");
let modalImage41 = document.getElementById("image41");

let captionImage1 = document.getElementById("caption1");
let captionImage2 = document.getElementById("caption2");
let captionImage3 = document.getElementById("caption3");
let captionImage4 = document.getElementById("caption4");
let captionImage5 = document.getElementById("caption5");
let captionImage6 = document.getElementById("caption6");
let captionImage7 = document.getElementById("caption7");
let captionImage8 = document.getElementById("caption8");
let captionImage9 = document.getElementById("caption9");
let captionImage10 = document.getElementById("caption10");
let captionImage11 = document.getElementById("caption11");
let captionImage12 = document.getElementById("caption12");
let captionImage13 = document.getElementById("caption13");
let captionImage14a = document.getElementById("caption14a");
let captionImage15a = document.getElementById("caption15a");
let captionImage14b = document.getElementById("caption14b");
let captionImage15b = document.getElementById("caption15b");
let captionImage16 = document.getElementById("caption16");
let captionImage17 = document.getElementById("caption17");
let captionImage18 = document.getElementById("caption18");
let captionImage19 = document.getElementById("caption19");
let captionImage21 = document.getElementById("caption21");
let captionImage22 = document.getElementById("caption22");
let captionImage23 = document.getElementById("caption23");
let captionImage24 = document.getElementById("caption24");
let captionImage25 = document.getElementById("caption25");
let captionImage24b = document.getElementById("caption24b");
let captionImage25b = document.getElementById("caption25b");
let captionImage26 = document.getElementById("caption26");
let captionImage27 = document.getElementById("caption27");
let captionImage28 = document.getElementById("caption28");
let captionImage29 = document.getElementById("caption29");
let captionImage30 = document.getElementById("caption30");
let captionImage31 = document.getElementById("caption31");
let captionImage32 = document.getElementById("caption32");
let captionImage33 = document.getElementById("caption33");
let captionImage34 = document.getElementById("caption34");
let captionImage35 = document.getElementById("caption35");
let captionImage36 = document.getElementById("caption36");
let captionImage37 = document.getElementById("caption37");
let captionImage38 = document.getElementById("caption38");
let captionImage39 = document.getElementById("caption39");
let captionImage40 = document.getElementById("caption40");
let captionImage41 = document.getElementById("caption41");

image1.onclick = function() {
  modal1.style.display = "block";
};

image2.onclick = function() {
  modal2.style.display = "block";
};

image3.onclick = function() {
  modal3.style.display = "block";
};

image4.onclick = function() {
  modal4.style.display = "block";
};

image5.onclick = function() {
  modal5.style.display = "block";
};

image6.onclick = function() {
  modal6.style.display = "block";
};
image6a.onclick = function() {
  modal6.style.display = "block";
};

image7.onclick = function() {
  modal7.style.display = "block";
};
image7a.onclick = function() {
  modal7.style.display = "block";
};
image8.onclick = function() {
  modal8.style.display = "block";
};
image9.onclick = function() {
  modal9.style.display = "block";
};
image10.onclick = function() {
  modal10.style.display = "block";
};
image11.onclick = function() {
  modal11.style.display = "block";
};
image12.onclick = function() {
  modal12.style.display = "block";
};
image13.onclick = function() {
  modal13.style.display = "block";
};
image14a.onclick = function() {
  modal14a.style.display = "block";
};
image15a.onclick = function() {
  modal15a.style.display = "block";
};
image14b.onclick = function() {
  modal14b.style.display = "block";
};
image15b.onclick = function() {
  modal15b.style.display = "block";
};
image16.onclick = function() {
  modal16.style.display = "block";
};
image17.onclick = function() {
  modal17.style.display = "block";
};
image18.onclick = function() {
  modal18.style.display = "block";
};
image19.onclick = function() {
  modal19.style.display = "block";
};
image21.onclick = function() {
  modal21.style.display = "block";
};
image22.onclick = function() {
  modal22.style.display = "block";
};
image23.onclick = function() {
  modal23.style.display = "block";
};
image24.onclick = function() {
  modal24.style.display = "block";
};
image25.onclick = function() {
  modal25.style.display = "block";
};
image24b.onclick = function() {
  modal24b.style.display = "block";
};
image25b.onclick = function() {
  modal25b.style.display = "block";
};
image26.onclick = function() {
  modal26.style.display = "block";
};
image27.onclick = function() {
  modal27.style.display = "block";
};
image28.onclick = function() {
  modal28.style.display = "block";
};

image29.onclick = function() {
  modal29.style.display = "block";
};
image30.onclick = function() {
  modal30.style.display = "block";
};
image31.onclick = function() {
  modal31.style.display = "block";
};
image32.onclick = function() {
  modal32.style.display = "block";
};
image33.onclick = function() {
  modal33.style.display = "block";
};
image34.onclick = function() {
  modal34.style.display = "block";
};
image35.onclick = function() {
  modal35.style.display = "block";
};

image36.onclick = function() {
  modal36.style.display = "block";
};
image37.onclick = function() {
  modal37.style.display = "block";
};
image38.onclick = function() {
  modal38.style.display = "block";
};
image39.onclick = function() {
  modal39.style.display = "block";
};
image40.onclick = function() {
  modal40.style.display = "block";
};
image41.onclick = function() {
  modal41.style.display = "block";
};

// close modal
close1.onclick = function() {
  modal1.style.display = "none";
};

close2.onclick = function() {
  modal2.style.display = "none";
};

close3.onclick = function() {
  modal3.style.display = "none";
};
close4.onclick = function() {
  modal4.style.display = "none";
};
close5.onclick = function() {
  modal5.style.display = "none";
};
close6.onclick = function() {
  modal6.style.display = "none";
};
close7.onclick = function() {
  modal7.style.display = "none";
};
close8.onclick = function() {
  modal8.style.display = "none";
};
close9.onclick = function() {
  modal9.style.display = "none";
};
close10.onclick = function() {
  modal10.style.display = "none";
};
close11.onclick = function() {
  modal11.style.display = "none";
};
close12.onclick = function() {
  modal12.style.display = "none";
};
close13.onclick = function() {
  modal13.style.display = "none";
};
close14a.onclick = function() {
  modal14a.style.display = "none";
};
close15a.onclick = function() {
  modal15a.style.display = "none";
};
close14b.onclick = function() {
  modal14b.style.display = "none";
};
close15b.onclick = function() {
  modal15b.style.display = "none";
};
close16.onclick = function() {
  modal16.style.display = "none";
};
close17.onclick = function() {
  modal17.style.display = "none";
};
close18.onclick = function() {
  modal18.style.display = "none";
};
close19.onclick = function() {
  modal19.style.display = "none";
};
close21.onclick = function() {
  modal21.style.display = "none";
};
close22.onclick = function() {
  modal22.style.display = "none";
};
close23.onclick = function() {
  modal23.style.display = "none";
};
close24.onclick = function() {
  modal24.style.display = "none";
};
close25.onclick = function() {
  modal25.style.display = "none";
};
close24b.onclick = function() {
  modal24b.style.display = "none";
};
close25b.onclick = function() {
  modal25b.style.display = "none";
};
close26.onclick = function() {
  modal26.style.display = "none";
};
close27.onclick = function() {
  modal27.style.display = "none";
};
close28.onclick = function() {
  modal28.style.display = "none";
};
close29.onclick = function() {
  modal29.style.display = "none";
};
close30.onclick = function() {
  modal30.style.display = "none";
};
close31.onclick = function() {
  modal31.style.display = "none";
};
close32.onclick = function() {
  modal32.style.display = "none";
};
close33.onclick = function() {
  modal33.style.display = "none";
};
close34.onclick = function() {
  modal34.style.display = "none";
};
close35.onclick = function() {
  modal35.style.display = "none";
};
close36.onclick = function() {
  modal36.style.display = "none";
};
close37.onclick = function() {
  modal37.style.display = "none";
};
close38.onclick = function() {
  modal38.style.display = "none";
};
close39.onclick = function() {
  modal39.style.display = "none";
};
close40.onclick = function() {
  modal40.style.display = "none";
};
close41.onclick = function() {
  modal41.style.display = "none";
};

//function for esc key...extend method
// hacky but works
window.onkeydown = function(event) {
  if (event.keyCode == 27) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";
    modal8.style.display = "none";
    modal9.style.display = "none";
    modal10.style.display = "none";
    modal11.style.display = "none";
    modal12.style.display = "none";
    modal13.style.display = "none";

    modal14a.style.display = "none";
    modal14b.style.display = "none";

    modal15a.style.display = "none";
    modal15b.style.display = "none";
    modal16.style.display = "none";
    modal17.style.display = "none";
    modal18.style.display = "none";
    modal19.style.display = "none";

    modal21.style.display = "none";
    modal22.style.display = "none";
    modal23.style.display = "none";
    modal24.style.display = "none";
    modal25.style.display = "none";
    modal26.style.display = "none";
    modal27.style.display = "none";
    modal28.style.display = "none";
    modal29.style.display = "none";
    modal30.style.display = "none";
    modal31.style.display = "none";
    modal32.style.display = "none";
    modal33.style.display = "none";
    modal34.style.display = "none";
    modal35.style.display = "none";
    modal36.style.display = "none";
    modal37.style.display = "none";
    modal38.style.display = "none";
    modal39.style.display = "none";
    modal40.style.display = "none";
    modal41.style.display = "none";
    postModal1.style.display = "none";
    postModal2.style.display = "none";
    postModal3.style.display = "none";
    postModal4.style.display = "none";
    postModal5.style.display = "none";

    // hack to fix bug - images disappear when esc key is pressed
    postImage1.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Brown-front.png";
    postImage2.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Paik-front.png";
    postImage3.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Hopkins-front.png";
    postImage4.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Requina-front.png";
    postImage5.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Dorbad-front.png";
  }
};

// postcard modal
// grab post card image id
let postImage1 = document.getElementById("postCardImage1");
let postImage2 = document.getElementById("postCardImage2");
let postImage3 = document.getElementById("postCardImage3");
let postImage4 = document.getElementById("postCardImage4");
let postImage5 = document.getElementById("postCardImage5");

// grab modal image id
let postModal1 = document.getElementById("postModal1");
let postModal2 = document.getElementById("postModal2");
let postModal3 = document.getElementById("postModal3");
let postModal4 = document.getElementById("postModal4");
let postModal5 = document.getElementById("postModal5");

// grab caption
let postCaption1 = document.getElementById("postCaption1");
let postCaption2 = document.getElementById("postCaption2");
let postCaption3 = document.getElementById("postCaption3");
let postCaption4 = document.getElementById("postCaption5");

postImage1.onclick = function() {
  postModal1.style.display = "block";
  postImage1.src = this.src;
  postCaption1.innerHtml = this.alt;
};

postClose1.onclick = function() {
  postModal1.style.display = "none";
  postImage1.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Brown-front.png";
};

postImage2.onclick = function() {
  postModal2.style.display = "block";
  postImage2.src = this.src;
  postCaption2.innerHtml = this.alt;
};

postClose2.onclick = function() {
  postModal2.style.display = "none";
  postImage2.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Paik-front.png";
};

postImage3.onclick = function() {
  postModal3.style.display = "block";
  postImage3.src = this.src;
  postCaption3.innerHtml = this.alt;
};

postClose3.onclick = function() {
  postModal3.style.display = "none";
  postImage3.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Hopkins-front.png";
};

postImage4.onclick = function() {
  postModal4.style.display = "block";
  postImage4.src = this.src;
  postCaption4.innerHtml = this.alt;
};

postClose4.onclick = function() {
  postModal4.style.display = "none";
  postImage4.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Requina-front.png";
};

postImage5.onclick = function() {
  postModal5.style.display = "block";
  postImage5.src = this.src;
  postCaption5.innerHtml = this.alt;
};

postClose5.onclick = function() {
  postModal5.style.display = "none";
  postImage5.src = "https://www.evms.edu/uploads/12.1/feature-panama/assets/images/post-card-Dorbad-front.png";
};

document.addEventListener(
  "keydown",
  function(event) {
    const keyName = event.key;
    if (keyName == "ArrowLeft") {
      if (preventArrowKeyFlag == false) {
        //If the slide index is 3, replace the autoplay query string param with autopause.
        //NOTE: The user must click the banner in order for the autoplay param to be present
        //      in the video's URL; otherwise, this replace method will do nothing.
        if (slideIndex != 2) {
          slide3VimVideo.src = slide3VimVideo.src.replace(
            "&autoplay=1",
            "&autopause=1"
          );
        } else {
          //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
          addSlideBanner(slide3VideoBanner);
          slide3VimVideo.src = slide3VimVideo.src.replace("&autopause=1", "");
        }
        newSlide(-1);
        reanimate();
      }
    } else if (keyName == "ArrowRight") {
      if (preventArrowKeyFlag == false) {
        //If the slide index is 3, replace the autoplay query string param with autopause.
        //NOTE: The user must click the banner in order for the autoplay param to be present
        //      in the video's URL; otherwise, this replace method will do nothing.
        if (slideIndex != 2) {
          slide3VimVideo.src = slide3VimVideo.src.replace(
            "&autoplay=1",
            "&autopause=1"
          );
        } else {
          //Adds the autoplay parameter again, and removes the autopause param for cleanliness.
          addSlideBanner(slide3VideoBanner);
          slide3VimVideo.src = slide3VimVideo.src.replace("&autopause=1", "");
        }
        newSlide(1);
        reanimate();
      }
    }
  },
  false
);

//The removeLoopingVideo function must be called right before adding the fadeout class.
//This is because the timeout function waits to remove the top video for 4 seconds.
//And in that time, the fadeout animation CSS is also slowly fading the top video to opacity 0.
function addFadeOutAnimation(ID) {
  removeLoopingVideo(slide5LoopVideo, 4000);
  document.getElementById(ID).classList.add("fadeOutAnimation");
}
