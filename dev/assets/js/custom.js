

$(document).ready(function () {
  $('.single-item').slick();
  Fancybox.bind('[data-fancybox="gallery"]', {
  });
})

// Hamburger
const hamburger = document.querySelector("#hamburger");
const mobileContainer = document.querySelector(".mobile-container");
function showHamburgerMenu() {
  mobileContainer.classList.toggle('show');
  hamburger.classList.toggle('is-active')
}
  hamburger.addEventListener('click', showHamburgerMenu)

  // Swiper
  const swiper = new Swiper('.swiper-info', {
    spaceBetween: 40,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

