let btn = document.querySelector('.menu_icon');
let menu = document.querySelector('.mobile_menu');

btn.onclick = function(){
    menu.classList.toggle('menupop');
}