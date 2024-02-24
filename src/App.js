import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";

import 'assets/scss/style.scss';

function App() {
 
  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;