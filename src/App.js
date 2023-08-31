import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App = () => (
  <BrowserRouter>
    <div className="main">
      <NavLink />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
