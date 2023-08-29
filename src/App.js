import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const App = () => (
  <BrowserRouter>
    <div className="main">
      <NavLink />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
