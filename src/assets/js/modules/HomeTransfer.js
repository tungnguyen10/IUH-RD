import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Autoplay, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
export default class HomeTransfer extends BaseModule {
  register() {
    Swiper.use([Navigation, Autoplay, Pagination]);

    this.slidefull = new Swiper(".swiper_transfer", {
      speed: 1000,
      slidesPerView: 1.4,
      spaceBetween: 10,
      // loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // navigation: {
      //   nextEl: ".swiper-button-custom-next",
      //   prevEl: ".swiper-button-custom-prev",
      // },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }
}
