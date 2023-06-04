# 일정관리 앱

## js 코드
### localStorage.js
```js
obj = JSON.parse(localStorage.getItem("obj")) || []
```
local에 저장된 obj값을 obj에 불러옴
```js
localStorage.setItem("obj", JSON.stringify(obj))
```
delShow와 add 함수에 수정된 obj값 저장

### class.js
```js
constructor() {
        this.Ul_schedule = document.querySelector('ul');
        this.form = document.querySelector('form');
        this.scheduleInput = document.querySelector('input');
        this.obj = JSON.parse(localStorage.getItem("obj")) || []
        this.no = 1;
        this.common();
    }
```
기존 localStorage.js에 있던 함수들을 ScheduleManager클래스로 지정
기존 localStorage.js에 있던 변수들을 constructor() 안에 this로 선언

### module
1. delshow.js
```js
export const delShow = (delBtn, obj, id) => {
    delBtn.addEventListener('click', e => {
        obj = JSON.parse(localStorage.getItem("obj")) || []
        obj = obj.filter(item => item.id !== id)
        e.currentTarget.parentElement.remove()
        localStorage.setItem("obj", JSON.stringify(obj));
        console.log(obj);
    })
}
```
2. toggle.js
```js
export let toggle = (p, p2) => {
    p.addEventListener('click', e => {
        p.classList.toggle('on')
        p2.classList.toggle('on')
    })
}
```
3. show.js
```js
import { toggle } from './toggle.js';
import { delShow } from './delShow.js';
const show = (Ul_schedule, obj, scheduleInput) => {
    Ul_schedule.innerHTML = ''
    obj.forEach(item => {
        const { id, text } = item
        let li = document.createElement('li')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let delBtn = document.createElement('button')
        let span = document.createElement('span')
        p.innerHTML = `<i class="xi-check"></i>`
        p2.textContent = `${text}`
        toggle(p, p2)
        span.textContent = "삭제"
        delBtn.append(span)
        li.append(p, p2, delBtn)
        Ul_schedule.append(li)
        delShow(delBtn, obj, id)
    })
    scheduleInput.value = ''
    scheduleInput.focus()
}

export default show
```
show.js에 toggle.js와 delshow.js를 import

4. app.js
```js
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
```
show.js를 app.js에 import

