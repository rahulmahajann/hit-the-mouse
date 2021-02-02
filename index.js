const score = document.querySelector('.score')
const hole =  document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hammer img')

window.addEventListener('mousemove',(m) =>{
    cursor.style.top = m.pageY + "px"
    cursor.style.left = m.pageX + "px"
})