const hamMenu = document.querySelector(".burger");
const offScreenMenu = document.querySelector(".header__menu");
const body = document.querySelector(".body");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    body.classList.toggle("lock");
});
