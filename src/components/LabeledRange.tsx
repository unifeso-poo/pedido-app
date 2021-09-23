import React, { useState } from "react";
import { FormControl, FormGroup, Form, FormFloating } from "react-bootstrap";

interface Props {
  label: string
  inputId?: string
  id?: string
}

const LabeledRange: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState(0);
  return (
      <FormGroup id={props.id} className="m-1">
        <FormFloating>
          <FormControl id={props.inputId} value={value} type="number" onChange={(e) => setValue(parseInt(e.target.value))}/>
          <Form.Label>{props.label}</Form.Label>
        </FormFloating>
        <Form.Range value={value} onChange={(e) => setValue(parseInt(e.target.value))} max={(value)+2000}/>
      </FormGroup>
    );
};

export default LabeledRange;

// se as coisas mudarem de posição é que eu uso um auto formatter
// o problema é que eu nao consigo mexer em outra coisa. pq fica meio quebrado...
// quer cada uma faz no seu pc e a gente compartilha a tela nas duvidas?
// os dois podem compartilhar.. ai quando terminar uma parte os dois fazem um push
// eu já vou dar um push agora... ai vc pega ai... e continua...

// blz
