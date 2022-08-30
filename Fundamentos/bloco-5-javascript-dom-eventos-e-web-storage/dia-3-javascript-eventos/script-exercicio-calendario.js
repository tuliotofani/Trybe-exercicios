function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2];

const days = document.querySelector('#days');
function cretateDaysCalendar () {
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const dayList = document.createElement('li');
        dayList.setAttribute('class', 'day')
        dayList.innerText = decemberDaysList[index];
        days.appendChild(dayList);
    }
}

cretateDaysCalendar();

function addClassholiday(n) {
    let holiday = document.querySelector('#days').children[n + 1];
    holiday.classList.add('holiday');
}

addClassholiday(24);
addClassholiday(25);
addClassholiday(31);

function addClassFriday() {
    for (let index = 5; index < decemberDaysList.length; index += 7) {
        let friday = document.querySelector('#days').children[index];
        friday.classList.add('friday');
    }
}

addClassFriday();

const buttonHoliday = document.querySelector('.buttons-container');
function Feriados(newButton) {
    const button = document.createElement('button');
    button.setAttribute('id', 'btn-holiday');
    button.innerHTML = newButton
    buttonHoliday.appendChild(button);
}

Feriados('Feriados');

function changeBackGroundColorHoliday() {
    let holiday = document.getElementsByClassName('holiday');
    for (let index = 0; index < holiday.length; index += 1){
        if (holiday[index].style.backgroundColor = 'rgb(238,238,238)') {
            holiday[index].style.backgroundColor = 'blue';
        } else {
            holiday[index].style.backgroundColor = 'rgb(238,238,238)'
        }
    }    
}

const button = document.getElementById('btn-holiday');
button.addEventListener('click', changeBackGroundColorHoliday);

// function changeBackGroundColorHoliday2() {
//     let holiday = document.getElementsByClassName('holiday');
//     for (let index = 0; index < holiday.length; index += 1){
//         holiday[index].style.backgroundColor = 'rgb(238,238,238)';
//     }    
// }

// const button2 = document.getElementById('btn-holiday');
// button2.addEventListener('click', changeBackGroundColorHoliday2);