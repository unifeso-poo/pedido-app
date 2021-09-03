import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "../components/Button";

export const Home: React.FC = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const button = !isAuthenticated
        ? <Button text="Entrar" onClick={loginWithRedirect} />
        : <Button text="Sair" onClick={logout} />;
    return (
        <div>
            <h1>Home</h1>
            {button}
        </div>
    );
}