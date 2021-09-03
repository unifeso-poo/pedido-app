import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Contact } from "./pages/Contact";
import { Home } from './pages/Home';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';


interface PrivateRouteProps {
  component: any;
  path: string;
}

const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) => {
  const privatePage = withAuthenticationRequired(component);
  return (
      <Route
          {...rest}
          render={(props) => React.createElement(privatePage, props)}
      />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PrivateRoute component={ForgotPassword} path="/forgot" />
          <PrivateRoute component={Contact} path="/contact" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;