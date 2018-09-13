import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import MapboxGeocoder from 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();






