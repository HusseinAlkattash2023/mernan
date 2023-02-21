import React from 'react';
import PricingComponent from '../PricingComponent/PricingComponent';

import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

const EmailMarketing = ({color}) => {
  const cards = [
    {
      id:1,
      height: "1160px",
      color:"--color3",
      title:"start_plan",
      text:"suitable_for_individuals",
      price:"5625",
    },
    {
      id:2,
      height: "1160px",
      color:"--color9",
      title:"professional_plan",
      text:"suitable_for_groups",
      price:"9375",
      state:true,
    },
  ]
  
  const features=[
    {
      id:1,
      title:"design_mail",
      image1:image2,
      num:1
    },
    {
      id:2,
      title:"create_automatically",
      image1:image2,
      num:1
    },
    {
      id:3,
      title:"segmentation",
      image1:image2,
      num:1
    },
    {
      id:4,
      title:"perform",
      image1:image2,
      num:1
    },
    {
      id:5,
      title:"email_campaigns",
      image1:image2,
      num:1
    },
    {
      id:6,
      title:"monthly_reports",
      image1:image2,
      num:1
    },
    {
      id:7,
      title:"managing_responses",
      image1:image2,
      num:1
    },

  ]
  return (
    <div>
      <PricingComponent
          cards={cards}
          color={color}
          features={features}
        />
    </div>
  )
}

export default EmailMarketing;
