import React , {useContext} from 'react'

import './Card.scss';

import { useTranslation } from "react-i18next";

//** state management */
import { StateContext } from "../../context/StateProvider";

const Card = ({icon , headerAr , headerEn , color1 , color2 , height , descriptionAr , descriptionEn}) => {

  const { t } = useTranslation();

    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

  const styles = {
    background:`var(${color1})`,
    color:`var(${color2})`,
    height:`${height}`

  }

  return (
    <div className="card_benefits" style={styles}>
        <div className="part1">
            <h3>{changeSide ? headerAr : headerEn}</h3>
            <img src={icon} alt=""/>
        </div>
        <div className="part2">
          <p>{changeSide ? descriptionAr : descriptionEn }</p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Card