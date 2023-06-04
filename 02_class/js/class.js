// localStorage.clear()
class ScheduleManager {
    constructor() {
        this.Ul_schedule = document.querySelector('ul');
        this.form = document.querySelector('form');
        this.scheduleInput = document.querySelector('input');
        this.obj = JSON.parse(localStorage.getItem("obj")) || []
        this.no = 1;
        this.common();
    }
    common() {
        this.show()
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.add()
            this.show()
        })
    }
    delShow(delBtn, id) {
        delBtn.addEventListener('click', e => {
            this.obj = this.obj.filter(item => item.id !== id)
            localStorage.setItem("this.obj", JSON.stringify(this.obj))
            e.currentTarget.parentElement.remove()
        })
    }
    toggle(p, p2) {
        p.addEventListener('click', e => {
            p.classList.toggle('on')
            p2.classList.toggle('on')
        })
    }
    show() {
        this.Ul_schedule.innerHTML = ''
        this.obj.forEach(item => {
            const { id, text } = item
            let li = document.createElement('li')
            let p = document.createElement('p')
            let p2 = document.createElement('p')
            let delBtn = document.createElement('button')
            p.innerHTML = `<i class="xi-check"></i>`
            p2.textContent = `${text}`
            this.toggle(p, p2)
            delBtn.textContent = "삭제"
            li.append(p, p2, delBtn)
            this.Ul_schedule.append(li)
            this.delShow(delBtn, id)
        })
        this.scheduleInput.value = ''
        this.scheduleInput.focus()
    }
    add() {
        this.obj = [...this.obj,
        { id: this.no++, text: this.scheduleInput.value }
        ]
        localStorage.setItem("this.obj", JSON.stringify(this.obj))
    }
}
const scheduleManager = new ScheduleManager()

// const delShow = (delBtn, id) => {
//     delBtn.addEventListener('click', e => {
//         obj = obj.filter(item => item.id !== id)
//         localStorage.setItem("obj", JSON.stringify(obj))
//         e.currentTarget.parentElement.remove()
//     })
// }
// const toggle = (p, p2) => {
//     p.addEventListener('click', e => {
//         p.classList.toggle('on')
//         p2.classList.toggle('on')
//     })
// }
// const show = () => {
//     Ul_schedule.innerHTML = ''
//     obj.forEach(item => {
//         const { id, text } = item
//         let li = document.createElement('li')
//         let p = document.createElement('p')
//         let p2 = document.createElement('p')
//         let delBtn = document.createElement('button')
//         p.innerHTML = `<i class="xi-check"></i>`
//         p2.textContent = `${text}`
//         toggle(p, p2)
//         delBtn.textContent = "삭제"
//         li.append(p, p2, delBtn)
//         Ul_schedule.append(li)
//         delShow(delBtn, id)
//     })
//     scheduleInput.value = ''
//     scheduleInput.focus()
// }

// const add = () => {
//     obj = [...obj,
//     { id: no++, text: scheduleInput.value }
//     ]
//     localStorage.setItem("obj", JSON.stringify(obj))
// }



