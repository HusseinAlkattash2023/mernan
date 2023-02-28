import React, { useContext , useState , useEffect} from "react";

import "./Card.scss";


//** state management */
import { StateContext } from "../../StateProvider";

//**import images */
import spiral from "../../../assets/images/spiral1.png";
import free from "../../../assets/images/free.png";
import free_ar from "../../../assets/images/free_ar.png";

import Button from "../../Button/Button";

const Card = ({ image, headerAr , headerEn , descriptionEn , descriptionAr, height, state }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);


  //**state for know screen width */
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  //**it is function for change height card */
  const HeightCard = (value) => {
    if ( windowSize >= 1700) {
      return Number(value) + 60;
    }
    else if ( windowSize >= 1500) {
      return Number(value) + 40;
    }
    else if (windowSize <= 1100) {
      return value - 70;
    } 
    else {
      return value;
    }
  };

  const styles = {
    height: `${HeightCard(height)}px`,
  };

  return (
    <div className="card_sub_service" style={styles}>
      <div className="head">
        <img className={`${changeSide === "ar" ? "image_ar" : "image"}`} src={image} alt="" />
        {state &&
          (changeSide === "ar" ? (
            <img className="free_ar" src={free_ar} alt="" />
          ) : (
            <img className="free" src={free} alt="" />
          ))}
      </div>
      <div className="body">
        <div className="title">
          <h3>{changeSide === "ar" ? headerAr : headerEn}</h3>
          <img src={spiral} alt="" />
        </div>
        <p>{changeSide === "ar" ? descriptionAr : descriptionEn}</p>
      </div>
      <div className="footer_card">
        <Button height={"50px"} fontSize={20} name={state ? "request_free_consulting" : "know_more"} color1={"#2FA4A1"} color2={"#FDFDFE"} />
      </div>
    </div>
  );
};

export default Card;
