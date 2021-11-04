import React from "react";
import "./Cards.scss";

export const Cards:React.FC<{}> = ({ children }) => {
    return <div className="cards">
        {children}
    </div>;
  };