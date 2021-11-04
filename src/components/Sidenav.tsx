import React from "react";
import { FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Overlay } from "./Overlay";

import "./Sidenav.scss";

export const Sidenav:React.FC<{isOpen: boolean, closeHandler: Function}> = ({ isOpen, closeHandler }) => {
  const close = (event: any) => {
    // event.preventDefault();
    closeHandler();
  };

  return (
    <div>
        <div className={`sidenav ${isOpen ? "sidenav--active" : ""}`}>
            <button onClick={close} className="button-close">
                <FaCaretLeft />close
            </button>
            <ul className="sidenav-list">
                <li className="sidenav-list__item">
                    <Link className="sidenav-list-item" to="clientes" onClick={close}>Clientes</Link>
                </li>
                <li className="sidenav-list__item">
                    <Link className="sidenav-list-item" to="produtos" onClick={close}>Produtos</Link>
                </li>
                <li className="sidenav-list__item">
                    <Link className="sidenav-list-item" to="pedidos" onClick={close}>Pedidos</Link>
                </li>
            </ul>    
        </div>
        <Overlay isOpen={isOpen} closeHandler={close} />
    </div>
  );
};