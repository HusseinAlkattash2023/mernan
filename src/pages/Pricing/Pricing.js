import React from 'react';

import './Pricing.scss'

//**import images */
import image1 from '../../assets/images/pricing.svg';
import image2 from '../../assets/images/pricing_ar.svg';

//**import components */
import Home from '../../components/Home/Home';
import PricingComponent from '../../components/Pricing/Pricing';

const Pricing = () => {
  return (
    <div className="pricing_page">
      <Home
        title={"specific_service"}
        text={"We_offer_to_graphic"}
        image1={image2}
        image2={image1}
        color1={"#BCDFDE"}
        color2={"#3FB1AE"}
        color3={"#2FA4A1"}
        degree={"273.55deg"}
        degree_ar={"89.52deg"}
        average={"12.98%"}
        average2={"36.3%"}
        average3={"97.81%"}
        average_ar={"11.24%"}
        average2_ar={"35.52%"}
        average3_ar={"99.59%"}
        color_btn1={"#FFC84D"}
        color_btn2={"#312E3A"}
        color_={"--color5"}
        name={"pricing"}
      />
      <PricingComponent/>
    </div>
  )
}

export default Pricing;