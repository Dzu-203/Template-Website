const topMenu = document.querySelector('.top-menu')
const topMenuIcon = document.querySelector('.top-menu-icon')
document.addEventListener('click',(e) => {
    if (topMenuIcon.contains(e.target)){
        topMenu.classList.toggle('ct-menu')
        topMenu.classList.toggle('hidden')
    }
    else{
        if (topMenu.classList.contains('ct-menu')){
            topMenu.classList.toggle('ct-menu')
            topMenu.classList.toggle('hidden')
        }
    }
})