/* Burger JS */ 

const burger = document.getElementById("burger-button");
const nav = document.getElementById("nav-list");

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
});