import React, { useState } from "react";

//** import components */
import Footer from "../../components/Footer/Footer";
import Welcome from "../../components/Welcome/Welcome";
import WhatServices from "../../components/WhatServices/WhatServices";
import WhatMakesMernan from "../../components/WhatMakesMernan/WhatMakesMernan";
import JoinUs from "../../components/JoinUs/JoinUs";
import AboutMernan from "../../components/AboutMernan/AboutMernan";
import OurValues from "../../components/OurValues/OurValues";
import OurPartners from "../../components/OurPartners/OurPartners";
import PreviousClients from "../../components/PreviousClients/PreviousClients";
import OurLocations from "../../components/OurLocations/OurLocations";
import RequestFreeConsulting from "../../components/RequestFreeConsulting/RequestFreeConsulting";

//** import images */
import image6 from "../../assets/images/request.png";
import image7 from "../../assets/images/request_ar.png";

import "./Arrows/arrow.css";

//** import images */
import logo from "../../assets/images/mernan_white.png";
import image from "../../assets/images/brand.png";
import rightArrow from "../../assets/images/arrow-vector-right.svg";
import leftArrow from "../../assets/images/arrow-vector-left.svg";

// function Arrow({ start, end }) {
//   const [arrowStart, setArrowStart] = useState(start);
//   const [arrowEnd, setArrowEnd] = useState(end);

//   return (
//     <div className="container">
//       <div
//         className="arrow start"
//         style={{ top: arrowStart.y, left: arrowStart.x }}
//       ></div>
//       <div
//         className="arrow end"
//         style={{ top: arrowEnd.y, left: arrowEnd.x }}
//       ></div>
//     </div>
//   );
// }
function ArrowLeft({ start, classes }) {
  const [arrowStart, setArrowStart] = useState(start);
  const [arrowClass, setArrowClass] = useState(classes);
  return (
    <div className="container">
      <div
        className={arrowClass}
        style={{ top: arrowStart.y, left: arrowStart.x }}
      >
        <img src={leftArrow} alt="" />
      </div>
    </div>
  );
}
function ArrowRight({ start, classes }) {
  const [arrowStart, setArrowStart] = useState(start);
  const [arrowClass, setArrowClass] = useState(classes);
  return (
    <div className="container">
      <div
        className={arrowClass}
        style={{ top: arrowStart.y, left: arrowStart.x }}
      >
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
}
const WhoMernan = () => {
  const [start, setStart] = useState({ x: "5%", y: "350px" });
  const [start1, setStart1] = useState({ x: "5%", y: "600px" });
  const [classes, setClasses] = useState("arrow start");
  return (
    <div>
      {/* Welcome */}
      <ArrowLeft start={start} classes={classes} />
      <Welcome />

      {/* What Services */}
      <ArrowRight start={start1} classes={classes} />
      <WhatServices />

      {/* What make mernan */}
      <ArrowLeft start={start1} classes={classes} />
      <WhatMakesMernan />

      {/* Join Us */}
      <JoinUs />

      {/* About mernan */}
      <AboutMernan />

      {/* Our Values */}
      <OurValues />

      {/* Our Partners */}
      <OurPartners color1={"#596773"} color2={"#FDFDFE"} />

        {/*Previous Clients*/}
        <PreviousClients image={image}/>

      {/*Our Locations*/}
      <OurLocations />

      <RequestFreeConsulting
        color1={"--color1"}
        color2={"--color2"}
        color3={"--color2"}
        color4={"--color2"}
        image1={image6}
        image2={image7}
      />

      {/* Footer */}
      <Footer color1={"#39858E"} color2={"#FDFDFE"} image={logo} />
    </div>
  );
};

export default WhoMernan;
