import React, { useContext, useEffect, useState } from "react";

import "./Portfolio.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";


//** import swiper for slider */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const Portfolio = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/OurJobs?page=0&pageSize=12`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div className="portfolio">
      <h2
        className={`${changeSide === "ar" && "head_ar"}`}
        dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
      >
        {t("portfolio")}
      </h2>
      <div className="portfolio_card">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={100}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <SwiperSlide>
                  <img
                    src={`${BASE_API_URL}/${item.image}`}
                    alt="slide_image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${BASE_API_URL}/${item.image}`}
                    alt="slide_image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${BASE_API_URL}/${item.image}`}
                    alt="slide_image"
                  />
                </SwiperSlide>            
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
