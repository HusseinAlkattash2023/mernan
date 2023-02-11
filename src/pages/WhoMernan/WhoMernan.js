import React from 'react'

//** import components */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Welcome from '../../components/Welcome/Welcome';
import WhatServices from '../../components/WhatServices/WhatServices';
import WhatMakesMernan from '../../components/WhatMakesMernan/WhatMakesMernan';
import JoinUs from '../../components/JoinUs/JoinUs';
import AboutMernan from '../../components/AboutMernan/AboutMernan';
import OurValues from '../../components/OurValues/OurValues';
import OurPartners from '../../components/OurPartners/OurPartners';
import PreviousClients from '../../components/PreviousClients/PreviousClients';
import OurLocations from '../../components/OurLocations/OurLocations';
import RequestFreeConsulting from '../../components/RequestFreeConsulting/RequestFreeConsulting';

//** import logo */
import logo from '../../assets/images/mernan_white.png';
import image from '../../assets/images/brand.png';

const WhoMernan = () => {

  return (
    <div> 
        {/* Header */}
        <Header/>

        {/* Welcome */}
        <Welcome/>

        {/* What Services */}
        <WhatServices/>

        {/* What make mernan */}
        <WhatMakesMernan/>

        {/* Join Us */}
        <JoinUs/>

        {/* About mernan */}
        <AboutMernan/>

        {/* Our Values */}
        <OurValues/>

        {/* Our Partners */}
        <OurPartners color1={"#596773"} color2={"#FDFDFE"}/>

        {/*Previous Clients*/}
        <PreviousClients image={image}/>

        {/*Our Locations*/}
        <OurLocations/>

        <RequestFreeConsulting/>
        
        {/* Footer */}
        <Footer color1={"#39858E"} color2={"#FDFDFE"} image={logo}/>
    </div>

  )
}

export default WhoMernan