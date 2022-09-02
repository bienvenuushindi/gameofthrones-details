import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import List from './pages/list';

function App() {
  return (
    <div className="vh-100">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:slug" element={<List />} />
        <Route exact path="/details/:slug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
