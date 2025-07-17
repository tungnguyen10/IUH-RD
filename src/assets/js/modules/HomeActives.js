import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Autoplay, EffectFade, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

export default class HomeActives extends BaseModule {
  register() {
    // console.log('actives');
    Swiper.use([Autoplay, EffectFade, Pagination]);
    // ptck
    this.slidefull = new Swiper(".swiper_actives", {
      loop: true,
      speed: 3000,
      slidesPerView: 2.2,
      spaceBetween: 10,
      loopAdditionalSlides: 4,
      loopedSlides: 4,
      grabCursor: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    });
  }
}
