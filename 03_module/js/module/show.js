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