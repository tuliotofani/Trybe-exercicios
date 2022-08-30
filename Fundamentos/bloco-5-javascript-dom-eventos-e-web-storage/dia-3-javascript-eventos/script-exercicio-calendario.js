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

const buttonContainer = document.querySelector('.buttons-container');
function feriados(newButton) {
    const button = document.createElement('button');
    button.setAttribute('id', 'btn-holiday');
    button.innerHTML = newButton
    buttonContainer.appendChild(button);
}

feriados('Feriados');

function changeBackGroundColorHoliday() {
    let holiday = document.getElementsByClassName('holiday');
    for (let index = 0; index < holiday.length; index += 1){
        if (holiday[index].style.backgroundColor === 'blue') {
            holiday[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holiday[index].style.backgroundColor = 'blue'
        }
    }    
}

const button = document.getElementById('btn-holiday');
button.addEventListener('click', changeBackGroundColorHoliday);

// const buttonFriday = document.querySelector('.buttons-container');
function fridays(newButton2) {
    const button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerHTML = newButton2
    buttonContainer.appendChild(button);
}

fridays('Sexta-feira');

function changeFridayText(fridayArray) {
    const buttonFriday = document.querySelector('#btn-friday');
    const fridayDays = document.getElementsByClassName('friday');
    const newFridaytext = 'SEXTOU!!';
    // console.log(fridayDays);

    buttonFriday.addEventListener('click', function() {
        for (let index = 0; index < fridayDays.length; index += 1) {
            if (fridayDays[index].innerHTML !== newFridaytext) {
                fridayDays[index].innerHTML = newFridaytext;
            } else {
                fridayDays[index].innerHTML = fridayArray[index];
            }
        }
    });

}
let fridayArray = [4, 11, 18, 25, 1]
changeFridayText(fridayArray);

function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
    });
}

function dayMouseOut() {
   let days = document.querySelector('#days');
   days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    });
}

dayMouseOver();
dayMouseOut();

const taskContainer = document.querySelector('.my-tasks');
function addTaks(task) {    
    const addTask = document.createElement('span');
    addTask.innerHTML = task;
    taskContainer.appendChild(addTask);
}

addTaks('treinar');

function changeColorTask(color) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'task');
    newDiv.style.backgroundColor = color;
    taskContainer.appendChild(newDiv);
}

changeColorTask('red');

function sectingTask() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTask = document.querySelector('.task');
    myTask.addEventListener('click', function(event) {
        if (selectedTask.length === 0) {
            event.target.classList.add('selected');
        } else {
            event.target.setAttribute('class', 'task');
        }
    });
}

sectingTask();