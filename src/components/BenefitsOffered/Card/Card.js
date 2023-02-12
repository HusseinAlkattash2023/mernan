import React from 'react'

import './Card.scss';

import { useTranslation } from "react-i18next";

const Card = ({icon , title , text , color1 , color2 , height}) => {

  const { t } = useTranslation();

  const styles = {
    background:`var(${color1})`,
    color:`var(${color2})`,
    height:`${height}`

  }

  return (
    <div className="card_benefits" style={styles}>
        <div className="part1">
            <h3>{t(`${title}`)}</h3>
            <img src={icon} alt=""/>
        </div>
        <div className="part2">
          <p>{t(`${text}`)}</p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Card