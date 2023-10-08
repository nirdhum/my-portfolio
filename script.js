document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

const mobile_nav = document.querySelector('.mobile-navbar-btn')

const nav_header = document.querySelector('header')

const nav_opt = document.querySelector('.nav-opt')

const toggleNav = () => {
    nav_header.classList.toggle('active')
}

mobile_nav.addEventListener('click', () => toggleNav())

nav_opt.addEventListener('click', () => toggleNav())

const toogle_btn = document.getElementById('checkbox')
const root = document.querySelector(':root')

toogle_btn.addEventListener('change', () => {
    if (toogle_btn.checked) {
        root.style.setProperty('--primary', '#cbcff6')
        root.style.setProperty('--white', '#1B2430')
        root.style.setProperty('--black', '#FFF')
        root.style.setProperty('--dark', '#FFF0F5')
        root.style.setProperty('--light', '#16213E')
    }
    else {
        root.style.setProperty('--primary', '#525FE1')
        root.style.setProperty('--white', '#FFF')
        root.style.setProperty('--black', '#1B2430')
        root.style.setProperty('--dark', '#16213E')
        root.style.setProperty('--light', '#FFF0F5')
    }
})