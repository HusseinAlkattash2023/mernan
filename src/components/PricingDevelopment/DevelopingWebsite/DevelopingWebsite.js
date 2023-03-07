import React from 'react'

import Card from '../../Card/Card';

import image from '../../../assets/images/develop_website.svg';

const DevelopingWebsite = () => {

  const benefits = [
    {
      id:1,
      benefit:"smooth_running"
    },
    {
      id:2,
      benefit:"ease_of_use"
    },
    {
      id:3,
      benefit:"increase_the_speed"
    },
    {
      id:4,
      benefit:"using_the_latest"
    },
  ];

  return (
    <div>
      <Card
        image={image}
        text={"do_you_need"}
        title={"developing_website"}
        state={true}
        name={"request_price_offer"}
        color={"#E7A5C8"}
        benefits={benefits}
      />
    </div>
  )
}

export default DevelopingWebsite;