import React, { useContext } from "react";

import './PreviousClients.scss';

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


//** import swiper for slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//** import components */
import Card from './Card/Card';


const PreviousClients = ({color1 , color2 , image}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles={
    style1:{
      background:`${color1}`
    },
    style2:{
      color:`${color2}`
    }
  }

  return (
    <div style={styles.style1} className="previous_clients" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2 style={styles.style2}>{t("previous_clients")}</h2>
      <div className="mt-5">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image} alt=""/></SwiperSlide>
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
        pagination={{
          "clickable": true}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PreviousClients;
