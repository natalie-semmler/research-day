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
}

// Get each modal and close button
/*const triggersTitle = document.getElementsByClassName('trigger__title');
const triggerArrayTitle = Array.from(triggersTitle).entries();
const modalsTitle = document.getElementsByClassName('card__modal');
const closeButtonsTitle = document.getElementsByClassName('card__modal__close');

// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close
for (let [index, trigger__title] of triggerArrayTitle) {
let triggerIndexTitle = index;
function toggleModalTitle() {
  // Optionally toggle a class for CSS animations
modalsTitle[triggerIndexTitle].classList.toggle('show-modal');
}
trigger__title.addEventListener("click", toggleModalTitle);
closeButtonsTitle[triggerIndexTitle].addEventListener("click", toggleModalTitle);
}*/
<script>
    function callPlayer(func, args) {
        var iframes = document.getElementsByTagName('iframe');
        for (var i = 0; i < iframes.length; ++i) {
            if (iframes[i]) {
                var src = iframes[i].getAttribute('src');
                if (src) {
                    if (src.indexOf('youtube.com/embed') != -1) {
                        iframes[i].contentWindow.postMessage(JSON.stringify({
                            'event': 'command',
                            'func': func,
                            'args': args || []
                        }), "*");
                    }
                }
            }
        }
    }
    </script>