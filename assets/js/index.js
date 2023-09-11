// Navbar

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-nav-scroll").style.top = "0";
    document.getElementById("header-nav-scroll").style.backgroundColor = "#";
  } else {
    document.getElementById("header-nav-scroll").style.top = "-70px";
  }
}

// Navbar-tablet

const btn_nav = document.querySelector(".btn-tablet");
const nav_tablet_links = document.querySelector(".nav-tablet-links");

btn_nav.addEventListener("click", function () {
  nav_tablet_links.classList.toggle("active-btn");
});

// Navbar-tablet-scroll

const btn_nav_scroll = document.querySelector(".btn-tablet-scroll");
const nav_tablet_links_scroll = document.querySelector(
  ".nav-tablet-links-scroll"
);

btn_nav_scroll.addEventListener("click", function () {
  nav_tablet_links_scroll.classList.toggle("active-btn");
});

function scrollFunctiontablet() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-nav-tablet-scroll").style.top = "0";
    document.getElementById("header-nav-tablet-scroll").style.backgroundColor =
      "#";
  } else {
    document.getElementById("header-nav-tablet-scroll").style.top = "-70px";
  }
}

window.onscroll = function () {
  scrollFunctiontablet();
  scrollFunction();
};

const about_title = document.querySelector(".about-title");

// Home page section about information number animations

let duration = 5000;

  function animateValueyear(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj_year = document.querySelector(".value-year");
  animateValueyear(obj_year, 0, 18, duration);

  ////////////////////////////////

  function animateValuemenu(obj_menu, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj_menu.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj_menu = document.querySelector(".value-menu");
  animateValuemenu(obj_menu, 0, 100, duration);

  ////////////////////////////////

  function animateValuestaf(obj_menu, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj_menu.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj_staf = document.querySelector(".value-staf");
  animateValuestaf(obj_staf, 0, 50, duration);

  ////////////////////////////////

  function animateValuecustomer(obj_menu, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj_menu.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  const obj_customer = document.querySelector(".value-customer");
  animateValuecustomer(obj_customer, 0, 15000, duration);

  