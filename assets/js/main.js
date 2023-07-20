"use strict";
let cards = document.querySelectorAll('.faq_accordion_item');

cards.forEach(function(item, index) {
    item.addEventListener('click', e => {
        e.stopPropagation();
        if(item.ariaExpanded == "true") {
            item.parentNode.classList.add('active');
                
        } else  {
            item.parentNode.classList.remove('active');
        }
    })
});


/*burger handler */
(function () {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".header-menu__items");
    const menuClose = document.querySelector(".header__nav-close");
    const menuLinkls = document.querySelectorAll(".header__link");
    burgerItem.addEventListener("click", () => {
      menu.classList.add("header-menu__items-active");
    });
    
    menuClose.addEventListener("click", () => {
      menu.classList.remove("header-menu__items-active");
    });
    
    if(window.innerWidth < 992) {
      menuLinkls.forEach(function (item, index) {
          item.addEventListener('click',() => {
            menu.classList.remove("header-menu__items-active");
          });
      });
    };
  })();
 
  //upward button
  const scroll = document.querySelector('.upward');
  window.addEventListener('scroll', function() {
    scroll.classList.toggle('active', this.window.scrollY>500)
  })
  
  scroll.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  });


  // Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollToLink = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function (e) {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
              e.preventDefault();
          });
      });
  };
  scrollToLink();
}());
 
const swiper = new Swiper('.swiper1', {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  spaceBetween: 10,
   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
 });
 const carouselCompany = new Swiper('.swiper2', {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 5,
  spaceBetween: 10,
   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 576
    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
 });