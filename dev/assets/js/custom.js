

$(document).ready(function () {
  $('.single-item');
  Fancybox.bind('[data-fancybox="gallery"]', {
  });
})

// Hamburger
const hamburger = document.querySelector("#hamburger");
const body = document.querySelector('body');
const mobileContainer = document.querySelector(".mobile-container")

function showHamburgerMenu() {
  mobileContainer.classList.toggle('show');
  hamburger.classList.toggle('is-active');
  body.classList.toggle('overflow-hidden')
}

hamburger.addEventListener('click', showHamburgerMenu)

// Swiper
const swiper = new Swiper('.swiper-info', {
  spaceBetween: 12,
  loop: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    enabled: false
  },

  breakpoints: {
    992: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

});


const fileInput = document.querySelector('#product-photos');
const fileName = document.querySelector('#file-name')

fileInput.addEventListener('change', function() {
  fileName.innerHTML = fileInput.files[0].name;
});

