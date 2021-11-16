// menu
const btn = document.getElementById('btn');
btn.onclick = btn_event;

function btn_event() {
  btn.classList.toggle('active');
  dropdown();
}

const navDropr = document.getElementsByClassName('mobile__menu-listr');
const navDropl = document.getElementsByClassName('mobile__menu-listl');

function dropdown() {
  console.log('click');
  // navMobile.item(0).classList.toggle("active");
  navDropr[0].classList.toggle('active');
  navDropl[0].classList.toggle('active');
  // bgoverlay[0].classList.toggle("active");
  // navDropSec1[0].classList.toggle("active");
  // navDropSec2[0].classList.toggle("active");
  // navDropSec3[0].classList.toggle("active");
}
