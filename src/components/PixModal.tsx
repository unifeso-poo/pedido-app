import { Modal, Button } from "react-bootstrap";

type Props = {
    isOpen: boolean,
    setIsOpen: (newState: boolean) => void
}

const PixModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    return (
        <>
        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
            <Modal.Header closeButton>
            <Modal.Title
                className="m-20">
                    PIX
            </Modal.Title>
            </Modal.Header>
            <Modal.Body
            className="m-20">Aqui está a chave para realização do pix:</Modal.Body>
            <Modal.Body
            className="m-20">ejdnrjn-njjern-renderj-enjnrn</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
                Salvar Alterações
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export { PixModal }
