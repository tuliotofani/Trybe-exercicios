const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
});

const userName = document.querySelector('#name');
submit.addEventListener('click', () => {
    if (userName.checkValidity()) {
        alert('Dados enviados com sucesso!')
    } else {
        alert('Error!')
    }
});