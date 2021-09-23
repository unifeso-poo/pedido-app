import { Modal, Button } from "react-bootstrap";
import QRCode from 'qrcode.react';

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
            <Modal.Body>
              Caso prefira, escaneie o QR Code abaixo pagar fazer seu pagamento:
            </Modal.Body>
            <div className="mb-4 d-flex justify-content-center align-items-center">
              <QRCode value="https://www.youtube.com/watch?v=there_is_no_video" />
            </div>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Fechar
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export { PixModal }
