import show from './module/show.js'
const Ul_schedule = document.querySelector('ul');
const form = document.querySelector('form');
const scheduleInput = document.querySelector('input');
// localStorage.clear()
let obj = []
let no = 1;
obj = JSON.parse(localStorage.getItem("obj")) || []

show(Ul_schedule, obj, scheduleInput)
const add = () => {
    obj = JSON.parse(localStorage.getItem("obj")) || []
    obj = [
        ...obj,
        { id: no++, text: scheduleInput.value }
    ];
    localStorage.setItem("obj", JSON.stringify(obj));
};

form.addEventListener('submit', e => {
    e.preventDefault()
    add()
    show(Ul_schedule, obj, scheduleInput)

})


