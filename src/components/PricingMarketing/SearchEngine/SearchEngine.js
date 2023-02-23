import React from 'react';
import PricingComponent from '../PricingComponent/PricingComponent';

import './SearchEngine.scss';

import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

const SearchEngine = ({color}) => {

  const cards = [
    {
      id:1,
      height: "1900px",
      color:"--color3",
      title:"start_plan",
      text:"suitable_for_individuals",
      price:"5625",
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
        },
        {
          id:5,
          image:image2
        },
        {
          id:6,
          image:image2
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
        {
          id:12,
          image:image2
        },
      ]
    },
    {
      id:2,
      height: "1900px",
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
        },
        {
          id:5,
          image:image2
        },
        {
          id:6,
          image:image2
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
        {
          id:12,
          image:image2
        },
      ]
    },
  ]
const features = [
  {
    id:1,
    title:"preparing_a_development",
    image1:image2,
    num:1
  },
  {
    id:2,
    title:"prepare_technical",
    image1:image2,
    num:1
  },
  {
    id:3,
    title:"choose_key_phrases",
    image1:image2,
    num:1
  },
  {
    id:4,
    title:"help_implement",
    image1:image2,
    num:1
  },
  {
    id:5,
    title:"current_position",
    image1:image2,
    num:1
  },
  {
    id:6,
    title:"website_search",
    image1:image2,
    num:1
  },
  {
    id:7,
    title:"support_in_implementing",
    image1:image2,
    num:1
  },
  {
    id:8,
    title:"post_links",
    image1:image2,
    num:1
  },
  {
    id:9,
    title:"indexing",
    image1:image2,
    num:1
  },
  {
    id:10,
    title:"strategic_link",
    image1:image2,
    num:1
  },
  {
    id:11,
    title:"long_tailed",
    image1:image2,
    num:1
  },
  {
    id:12,
    title:"report",
    image1:image2,
    num:1
  }
]
  return (
    <div className="search_engine">
      <PricingComponent
          features={features}
          cards={cards}
          color={color}
        />
    </div>
  )
}

export default SearchEngine;