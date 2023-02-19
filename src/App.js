import React from 'react';

import {BrowserRouter , Routes , Route} from 'react-router-dom';

import './App.scss';

//** import components  */
import WhoMernan from './pages/WhoMernan/WhoMernan';
import LandingPage from './pages/LandingPage/LandingPage';
import Services from './pages/Services/Services';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';
import Development from './pages/Development/Development';
import Pricing from './pages/Pricing/Pricing';
import Header from './components/Header/Header';

const App= ()=> {
  return (
    <div className="app">
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/mernan" element={<WhoMernan/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/digital-marketing" element={<DigitalMarketing/>}/>
                <Route path="/development" element={<Development/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
