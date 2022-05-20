const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 7000,
  },
});

let tabsBtn = document.querySelectorAll(".steps-work__link");
let tabsItem = document.querySelectorAll(".article-work__div");

let lastItem = "one";

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsItem.forEach(function (element) {
      element.classList.remove("article-work__div-active")
      element.classList.add("article-work__div-hidden")
    });

    document.querySelector(`[data-target="${path}"]`).classList.remove("article-work__div-hidden");
    document.querySelector(`[data-target="${path}"]`).classList.add("article-work__div-active");

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("steps-work__link-active")
    });
    e.currentTarget.classList.add("steps-work__link-active");

    console.log(`bottom-work__image-step-${lastItem}`);
    document.querySelector(".bottom-work__image").classList.remove(`bottom-work__image-step-${lastItem}`);
    document.querySelector(".bottom-work__image").classList.add(`bottom-work__image-step-${path}`);
    lastItem = path;
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  active: false,
  collapsible: true

});
$(".ui-accordion-header").attr("tabIndex","0");

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".site-nav__link");

burger.addEventListener('click',
  function () {
    burger.classList.toggle("header__burger--active");
    menu.classList.toggle("header__nav--active");
    document.body.classList.toggle("stop-scroll")
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {
      burger.classList.remove("header__burger--active");
      menu.classList.remove("header__nav--active");
      document.body.classList.remove("stop-scroll");
    })
});

let formSearch = document.querySelector(".form-search");
let buttonHeaderSearch = document.querySelector(".btn-header__btn");
let buttonFormClose = document.querySelector(".form-search__btn--close");
let btnSearch = document.querySelector(".btn-header__btn");

buttonHeaderSearch.addEventListener('click', function () {
  formSearch.classList.toggle("form-search--active");
  btnSearch.classList.toggle("btn-header__btn--disable");
});

buttonFormClose.addEventListener('click', function () {
  formSearch.classList.remove("form-search--active");
  btnSearch.classList.remove("btn-header__btn--disable");
});

