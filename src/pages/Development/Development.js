import React from 'react';


import image1 from '../../assets/images/development.svg';
import image2 from '../../assets/images/development-ar.svg';

//**import icons */
import icon1 from "../../assets/images/dev_icon1.svg";
import icon2 from "../../assets/images/dev_icon2.svg";
import icon3 from "../../assets/images/dev_icon3.svg";
import icon4 from "../../assets/images/dev_icon4.svg";

//**import components */
import Home from '../../components/Home/Home';
import BenefitsOffered from '../../components/BenefitsOffered/BenefitsOffered';
import OurPreviousWork from '../../components/OurPreviousWork/OurPreviousWork';


const Development = () => {
  return (
    <div>
        <Home
        title={"help_your_customer"}
        text={"from_programming"}
        image1={image2}
        image2={image1}
        color1={"#FBD8EB"}
        color2={"#FFB6DD"}
        color3={"#E7A5C8"}
        degree={"272.63deg"}
        degree_ar={"89.52deg"}
        average={"12.87%"}
        average2={"36.39%"}
        average3={"98.44%"}
        average_ar={"11.24%"}
        average2_ar={"35.52%"}
        average3_ar={"99.59%"}
      />
      <BenefitsOffered
        title1={"make_the_website"}
        text1={"ensuring_the_safety"}
        title2={"focus"}
        text2={"ensuring_the_speed"}
        title3={"graphic_design"}
        text3={"work_on_developing"}
        title4={"website_maintenance"}
        text4={"our_services_do"}
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
      />
      <OurPreviousWork/>
    </div>
  )
}

export default Development