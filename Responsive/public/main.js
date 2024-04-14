document.addEventListener("DOMContentLoaded",() => {
    let heightMenu = document.querySelector('header').offsetHeight
    let idList = ["home","services","portfolio","about","contact"]
    idList.forEach(element => {
        let findClass = document.getElementById(`${element}`)
        console.log(findClass)
        findClass.style.paddingTop = heightMenu + "px"
    });
})

const topMenu = document.querySelector('.top-menu')
const topMenuIcon = document.querySelector('.top-menu-icon')
document.addEventListener('click',(e) => {
    if (topMenuIcon.contains(e.target)){
        topMenu.classList.toggle('ct-menu')
        topMenu.classList.toggle('hidden')
    }else if (topMenu.classList.contains('ct-menu')){
        topMenu.classList.toggle('ct-menu')
        topMenu.classList.toggle('hidden')
    }
})