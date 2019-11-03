import React from 'react';
import './App.css';
import { WebMapView } from './components/WebMapView';

function App() {
  return (
    <div className="App">
      <div className="map-container">
        <WebMapView />
      </div>
    </div>
  );
}

export default App;
