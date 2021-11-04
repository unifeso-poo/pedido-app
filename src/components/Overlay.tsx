import React from "react";
import "./Overlay.scss";

export const Overlay: React.FC<{isOpen: boolean, closeHandler: Function}> = ({ isOpen, closeHandler }) => {
    return <div
        className={`overlay ${isOpen ? "overlay--active" : ""}`}
        onClick={() => closeHandler()}
    ></div>;
}