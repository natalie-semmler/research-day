// Get each modal and close button
const triggers = document.getElementsByClassName('trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('card__modal');
const closeButtons = document.getElementsByClassName('card__modal__close');
const modalVideo = document.getElementById('modalVideo');
//const closeModal = document.getElementById('closeModal'); 
/* const modal147707 = document.getElementById ('modal147707');
const card147707 = document.getElementById ('card147707'); */
// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close

for (let [index, trigger] of triggerArray) {
let triggerIndex = index;

console.log(triggerIndex)

function toggleModal() {
  // Optionally toggle a class for CSS animations
  modals[triggerIndex].classList.toggle('show-modal')
  console.log("toggle statement called")
  console.log(modalVideo.dataset.src + " the is the modal video value" );
}
/* function closeThisModal() {
  killIframes() 
  modals[triggerIndex].classList.remove('show-modal'); 
  console.log(modalVideo.src + "  closed the modal" )
  } */
trigger.addEventListener("click", toggleModal);

closeButtons[triggerIndex].addEventListener("click", toggleModal);

}



function killIframes() { 
  let iframes = document.getElementsByTagName('iframe') 
  iframes.forEach(function(iframe) { 
  iframe.removeAttribute('src') 
  }) 
  }


  $(function() {   
    $('iframe').attr('data-src', function() { return $(this).attr('src'); })
               .removeAttr('src');
});

// For demonstration...
$(function() {   
    $('#printout').text($('iframe').attr('data-src'));
});

  /* card147707.addEventListener('click', function() {
  modal147707.classList.add('show-modal')
  console.log ('this should be the source' + modalVideo.src)
})

closeModal.addEventListener('click', function() {
  modalVideo.src = modalVideo.src + '?autoplay=0' 
  console.log ('this should be the source once more' + modalVideo.src)
  modal147707.classList.remove('show-modal')
}) */

/*  closeModal.addEventListener("click", function () {
  modalVideo.src = iframe.src + '?autoplay=0';
  console.log ('should be closed');
 } 
 ); */
 /*  enableScroll(); */


 /* const triggers=document.querySelectorAll(".trigger")
 const modals=document.querySelectorAll(".card__modal")

triggers.forEach(function(trigger){
  trigger.addEventListener('click', function(){

 
  })
})*/