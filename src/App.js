import React from 'react';

import {BrowserRouter , Routes , Route} from 'react-router-dom';

import './App.scss';

//** import components  */
import WhoMernan from './pages/WhoMernan/WhoMernan';
import LandingPage from './pages/LandingPage/LandingPage';
import Services from './pages/Services/Services';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';


const App= ()=> {
  return (
    <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/mernan" element={<WhoMernan/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/digital-marketing" element={<DigitalMarketing/>}/>
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
