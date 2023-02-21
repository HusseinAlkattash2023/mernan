import React from 'react';

import './Plans.scss';

import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

import PricingComponent from '../../PricingMarketing/PricingComponent/PricingComponent'



const Plans = () => {

  const cards = [
    {
      id:1,
      height: "1576px",
      color:"--color3",
      title:"start_plan",
      text:"suitable_for_individuals",
      price:"3750",
    },
    {
      id:2,
      height: "1576px",
      color:"--color9",
      title:"professional_plan",
      text:"suitable_for_groups",
      price:"11250",
      state:true,
    },
    {
      id:3,
      height: "1576px",
      color:"--color7",
      title:"start_plan",
      text:"suitable_for_individuals",
      price:"18750",
    },
  ]

  const features = [
    {
      id:1,
      title:"create_an",
      image1:image2,
      num:1
    },
    {
      id:2,
      title:"platform_management",
      text1:"platforms",
      text2:"platforms",
      text3:"all_platforms",
      number1:3,
      number2:5,
    },
    {
      id:3,
      title:"content_writing",
      image1:image2,
      num:1
    },
    {
      id:4,
      title:"design_and_publish",
      image1:image2,
      num:1
    },
    {
      id:5,
      title:"create_and_manage",
      text1:"days",
      text2:"days",
      text3:"days",
      number1:10,
      number2:30,
      number3:30,
    },
    {
      id:6,
      title:"report",
      text1:"monthly_reports",
      text2:"monthly_reports",
      text3:"weekly_reports",
    },
    {
      id:7,
      title:"search_engine_optimization",
      image1:image2,
      image2:image1,
    },
    {
      id:8,
      title:"email_sms",
      image1:image2,
      image2:image1,
    },
    {
      id:9,
      title:"Competitive_research",
      image1:image2,
      image2:image1,
    },
    {
      id:10,
      title:"create_and_share",
      image1:image2,
      image2:image1,
    },
    {
      id:11,
      title:"prescribed_counseling",
      image1:image2,
      image2:image1,
    },
  ]

  return (
    <div className="plans">
      <PricingComponent cards={cards} features={features} color={"--color2"} state={true}/>
    </div>
  )
}

export default Plans