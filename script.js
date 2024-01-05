// Showing Menu

const menuBtn = document.getElementsByClassName("menu_btn")[0];
const menu = document.getElementsByTagName("nav")[0];

console.log(menu);

function showMenu() {
    menuBtn.classList.toggle("clicked");
    menu.classList.toggle("show_menu");
}