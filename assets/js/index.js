const btn_nav = document.querySelector('.btn-nav');
const nav_tablet_links = document.querySelector('.nav-tablet-links');

btn_nav.addEventListener('click',function () {
    nav_tablet_links.classList.toggle('active-btn');
})