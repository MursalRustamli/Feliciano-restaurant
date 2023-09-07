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