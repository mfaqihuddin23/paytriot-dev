const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // when window width is >= 480px
      // 480: {
      //   slidesPerView: 3,
      //   spaceBetween: 30
      // },
      // when window width is >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40
      // }
    },
    autoplay: {
      delay: 2000,
    },
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });