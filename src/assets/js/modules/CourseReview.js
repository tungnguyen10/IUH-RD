import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default class CourseReview extends BaseModule {
  register() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    this.slidefull = new Swiper(".swiper_courseReview", {
      loop: true,
      slidesPerView: 1.3,
      spaceBetween: 20,
      speed: 1000,
      breakpoints: {
        768: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-banner-next",
        prevEl: ".swiper-banner-prev",
      },
    });
  }
}
