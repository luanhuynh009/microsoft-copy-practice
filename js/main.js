const menuButton = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

menuButton.addEventListener("click", function() {
    mainMenu.classList.toggle("show");
}
)