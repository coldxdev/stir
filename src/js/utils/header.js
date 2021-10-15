import {enableScroll, disableScroll} from "./blockScroll";

const menuBurger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu");

menuBurger.addEventListener("click", () => {
    if (!menuBurger.classList.contains('active')) {
        disableScroll();
        menuBurger.classList.add("active");
        menu.classList.add("active");
    } else {
        enableScroll();
        menuBurger.classList.remove("active");
        menu.classList.remove("active");
    }

});
