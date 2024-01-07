// Showing Menu

const menuBtn = document.getElementsByClassName("menu_btn")[0];
const menu = document.getElementsByTagName("nav")[0];

function showMenu() {

    const menuBtnHover = document.querySelector(".menu_btn > .hover");

    menuBtn.classList.toggle("clicked");
    menuBtn.classList.toggle("focused");
    menu.classList.toggle("show_menu");
    menuBtnHover.classList.toggle("focus");
    
}

// show & Hide Message

const msgBg = document.getElementsByClassName("msg_bg")[0];

function showMessage(){
    msgBg.classList.add("show_msg");
}

setTimeout(showMessage, 2000);

function hideMessage(){
    msgBg.classList.remove("show_msg");
}