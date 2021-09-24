import { Modal, Button, Row, Col, InputGroup, FormControl, Form } from "react-bootstrap";
import { useState } from "react"

type Props = {
  isOpen: boolean,
  setIsOpen: (newState: boolean) => void
}

const CartaoModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Dados do titular do cartão</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Numero do cartão</InputGroup.Text>
                <FormControl
                  aria-label="Defalt"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Validade</InputGroup.Text>
                <FormControl
                  placeholder="MM/AA"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">CVV</InputGroup.Text>
                <FormControl
                  placeholder="123"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label htmlFor="basic-url">Nome completo</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Defalt"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">CPF</InputGroup.Text>
                <FormControl
                  aria-label="Defalt"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Data de Nascimento</InputGroup.Text>
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                // value={date}
                // onChange={(e) => setDate(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Parcelas</InputGroup.Text>
                <Form.Select aria-label="Default select example">
                  <option value="1">1x</option>
                  <option value="2">2x</option>
                  <option value="3">3x</option>
                  <option value="4">4x</option>
                  <option value="5">5x</option>
                  <option value="6">6x</option>
                  <option value="7">7x</option>
                  <option value="8">8x</option>
                  <option value="9">9x</option>
                  <option value="10">10x</option>
                  <option value="11">11x</option>
                  <option value="12">12x</option>
                </Form.Select>
              </InputGroup>

            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Salvar 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export { CartaoModal }