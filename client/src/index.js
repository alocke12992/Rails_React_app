import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.nim.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
