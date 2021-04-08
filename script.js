const menu_icon = document.querySelector('.menu-icon');

const nav_links = document.querySelector('.nav-links');

//for dropdown
menu_icon.addEventListener("click", function() {
    nav_links.style.display = 'flex';
})

nav_links.addEventListener("click", function() {
    nav_links.style.display = 'none';
})