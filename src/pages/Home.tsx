import React from "react";
import { Card } from "../components/Card";
import { Cards } from "../components/Cards";
import { FiUser, FiUsers} from "react-icons/fi";
import { GoGraph} from "react-icons/go";
import { BsBoxSeam} from "react-icons/bs";
import { MdOutlineAttachMoney} from "react-icons/md"


export const Home: React.FC = () => {
    return (
        <div className="content">
            <h2 className="content-title">Dashboard</h2>
            <div className="content-body">
                <Cards>
                    <Card title="Resumo financeiro do mês" isFullSize={true} />
                    <Card title="Mais vendidos" />
                    <Card title="Mais rentáveis" />
                    <Card title="Últimas atualizações" />
                    <Card title="Estoque baixo" />
                </Cards>
                <footer className ="tabbar">
                    <button className="tabbarbutton">
                        <GoGraph/>
                        <p className="tabbartitle">Inicio</p>
                    </button>
                    <button className="tabbarbutton">
                        <BsBoxSeam/>
                        <p className="tabbartitle">Produtos</p>
                    </button>
                    <button className="tabbarbutton">
                        <FiUser/>
                        <p className="tabbartitle">Clientes</p>
                    </button>
                    <button className="tabbarbutton">
                        <MdOutlineAttachMoney/>
                        <p className="tabbartitle">Finanças</p>
                    </button>
                </footer>
            </div>
        </div>
    );
}