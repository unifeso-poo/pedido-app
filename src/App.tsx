import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Home } from './pages/Home';
import { Pedidos } from './pages/Pedidos';
import { Clientes } from './pages/Clientes';
import { Product } from './pages/Produtos';
import { Financeiro } from './pages/Financeiro';
import { FormaPagamento } from './pages/FormaPagamento';


interface PrivateRouteProps {
  component: any;
  path: string;
  exact?: boolean;
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
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Pedidos} path="/pedidos" />
          <PrivateRoute component={Clientes} path="/clientes" />
          <PrivateRoute component={Product.List} path="/produtos" exact />
          <PrivateRoute component={Financeiro} path="/financeiro" />
          <PrivateRoute component={FormaPagamento} path="/formas-pagamento" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;