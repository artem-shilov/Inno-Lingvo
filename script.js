const play = document.querySelector('.play__btn');
const video = document.querySelector('.visibility__video video');

play.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  play.setAttribute('hidden', true);
});



const menuBtn = document.querySelector('[data-btn]');
const menu = document.querySelector('[data-menu]');
const menuItems = menu.querySelectorAll('li');
const body = document.body;

const toggleMenu = () => {
  menu.classList.toggle('nav__list--visible');

}

menuBtn.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
  body.classList.toggle('stop-scroll');
  menuBtn.classList.toggle('menu__btn--active');
});


menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    menuBtn.classList.remove('menu__btn--active');
    menu.classList.remove('nav__list--visible');
  })
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_menubtn = target == menuBtn;
  let menu_is_visible = menu.classList.contains('nav__list--visible');

  if (!its_menu && !its_menubtn && menu_is_visible) {
    toggleMenu();
    menuBtn.classList.remove('menu__btn--active');
    body.classList.toggle('stop-scroll');

  }
});
