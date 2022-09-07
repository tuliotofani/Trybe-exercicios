const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
    checkValidity();
    event.preventDefault();
    
});

const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userText = document.querySelector('#seu-texto');

function checkValidity() {
    if (userName.checkValidity() === true && userEmail.checkValidity() === true && userText.checkValidity() === true) {
        alert('Dados enviados com sucesso!')
    } else {
        alert('Error!')
    }
}
