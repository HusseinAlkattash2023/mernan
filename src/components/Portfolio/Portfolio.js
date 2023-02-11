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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="portfolio" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("portfolio")}</h2>
      <div className="portfolio_card">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
            el: null,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
