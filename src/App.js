import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//** import components  */
import WhoMernan from "./pages/WhoMernan/WhoMernan";
import LandingPage from "./pages/LandingPage/LandingPage";
import Services from "./pages/Services/Services";
import SubService from "./pages/SubService/SubService";
import Pricing from "./pages/Pricing/Pricing";
import Header from "./components/Header/Header";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Services?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mernan" element={<WhoMernan />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          {data &&
            data.map((service) => (
              <Route
                path={`/${service.nameEn}`}
                element={
                  <SubService
                    pageHeaderAr={service.pageHeaderAr}
                    pageHeaderEn={service.pageHeaderEn}
                    descriptionAr={service.descriptionAr}
                    descriptionEn={service.descriptionEn}
                    image1={service.image1}
                    image2={service.image2}
                    color1={service.color1}
                    color2={service.color2}
                    color3={service.color3}
                  />
                }
                key={service.id}
              />
            ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
