
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
    1024: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

});


const fileLabel = document.querySelectorAll('.input-box_label');
const fileInput = document.querySelectorAll('.input-box_input');


fileInput.forEach(item => {
  item.addEventListener('change', function() {
    const fileName = item.closest('.input-box').querySelector('.file-name')
    fileName.innerHTML = item.files[0].name;
  })
})

fileLabel.forEach(item => item.closest('.form__row').previousElementSibling.classList.add('special_gap'))