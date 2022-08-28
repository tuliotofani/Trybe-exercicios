const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
for ( let index = 0; index < emergencyTasksHeader.length; index += 1) {
    emergencyTasksHeader[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeader.length; index += 1) {
    noEmergencyTasksHeader[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footerConteiner = document.getElementById('footer-container');
footerConteiner.style.backgroundColor = 'rgb(0, 53, 51)';