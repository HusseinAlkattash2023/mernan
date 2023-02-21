import React from 'react';
import PricingComponent from '../PricingComponent/PricingComponent';

import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

const GoogleAds = ({color}) => {
  const cards = [
    {
      id:1,
      height: "1025px",
      color:"--color3",
      title:"start_plan",
      text:"suitable_for_individuals",
      price:"3750",
    },
    {
      id:2,
      height: "1025px",
      color:"--color9",
      title:"professional_plan",
      text:"suitable_for_groups",
      price:"7500",
      state:true,
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
    <div>
      <PricingComponent
          cards={cards}
          features={features}
          color={color}
        />
    </div>
  )
}

export default GoogleAds;