const modal = document.querySelector('modal')
const loginButton = document.querySelector('#logInButton')
const closeButton = document.querySelector('modal-box img')

loginButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target === modal) closeModal();
}