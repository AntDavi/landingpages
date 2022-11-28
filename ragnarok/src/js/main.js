AOS.init({
    easing: "ease-out-quart",
    duration: 1000,
    once: true,
});

var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    freeMode: true,
    grabCursor: true,
    breakpoints: {
        320: { //da resolução de 320px pra cima acontece algo
            slidesPerView: 1.1,
        },
        768: {
            slidesPerView: 2.2,
        },
        991: {
            slidesPerView: 2.8,
        },
        1200: {
            slidesPerView: 3.5,
        }
    }
});
