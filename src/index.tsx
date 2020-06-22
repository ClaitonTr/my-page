import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Middleware from './translations/middleware';

ReactDOM.render(
  <React.StrictMode>
    <Middleware>
      <App />
    </Middleware>  
  </React.StrictMode>,
  document.getElementById('root')
);
