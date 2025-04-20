AOS.init();

const burger = document.getElementById('burger');
const menu = document.querySelector('.menu__list');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const cards = document.querySelectorAll('.card__container');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));

        card.classList.add('active');
    });
});

const iconContainers = document.querySelectorAll('.icon__container');

  iconContainers.forEach(container => {
    container.addEventListener('click', () => {
      iconContainers.forEach(c => c.classList.remove('active'));

      container.classList.add('active');
    });
  });

var swiper = new Swiper(".event__mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
    });
  
    function startSlideTimer() {
      const outerLines = document.querySelectorAll(".slider__section .swiper-slide .outer__line");
  
      outerLines.forEach(outerLine => {
        outerLine.style.width = "0%";
        outerLine.style.animation = "none";
        outerLine.offsetHeight;
        outerLine.style.animation = "growWidth 10s ease-in-out forwards";
  
        outerLine.addEventListener("animationend", () => {
          swiper.slideNext();
        }, { once: true });
      });
    }
  
    startSlideTimer();
  
    swiper.on("slideChange", () => {
      startSlideTimer();
    });
  });


  var swiper = new Swiper(".avenue__mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
      },
    },
  });