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

const enableDarkMode = () => {
    toogle_btn.innerHTML = `<i class="fa-solid fa-sun"></i>`
    document.body.classList.add('darkmode')
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    toogle_btn.innerHTML = `<i class="fa-solid fa-moon"></i>`
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enableDarkMode()
}

toogle_btn.addEventListener('click', () => {

    darkMode = localStorage.getItem('darkMode')

    if (darkMode !== 'enabled') {
        enableDarkMode()
        console.log(darkMode);
    }
    else {
        disableDarkMode()
        console.log(darkMode);
    }
})