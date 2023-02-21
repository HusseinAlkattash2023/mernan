import React, { useContext } from "react";

import "./PreviousClients.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


//** import swiper for slider */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation , Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//** import components */
import Card from "./Card/Card";

const PreviousClients = ({color1 , color2 , image}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles={
    style1:{
      backgroundColor:`${color1}`
    },
    style2:{
      color:`${color2}`
    }
  }

  return (
    <div
    style={styles.style1}
      className="previous_clients"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2 style={styles.style2}>{t("previous_clients")}</h2>
      <div className="mt-5" style={{marginTop:"1500px"}}>
        <Swiper
           modules={[Navigation, Pagination , Autoplay]}
           spaceBetween={50}
           slidesPerView={7}
           loop={true}
          //  pagination={{ clickable: false }}
           scrollbar={{ draggable: true }}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
           effect={"cube"}
           cubeEffect={{
             shadow: true,
             slideShadows: true,
             shadowOffset: 20,
             shadowScale: 0.94,
           }}
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
          pagination={{
            clickable: true,
            el: null,
          }}
          navigation={false}
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
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default PreviousClients;
