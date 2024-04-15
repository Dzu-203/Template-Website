const formSignIn = document.querySelector('.form-login')
const formSignUp = document.querySelector('.form-signup')
const form = document.querySelector('.form')
const btnLoginMain = document.querySelector('.btn-login')
const btnSignIn = document.querySelector('.btn-signin')
const btnSignUp = document.querySelector('.btn-signup')
const exitIcon = document.querySelectorAll('.exit-icon')
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click',(e) => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('ct-menu')
})
btnLoginMain.addEventListener('click',(e) => {
    form.classList.remove("hidden")
    setTimeout(() => {
        formSignIn.classList.remove('animate-slideDown')
    },1000)
})
document.addEventListener('click', (e) => {
    if (btnSignUp.contains(e.target)){
        formSignIn.classList.toggle('hidden')
        formSignUp.classList.toggle('hidden')
    }else if (btnSignIn.contains(e.target)){
        formSignIn.classList.toggle('hidden')
        formSignUp.classList.toggle('hidden')
    }
})
exitIcon.forEach(item => {
    item.addEventListener('click',(e) => {
        if (formSignIn.classList.contains("hidden")){
            formSignIn.classList.toggle('hidden')
            formSignUp.classList.toggle('hidden')
        }else{
            formSignIn.classList.toggle('hidden')
            formSignUp.classList.toggle('hidden')
        }
        form.classList.add("hidden")
        setTimeout(() => {
            formSignIn.classList.add('animate-slideDown')
        },1000)
    })
})