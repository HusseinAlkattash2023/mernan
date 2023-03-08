import React, { useContext, useState, useEffect } from "react";

import "./PreviousClients.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//** import swiper for slider */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//** import components */
import Card from "./Card/Card";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const PreviousClients = ({ color1, color2, image }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [dataClient, setDataClient] = useState([]);
  const [dataTestimonies, setDataTestimonies] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/OurClients?page=0&pageSize=12`)
      .then((response) => {
        setDataClient(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Testemonies?page=0&pageSize=12`)
      .then((response) => {
        setDataTestimonies(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

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
      <h2
        className={`${changeSide === "ar" && "head_ar"}`}
        dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
        style={styles.style2}
      >
        {t("previous_clients")}
      </h2>
      <div className="mt-5 clients">
        <Swiper
          slidesPerView={7}
          spaceBetween={100}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {(() => {
            let arr = [];
            for (let i = 1; i <= 3; i++) {
              arr.push(
                dataClient &&
                  dataClient.map((item) => (
                    <div key={item.id} className="brands">
                      <SwiperSlide>
                        <div>
                          <img
                            className="client"
                            src={`${BASE_API_URL}/${item.image}`}
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  ))
              );
            }
            return arr;
          })()}
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
             {(() => {
            let arr = [];
            for (let i = 1; i <= 3; i++) {
              arr.push(
              dataTestimonies &&
              dataTestimonies.map((item) => (
              <div key={item.id}>
                <SwiperSlide>
                  <div>
                    <Card
                      nameAr={item.companyNameAr}
                      nameEn={item.companyNameEn}
                      descriptionAr={item.descriptionAr}
                      descriptionEn={item.descriptionEn}
                      imageAvatar={`${BASE_API_URL}/${item.image}`}
                      rate={item.rate}
                    />
                  </div>
                </SwiperSlide>
              </div>
                  ))
              );
            }
            return arr;
          })()}
        </Swiper>
      </div>
    </div>
  );
};

export default PreviousClients;
