import React from 'react'

import './Card.scss';

import { useTranslation } from "react-i18next";
import image_ from '../../../assets/images/spiral1.png';

const Card = ({image , title , text}) => {

  const { t } = useTranslation();

  return (
    <div className="card_ col">
        <img className="image1" src={image} alt=""/>
        <div className="part2">
          <h3>{t(`${title}`)}</h3>
          <img src={image_} alt=""/>
        </div>
        <div>
          <p>{t(`${text}`)}</p>
        </div>
    </div>
  )
}

export default Card;