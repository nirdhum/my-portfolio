document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

const mobile_nav = document.querySelector('.mobile-navbar-btn')

const nav_header = document.querySelector('header')

const nav_opt = document.querySelector('.nav-opt')

const toggleNav = () => {
    nav_header.classList.toggle('active')
}

mobile_nav.addEventListener('click', () => toggleNav())

nav_opt.addEventListener('click', () => toggleNav())