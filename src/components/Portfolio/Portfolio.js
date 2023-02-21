import React, { useContext } from "react";

import "./Portfolio.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//** import images */
import image1 from "../../assets/images/portfolio1.png";
import image2 from "../../assets/images/portfolio2.png";
import image3 from "../../assets/images/portfolio3.png";

//** import swiper for slider */
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Portfolio = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="portfolio" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("portfolio")}</h2>
      <div className="portfolio_card">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch:0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;


 