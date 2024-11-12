const openMenuBtn = document.querySelector(".hamburger-icon");
const closeMenuBtn = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");

menu.classList.add("hidden");

openMenuBtn.addEventListener("click", () => {
    menu.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
});
