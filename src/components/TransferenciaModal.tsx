import { Modal, Button } from "react-bootstrap";

type Props = {
  isOpen: boolean,
  setIsOpen: (newState: boolean) => void
}

const TransferenciaModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Transferência</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            Faça sua transferência para os dados informados abaixo. Você receberá um email de confirmação:
          </div>
          Agência: 1234
          <br />
          Conta: 123456789
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

export { TransferenciaModal }