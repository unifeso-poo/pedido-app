import { Button } from "react-bootstrap";

interface Props{
    isOpen: boolean;
    setIsOpen: Function;
    render: boolean;
    onClick: Function;
}

const ButtonFiltro: React.FC<Props> = (props: Props) => {
    if(!props.render){
        return null;
    }
    return (
        <div className={`col-5 form-filtro-buttons d-${props.render? "block" : "none"}`}>
                  <Button variant="info" className="text-light text-bold btn-filtro" onClick={() => props.onClick()}>
                  <i className="bi-search"/> Pesquisar
                  </Button>
                  <Button
                    variant="outline-info"
                    className="form-filtro-toggler"
                    onClick={() => props.setIsOpen(!props.isOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={props.isOpen}
                    title="Mais filtros"
                  >
                    <i className={`"icon ${props.isOpen? "bi-chevron-up" : "bi-chevron-down"}`} title="Mais Filtros"/>
                  </Button>
                </div>
      );
  };
  
  export default ButtonFiltro;

