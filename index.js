const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.nav')
const menuBranding = document.getElementById('menu-branding')
const small = document.querySelector('.smallhead')

const navItems = document.querySelectorAll('.item')

console.log(navItems)
let showMenu = false;

small.addEventListener('click', changeShit)

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBranding.classList.add('show')
        console.log("hey")
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')

        navItems.forEach(item => item.classList.add('show'))
        showMenu = true
    }
    else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))
        showMenu = false

    }
}


function changeShit() {
    small.classList.add('linkednew')
}