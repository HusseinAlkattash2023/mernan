import React, { useContext } from "react";

import "./PreviousClients.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import image from "../../assets/images/brand.png";

//** import swiper for slider */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//** import components */
import Card from "./Card/Card";

const PreviousClients = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className="previous_clients"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("previous_clients")}</h2>
      <div className="mt-5">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="cards">
        <Swiper
          slidesPerView={3}
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          // autoplay={false}
          pagination={{
            clickable: true,
            el: null,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PreviousClients;
