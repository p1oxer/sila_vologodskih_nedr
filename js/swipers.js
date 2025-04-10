const introSwiper = new Swiper(".body-intro__slider-main", {
    spaceBetween: 10,
    speed: 1500,
    navigation: {
        prevEl: ".body-intro__swiper-btn-prev",
        nextEl: ".body-intro__swiper-btn-next",
    },
    pagination: {
        el: ".intro-pagination",
        clickable: true,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});
const introSwiperSide = new Swiper(".body-intro__slider-side", {
    spaceBetween: 10,
    speed: 1500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});

introSwiper.controller.control = introSwiperSide;
introSwiperSide.controller.control = introSwiper;

const bodyProductionSwiper = new Swiper(".body-production__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 3000,
    navigation: {
        prevEl: ".body-production__swiper-btn-prev",
        nextEl: ".body-production__swiper-btn-next",
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});

const innerProductionSwiper = new Swiper(".inner-production__slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 3000,
});

bodyProductionSwiper.controller.control = innerProductionSwiper;
innerProductionSwiper.controller.control = bodyProductionSwiper;

const partnersSwiper = new Swiper(".body-partners__slider", {
    speed: 1000,
    navigation: {
        prevEl: ".body-partners__swiper-btn-prev",
        nextEl: ".body-partners__swiper-btn-next",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1000: {
            spaceBetween: 15,
            slidesPerView: 4,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1450: {
            spaceBetween: 50,
            slidesPerView: 5,
        },
    },
});
