import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

interface Props {}

const LabeledRange: React.FC<Props> = () => {
  const [value, setValue] = useState(0);
  return <FormControl type="range" onChange={(e) => setValue(parseInt(e.target.value))} />;
};

export default LabeledRange;

// se as coisas mudarem de posição é que eu uso um auto formatter
// o problema é que eu nao consigo mexer em outra coisa. pq fica meio quebrado...
// quer cada uma faz no seu pc e a gente compartilha a tela nas duvidas?
// os dois podem compartilhar.. ai quando terminar uma parte os dois fazem um push
// eu já vou dar um push agora... ai vc pega ai... e continua...

// blz
