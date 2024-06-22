
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

// Swiper__first-screen
const swiperInfo = new Swiper('.swiper-info', {
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
    1025: {
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
  item.addEventListener('change', function () {
    const fileName = item.closest('.input-box').querySelector('.file-name')
    fileName.innerHTML = item.files[0].name;
  })
})

fileLabel.forEach(item => item.closest('.form__row').previousElementSibling.classList.add('special_gap'))


// Swiper__advantages
const swiperAdvantages = new Swiper('.swiper-advantages', {
  spaceBetween: 12,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },

  breakpoints: {
    1025: {
      initalSlide: 0,
      loop: false,
      slierPerGroup: 8,
      spaceBetween: 0,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        enabled: false,
      },
    }
  }
});

// Swiper__tamplate

const swiperTemplate = new Swiper('.swiper-template', {
  speed: 700,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    enabled: false
  },

  breakpoints: {

    390: {
      slidesPerView: 1,
    },

    1025: {
      slidesPerView: 2,
      spaceBetween: 25,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        wnabled: false,
      }
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 25,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        wnabled: false,
      }
    }
  },
});

