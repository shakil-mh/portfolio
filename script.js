// Showing Menu

const menuBtn = document.getElementsByClassName("menu_btn")[0];
const menu = document.getElementsByTagName("nav")[0];

// console.log(menuBtnBlur);

function showMenu() {

    const menuBtnHover = document.querySelector(".menu_btn > .hover");
    const img = document.querySelector(".content_img img");

    menuBtn.classList.toggle("clicked");
    menuBtn.classList.toggle("focused");
    menu.classList.toggle("show_menu");
    menuBtnHover.classList.toggle("focus");
    img.classList.toggle("img_slide");
}