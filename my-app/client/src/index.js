import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
