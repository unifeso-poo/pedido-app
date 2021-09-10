import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";

export const Profile = () => {
    const {user, logout} = useAuth0();

    return (
        <div>
            <img src={user?.picture} alt="Profile" />
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <Button text="Sair" onClick={logout} />
        </div>
    );
}