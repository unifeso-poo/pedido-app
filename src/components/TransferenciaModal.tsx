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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export { TransferenciaModal }
