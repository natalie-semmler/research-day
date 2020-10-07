/*const modal = document.getElementById('modal')
const card = document.getElementById('card')
const closeModal = document.getElementById('closeModal')

card.addEventListener('click', showModal)
closeModal.addEventListener('click', hideModal)

function showModal(source) {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = 'none'
}
NEW*/

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
closeModal();
}
/* var modal = document.querySelector('.card__modal')
var closeBtn = document.querySelector('.card__modal__close')
var player
 */
// Once the API is ready, create a player object for the
// iframe with the id="player"
/* var onYouTubeIframeAPIReady = function () {
  player = new YT.Player('player')
}

var closeModal = function () {
  modal.style.display = 'none'

  if (player) {
    player.pauseVideo()
  }
} */

//closeBtn.addEventListener('click', closeModal);
// Or inside another event handler simply call:
// closeModal()

/* // 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var firstScriptTag = document.getElementsByTagName('script')[0];
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '1j_CeB-ZMoI',
    height: '390',
    width: '640',
    frameborder: '0',
    modestbranding: '1',
    autoplay: '0',
    allowfullscreen: '0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(pauseVideo, 6000);
    done = true;
  }
}
function pauseVideo() {
  player.pauseVideo();
} */

