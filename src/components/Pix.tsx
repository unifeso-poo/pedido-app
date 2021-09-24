import { Modal, Button } from "react-bootstrap";

type Props = {
  isOpen: boolean,
  setIsOpen: (newState: boolean) => void
}

const Pix: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Pix</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            Para realizar o pagamento via PIX, favor enviar através do CPF:
          </div>
          012.345.678.90
          <div>
          Nome do beneficiário: Júlio Vitor</div>
          <div>Conta Bancária: Nubank </div>
          <div>Agencia:0001 </div>
          <div>Conta: 00000000-0</div>
          <br />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export { Pix }