import React from 'react';

import './Pricing.scss'

//**import images */
import image1 from '../../assets/images/pricing.svg';
import image2 from '../../assets/images/pricing_ar.svg';
import image3 from '../../assets/images/brand.png';
import image4 from "../../assets/images/start-work.png";
import image5 from "../../assets/images/start-work-ar.png";
import image6 from "../../assets/images/request.png";
import image7 from "../../assets/images/request_ar.png";
import logo from "../../assets/images/mernan_white.png";

//**import components */
import Home from '../../components/Home/Home';
import PricingComponent from '../../components/Pricing/Pricing';
import StartWorking from '../../components/StartWorking/StartWorking';
import RequestFreeConsulting from '../../components/RequestFreeConsulting/RequestFreeConsulting';
import Footer from "../../components/Footer/Footer";
import PreviousClients from "../../components/PreviousClients/PreviousClients";
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';

const questions = [
  {
    id:1,
    question:"what_is_the_approximate",
    answer:"",
    number:"One"
  },
  {
    id:2,
    question:"do_you_provide",
    answer:"",
    number:"Two"
  },
  {
    id:3,
    question:"is_it_possible",
    answer:"",
    number:"Three"
  },
]

const Pricing = () => {
  return (
    <div className="pricing_page">
      <Home
        titleEn={"Need a specific service?"}
        titleAr={"تحتاج خدمة معينة؟"}
        descriptionEn={"We offer you many options in various fields of digital marketing to graphic design with various advantages commensurate with your needs and goals that you aspire to achieve."}
        descriptionAr={"نقدم لك خيارات عديدة في مجالات متنوعة من التسويق الرقمي إلى التصميم الجرافيك بمزايا متنوعة تتناسب مع احتياجك وهدفك الذي تطمح لتحقيقه."}
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
        name={"know_pricing"}
      />
      <PricingComponent/>
      <StartWorking
        color1={"--color6"}
        color2={"--color5"}
        color3={"--color3"}
        image1={image4}
        image2={image5}
      />
       <RequestFreeConsulting
        color1={"--color1"}
        color2={"--color2"}
        color3={"--color2"}
        color4={"--color2"}
        image1={image6}
        image2={image7}
      />
       <PreviousClients image={image3}/>
       <FrequentlyAskedQuestions questions={questions}/>
      <Footer color1={"#39858E"} color2={"#FDFDFE"} image={logo} />
    </div>
  )
}

export default Pricing;