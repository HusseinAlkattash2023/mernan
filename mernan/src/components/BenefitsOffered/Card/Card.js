import React , {useContext} from 'react'

import './Card.scss';

//** state management */
import { StateContext } from "../../context/StateProvider";

const Card = ({icon , headerAr , headerEn , color1 , color2 , height , descriptionAr , descriptionEn}) => {


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
            <h3>{changeSide === "ar" ? headerAr : headerEn}</h3>
            <img src={icon} alt=""/>
        </div>
        <div className="part2">
          <p>{changeSide === "ar" ? descriptionAr : descriptionEn }</p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Card