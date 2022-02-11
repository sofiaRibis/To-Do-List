//se volgio il nome del giorno
const week = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById('week-name').innerHTML = days[week.getDay()] + ',';

//se volgio il numero del giorno
const d = new Date();
document.getElementById("day-number").innerHTML = d.getDate();

//se voglio il nome del mese
const month = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById('month').innerHTML = months[month.getMonth()]


//per quando gli li vengono flaggati
let checkedItems = document.querySelectorAll('label input');
let listItems = document.querySelectorAll('label');
let text = document.querySelectorAll('label p');
let li = document.querySelectorAll('li');


checkedItems.forEach(checkedItem => {
    checkedItem.addEventListener('click', function () {

        console.log(checkedItem.checked);

        if (checkedItem.checked === true) {
            listItems.forEach(item => {
                item.classList.add('checked-item');
            });

            text.forEach(item => {
                item.classList.add('checked-task');
            });
        } else {
            listItems.forEach(item => {
                item.classList.remove('checked-item');
            });

            text.forEach(item => {
                item.classList.remove('checked-task');
            });
        }
    });
});

//delete item 
let trash = document.querySelectorAll('.delete');

trash.forEach(junk => {
    junk.addEventListener('click', function () {
        console.log('ciao');

        li.forEach(item => {
            item.style.display = 'none';
        });

    });
});

//modal pop up
let addTask = document.querySelector('.addTask');
let modalPopupTask = document.querySelector('.modal-add-task');
let saved = document.querySelector('popup button');

addTask.addEventListener('click', function () {
    modalPopupTask.classList.add('flex-popup');
});







