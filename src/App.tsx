import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Login } from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/forgot">
            <ForgotPassword />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
