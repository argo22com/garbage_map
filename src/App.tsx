import React from 'react';
import { Map } from './components/Map';
import './App.css';
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Map />
    </div>
  );
}

export default App;
