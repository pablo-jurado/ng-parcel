var btnMenu = document.getElementById('menu-toggle');
var wrapper = document.getElementById('wrapper');

function toogleMenu() {
  wrapper.classList.toggle('toggled');
}

btnMenu.onclick = toogleMenu;
