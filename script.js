// Showing Menu

const menuBtn = document.getElementsByClassName("menu_btn")[0];
const menu = document.getElementsByTagName("nav")[0];

// console.log(menuBtnBlur);

function showMenu() {

    const menuBtnHover = document.querySelector(".menu_btn > .hover");

    menuBtn.classList.toggle("clicked");
    menuBtn.classList.toggle("focused");
    menu.classList.toggle("show_menu");
    menuBtnHover.classList.toggle("focus");
    
}

// Hide 

const msgBg = document.getElementsByClassName("msg_bg")[0];

console.log(msgBg);

setTimeout(()=>{
    msgBg.classList.add("show_msg");
}, 2000)

function hideMessage(){
    msgBg.classList.remove("show_msg");

}