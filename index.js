// Get each modal and close button
const triggers = document.getElementsByClassName('trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('card__modal');
const closeButtons = document.getElementsByClassName('card__modal__close');

// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close
for (let [index, trigger] of triggerArray) {
let triggerIndex = index;
function toggleModal() {
  // Optionally toggle a class for CSS animations
modals[triggerIndex].classList.toggle('show-modal');
}
trigger.addEventListener("click", toggleModal);
closeButtons[triggerIndex].addEventListener("click", toggleModal);
}

document.addEventListener("DOMContentLoaded", function () {
  if ("IntersectionObserver" in window) {
      let lazyVids = document.querySelectorAll("iframe");
      let vidObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
              if (entry.isIntersecting && entry.target.src.length == 0) {                    
                  entry.target.src = entry.target.dataset.src;
                  vidObserver.unobserve(entry.target);
              }
          });
      });

      lazyVids.forEach(function (vid) {
          vidObserver.observe(vid);
      });
  // if the IntersectionObserver is not available just load all
  } else {
      let lazyVids = document.getElementsByTagName('iframe');

      for (var i = 0; i < lazyVids.length; i++) {
          if (lazyVids[i].getAttribute('data-src')) {
              lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('data-src'));
          }
      }
  }
})
