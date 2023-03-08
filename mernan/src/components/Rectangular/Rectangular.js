import React, { useContext , useState , useEffect} from "react";

import "./Rectangular.scss";

//** state management */
import { StateContext } from "../context/StateProvider";


//**import images */
import image from "../../assets/images/Vector(4).png";
import icon1 from "../../assets/images/check-circle.png";
import icon2 from "../../assets/images/close.png"

//**import components */
import Button1 from "../Button/Button";
import Button2 from "../Home/Button/Button";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const Rectangular = ({
  headerEn,
  headerAr,
  descriptionAr,
  descriptionEn,
  price,
  color,
  id,
  num
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SubService/${num}`)
      .then((response) => {
        setData(response.data.benefits);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL , num]);

  const styles = {
    background: `${color}`,
    outline: `${id === 2 ? "5px solid #312E3A" : "none"}`,
    height:`100%`
  };

  return (
    <div style={styles} className="rectangular mx-3">
      <h4>{changeSide === "ar" ? headerAr : headerEn}</h4>
      <span>{changeSide === "ar" ? descriptionAr : descriptionEn}</span>
      {changeSide === "ar" ? <p>{price} ر.س</p> : <p>{price} SAR</p>}
      <img className="line" src={image} alt="" />
      <div className="icons">
        {
          data && data.map((item)=>(
            item.row.map((plan)=>(
               plan.plan.id === id && (
              <div key={plan.id} className={`icon${plan.id}`}>
                {
                  plan.text === null ? (
                    <img src={plan.isIncluded ? icon1 : icon2} alt=""/>
                  ) : <span>{plan.text}</span>
                }
              </div>
              )
              ))
            ))
        }
      </div>
      <div className="choose_package">
        {
          id === 2 ? (
            <Button1
          name={"choose_package"}
          state={true}
          color1={"#39858E"}
          color2={"#FDFDFE"}
          fontSize={20}
        />
          ):(
            <Button2 name={"choose_package"} state={true}/>
          )
        }
      </div>
    </div>
  );
};

export default Rectangular;
