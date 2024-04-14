const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-icon')
const exit = document.querySelector('.exit')

document.addEventListener('click',(e) => {
    if (menuIcon.contains(e.target)){
        exit.classList.toggle('hidden')
        menu.classList.toggle('ct-menu')
        menu.classList.toggle('hidden')
    }else{
        //
    }
})
exit.addEventListener('click',(e) => {
    if (menu.classList.contains('ct-menu')){
        exit.classList.toggle('hidden')
        menu.classList.toggle('ct-menu')
        menu.classList.toggle('hidden')
    }
})
