document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
        toggleMenu();
    });

    function toggleMenu() {
        menu.classList.toggle("open");
        menuButton.classList.toggle("open");
    }
});
