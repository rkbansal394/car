/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/** Menu Show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/** Menu Hide */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
console.log(navLink);

const linkAction =  ()=>{
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(function(n) {
  n.addEventListener('click', linkAction);
});

/*=============== SWIPER HOME ===============*/ 

const swiperHome = new Swiper('.home__swiper', {
  loop: true, // optional but useful

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${String(index + 1).padStart(2, '0')}</span>`;
    }
  },

 autoplay:{
  Delay:5000,
 }
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
  const bgHeader = ()=>{
    const header = document.getElementById('header');
    this.scrollY >=50 ? header.classList.add('bg-header')
                        :header.classList.remove('bg-header')
  }

  window.addEventListener('scroll',bgHeader)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
