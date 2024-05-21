

$(document).ready(function () {
  $('.single-item').slick();
  Fancybox.bind('[data-fancybox="gallery"]', {

  });

})

const hamburger = document.querySelector("#hamburger");
const mobileContainer = document.querySelector(".mobile-container");
function showHamburgerMenu() {
  mobileContainer.classList.toggle('show');
  hamburger.classList.toggle('is-active')
}
  hamburger.addEventListener('click', showHamburgerMenu)

