import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Logo from "./logo.svg";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Home } from './pages/Home';
import { Pedidos } from './pages/Pedidos';
import { Clientes } from './pages/Clientes';
import { Produtos } from './pages/Produtos';
import { Financeiro } from './pages/Financeiro';
import { FormaPagamento } from './pages/FormaPagamento';
import { Produto } from './pages/Produto';
import { Container, Navbar } from 'react-bootstrap';


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
  const history = useHistory();

  return (
    <div className="App">
      <Navbar bg="dark">
          <Container className="justify-content-center">
              <Navbar.Brand onClick={() => history.goBack()}>
                  <img
                      src={Logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="Pedidos logo"
                  />
              </Navbar.Brand>
          </Container>
      </Navbar>
      <Router>
        <Switch>
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Pedidos} path="/pedidos" />
          <PrivateRoute component={Clientes} path="/clientes" />
          <PrivateRoute component={Produtos} path="/produtos" exact />
          <PrivateRoute component={Produto} path="/produtos/:id" />
          <PrivateRoute component={Financeiro} path="/financeiro" />
          <PrivateRoute component={FormaPagamento} path="/formas-pagamento" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;