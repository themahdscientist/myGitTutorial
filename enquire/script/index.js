const nav = document.getElementById('home_nav');
const ham = document.getElementById('home_ham');
const main = document.getElementById('home_main_items');

ham.addEventListener('click', nav_opener);

function nav_opener() {
    nav.classList.toggle('nav');
}
