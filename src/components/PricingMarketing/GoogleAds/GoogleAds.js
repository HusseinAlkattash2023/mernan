import React from 'react';
import PricingComponent from '../PricingComponent/PricingComponent';

import './GoogleAds.scss';

import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

const GoogleAds = ({color}) => {
  const cards = [
    {
      id:1,
      height: "950px",
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
          image:image2
        },
        {
          id:3,
          image:image1
        },
        {
          id:4,
          image:image1
        }
      ]
    },
    {
      id:2,
      height: "950px",
      color:"--color9",
      title:"professional_plan",
      text:"suitable_for_groups",
      price:"7500",
      state:true,
      list:[
        {
          id:1,
          image:image2
        },
        {
          id:2,
          image:image2
        },
        {
          id:3,
          image:image2
        },
        {
          id:4,
          image:image2
        }
      ]
    },
  ]

  const features = [
    {
      id:1,
      title:"create_and_manage",
      image1:image2,
      num:1
    },
    {
      id:1,
      title:"setting_up_accounts",
      image1:image2,
      num:1
    },
    {
      id:1,
      title:"set_up_tags",
      image1:image2,
      num:1
    },
    {
      id:1,
      title:"monthly_reports_and",
      image1:image2,
      num:1
    }
  ]
  return (
    <div className="google_ads">
      <PricingComponent
          cards={cards}
          features={features}
          color={color}
        />
    </div>
  )
}

export default GoogleAds;