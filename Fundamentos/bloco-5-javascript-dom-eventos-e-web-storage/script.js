let paragraph = document.getElementsByClassName('paragraph');
    for (let index = 0; index < paragraph.length; index++) {
        paragraph[index].innerText = 'testando';
    }
paragraph[0].style.color = 'red';
document.getElementsByTagName('h4')[0].style.color = 'aqua';