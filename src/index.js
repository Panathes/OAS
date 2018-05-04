import 'flexboxgrid';
import './styles/styles.scss';

var menu = document.querySelector(".header-container-burger");
var menuOpen = document.querySelector(".menuBurger");
var header = document.querySelector(".header");
var menuClose = document.querySelector(".menuBurger-close");
var left = document.querySelector(".open");

menu.addEventListener("click", function() {
  menuOpen.classList.add("open");
});

menuClose.addEventListener("click", function() {
  menuOpen.classList.remove("open");
});
