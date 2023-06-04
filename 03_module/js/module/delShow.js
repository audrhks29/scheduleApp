export const delShow = (delBtn, obj, id) => {
    delBtn.addEventListener('click', e => {
        obj = JSON.parse(localStorage.getItem("obj")) || []
        obj = obj.filter(item => item.id !== id)
        e.currentTarget.parentElement.remove()
        localStorage.setItem("obj", JSON.stringify(obj));
        console.log(obj);
    })
}
