import React, { useContext } from "react";

import "./PreviousClients.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//** import swiper for slider */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//** import components */
import Card from "./Card/Card";

const PreviousClients = ({ color1, color2, image }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles = {
    style1: {
      backgroundColor: `${color1}`,
    },
    style2: {
      color: `${color2}`,
    },
  };

  return (
    <div style={styles.style1} className="previous_clients">
      <h2 className={`${changeSide === "ar" && "head_ar"}`} dir={`${changeSide === "ar" ? "rtl" : "ltr"}`} style={styles.style2}>
        {t("previous_clients")}
      </h2>
      <div className="mt-5">
        <Swiper
          slidesPerView={7}
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
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PreviousClients;
