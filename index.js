const modal = document.getElementById('modal')
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