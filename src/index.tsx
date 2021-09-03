import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Home } from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="tiagor87.auth0.com"
      clientId="3BjtW0YixYPQ2OE02GH4m0x0LQbia1nD"
      redirectUri="http://localhost:3000">
        <Home />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
