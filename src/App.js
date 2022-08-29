import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navigation from './components/nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
