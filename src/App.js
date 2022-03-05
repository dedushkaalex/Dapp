import React from 'react';
import './App.css';
import CircleLoader from 'react-spinners/CircleLoader';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import Hero from './components/HeroSection/index'

function App() {

  return (
      <Router>
        <Home />
        <Hero />
      </Router>
  );
}

export default App;
