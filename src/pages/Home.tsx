import React from "react";
import { Card } from "../components/Card";
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";
import { Button } from "../components/Button";
import { Profile } from "../components/Profile";
import { Redirect } from "react-router";


export const Home: React.FC = () => {
    const {isAuthenticated, loginWithRedirect} = useAuth0();

    if (isAuthenticated)
    {
        return <Redirect to="/contact" />;
    }
    return (
        <Card title="Autenticação">
            <p>Você deve se autenticar para acessar a aplicação</p>
            <Button text="Entrar" onClick={loginWithRedirect}>Login</Button>
        </Card>
    );
}