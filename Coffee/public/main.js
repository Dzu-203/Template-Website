const topMenu = document.querySelector('.top-menu')
const topMenuIcon = document.querySelector('.top-menu-icon')

document.addEventListener('click',(e) => {
    e.preventDefault()
    if (topMenuIcon.contains(e.target)){
        topMenu.classList.toggle('custom-menu')
        topMenu.classList.toggle('hidden')
    }else{
        if (topMenu.classList.contains('custom-menu')){
            topMenu.classList.toggle('custom-menu')
            topMenu.classList.toggle('hidden')
        }
    }
    console.log(e.target)
})