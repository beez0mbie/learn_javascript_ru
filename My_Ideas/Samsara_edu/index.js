let circle = document.getElementById('circle')

circle.addEventListener('click', () => rotate())

function rotate(){
    circle.setAttribute("class", "animation")
    setTimeout(() => circle.removeAttribute("class", "animation"),5000)
}