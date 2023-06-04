export let toggle = (p, p2) => {
    p.addEventListener('click', e => {
        p.classList.toggle('on')
        p2.classList.toggle('on')
    })
}