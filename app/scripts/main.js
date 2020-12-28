$(document).ready(function () {
  $(".quote-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<i class="fal fa-angle-left slick-prev"></i>`,
    nextArrow: `<i class="fal fa-angle-right slick-next"></i>`,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".menu-list");
const menuShowClass = "is-show";

menuToggle.addEventListener("click", function () {
  menuList.classList.add(menuShowClass);
});

window.addEventListener("click", function (e) {
  if (!menuList.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menuList.classList.remove(menuShowClass);
  }
});
