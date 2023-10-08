document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

const mobile_nav = document.querySelector('.mobile-navbar-btn')

const nav_header = document.querySelector('header')

const nav_opt = document.querySelector('.nav-opt')

const toggleNav = () => {
    nav_header.classList.toggle('active')
}

mobile_nav.addEventListener('click', () => toggleNav())

nav_opt.addEventListener('click', () => toggleNav())

// Dark Mode

let darkMode = localStorage.getItem('darkMode')

const toogle_btn = document.querySelector('.toggle-btn')

toogle_btn.addEventListener('click', () => {

    darkMode = localStorage.getItem('darkMode')
    console.log(darkMode)
    console.log('------')

    if (darkMode !== 'enabled') {
        toogle_btn.innerHTML = `<i class="fa-solid fa-moon"></i>`
        document.body.classList.add('darkmode')
        localStorage.setItem('darkMode', 'enabled')
        console.log(darkMode);
    }
    else {
        toogle_btn.innerHTML = `<i class="fa-solid fa-sun"></i>`
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkMode', null)
        console.log(darkMode);
    }
})