import React , {useContext} from 'react'

import './Card.scss';

//** state management */
import { StateContext } from "../../StateProvider";


import image_ from '../../../assets/images/spiral1.png';

const Card = ({image , headerAr , headerEn , descriptionAr , descriptionEn}) => {

    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

  return (
    <div className="card_ col">
        <img className="image1" src={image} alt=""/>
        <div className="part2">
          <h3>{changeSide === "ar" ? headerAr : headerEn}</h3>
          <img src={image_} alt=""/>
        </div>
        <div>
          <p>{changeSide === "ar" ? descriptionAr : descriptionEn}</p>
        </div>
    </div>
  )
}

export default Card;