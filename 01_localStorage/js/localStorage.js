const Ul_schedule = document.querySelector('ul');
// const Li_schedule = document.querySelector('div ul li p');
const form = document.querySelector('form');
const scheduleInput = document.querySelector('input');
// schedule
// localStorage.clear()
let obj = []
let no = 1;
// obj = JSON.parse(localStorage.getItem("obj")) || []
const delShow = (delBtn, id) => {
    delBtn.addEventListener('click', e => {
        obj = obj.filter(item => item.id !== id)
        localStorage.setItem("obj", JSON.stringify(obj))
        e.currentTarget.parentElement.remove()
    })
}
const toggle = (p, p2) => {
    p.addEventListener('click', e => {
        p.classList.toggle('on')
        p2.classList.toggle('on')
    })
}
const show = () => {
    Ul_schedule.innerHTML = ''
    obj.forEach(item => {
        const { id, text } = item
        let li = document.createElement('li')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let delBtn = document.createElement('button')
        p.innerHTML = `<i class="xi-check"></i>`
        p2.textContent = `${text}`
        toggle(p, p2)
        delBtn.textContent = "삭제"
        li.append(p, p2, delBtn)
        Ul_schedule.append(li)
        delShow(delBtn, id)
    })
    scheduleInput.value = ''
    scheduleInput.focus()
}
show()
const add = () => {
    obj = [...obj,
    { id: no++, text: scheduleInput.value }
    ]
    localStorage.setItem("obj", JSON.stringify(obj))
}
form.addEventListener('submit', e => {
    e.preventDefault()
    add()
    show()
})


