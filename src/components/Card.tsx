import React from "react";
import "./Card.scss";

export const Card:React.FC<{ title: string, isFullSize?: boolean }> = ({ title, isFullSize, children }) => {
  return <div className={`card ${isFullSize ? "card--full" : ""}`}>
      <h3 className="card__title">
          {title}
      </h3>
      <div className="card__content">
          {children}
      </div>
  </div>;
};