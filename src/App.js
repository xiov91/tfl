import React from 'react';
import Hero from './components/hero';
import Nav from './components/nav';
import MyGallery from './components/gallery';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Hero></Hero>
        <Nav></Nav>
      </div>
      <div>
      <MyGallery></MyGallery>
      </div>
    </div>
  );
}

export default App;
