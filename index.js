// Get each modal and close button
const triggers = document.getElementsByClassName('trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('card__modal');
const closeButtons = document.getElementsByClassName('card__modal__close');
const modalVideo = document.getElementById('modalVideo');

function disableScroll() {
  html.style.overflow = "hidden";
}
function enableScroll() {
  html.style.overflow = null;
}

// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close
for (let [index, trigger] of triggerArray) {
  let triggerIndex = index;
  function toggleModal() {
    // Optionally toggle a class for CSS animations
    modals[triggerIndex].classList.toggle('show-modal');
    if (modals[triggerIndex].classList.contains('show-modal')) {
      disableScroll();
      let lazyVids = document.getElementsByTagName('iframe');
          if (lazyVids.getAttribute('data-src')) {
              lazyVids.setAttribute('src', lazyVids.getAttribute('data-src'));
          }
    } else {
      card__modal.style.display = "none";
      /* modalVideo.src = iframe.src + '?autoplay=0'; */
      enableScroll();
      lazyVids.setAttribute('src',"");
    }
  }
}
trigger.addEventListener("click", toggleModal);
closeButtons[triggerIndex].addEventListener("click", toggleModal);
    /* closeModal[triggerIndex].addEventListener("click", function () {
  card__modal.style.display = "none";
  modalVideo.src = iframe.src + '?autoplay=0';
  enableScroll();
});;*/


