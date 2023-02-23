import React from 'react';

import './Plans.scss';

import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

import PricingComponent from '../../PricingMarketing/PricingComponent/PricingComponent'



const Plans = () => {

  const cards = [
    {
      id:1,
      height: "1476px",
      color:"--color3",
      title:"start_plan",
      text:"suitable_for_individuals",
      price:"3750",
      list:[
        {
        id:1,
        image:image2
        },
        {
          id:2,
          text:"platforms",
          number:3
        },
        {
          id:3,
          image:image2
        },
        {
          id:4,
          image:image2
        },
        {
          id:5,
          text:"days",
          number:10
        },
        {
          id:6,
          text:"monthly_reports"
        },
        {
          id:7,
          image:image1
        }, 
        {
          id:8,
          image:image1
        }, 
        {
          id:9,
          image:image1
        },
        {
          id:10,
          image:image1
        },
        {
          id:11,
          image:image1
        },
      ]
    },
    {
      id:2,
      height: "1476px",
      color:"--color9",
      title:"professional_plan",
      text:"suitable_for_groups",
      price:"11250",
      state:true,
      list:[
        {
        id:1,
        image:image2
        },
        {
          id:2,
          text:"platforms",
          number:5
        },
        {
          id:3,
          image:image2
        },
        {
          id:4,
          image:image2
        },
        {
          id:5,
          text:"days",
          number:30
        },
        {
          id:6,
          text:"monthly_reports"
        },
        {
          id:7,
          image:image1
        }, 
        {
          id:8,
          image:image1
        }, 
        {
          id:9,
          image:image1
        },
        {
          id:10,
          image:image1
        },
        {
          id:11,
          image:image1
        },
      ]
    },
    {
      id:3,
      height: "1476px",
      color:"--color7",
      title:"start_plan",
      text:"suitable_for_individuals",
      price:"18750",
      list:[
        {
        id:1,
        image:image2
        },
        {
          id:2,
          text:"all_platforms",
        },
        {
          id:3,
          image:image2
        },
        {
          id:4,
          image:image2
        },
        {
          id:5,
          text:"days",
          number:30
        },
        {
          id:6,
          text:"weekly_reports"
        },
        {
          id:7,
          image:image2
        }, 
        {
          id:8,
          image:image2
        }, 
        {
          id:9,
          image:image2
        },
        {
          id:10,
          image:image2
        },
        {
          id:11,
          image:image2
        },
      ]
    },
  ]

  const features = [
    {
      id:1,
      title:"create_an",
    },
    {
      id:2,
      title:"platform_management",
    },
    {
      id:3,
      title:"content_writing",
    },
    {
      id:4,
      title:"design_and_publish",
    },
    {
      id:5,
      title:"create_and_manage",
    },
    {
      id:6,
      title:"report",
    },
    {
      id:7,
      title:"search_engine_optimization",
    },
    {
      id:8,
      title:"email_sms",
    },
    {
      id:9,
      title:"Competitive_research",
    },
    {
      id:10,
      title:"create_and_share",
    },
    {
      id:11,
      title:"prescribed_counseling",
    },
  ]

  return (
    <div className="plans">
      <PricingComponent cards={cards} features={features} color={"--color2"} state={true}/>
    </div>
  )
}

export default Plans