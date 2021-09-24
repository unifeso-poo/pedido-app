import React, { useState, ChangeEvent } from "react";
import { FormControl, FormGroup, Form, FormFloating, FormControlProps} from "react-bootstrap";

interface Props {
  label: string
  inputId?: string
  id?: string;
  onChange?:(value: number)=> {};
}

const LabeledRange: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState<number>(0);
  return (
      <FormGroup id={props.id} className="d-flex justify-content-between">
        <div className='text-light  col-7  mx-1 '>
          <Form.Label>{props.label }</Form.Label>
          <Form.Range value={value} onChange={(e) => {
              if(props.onChange){
                props.onChange(parseInt(e.target.value))
              }
              setValue(parseInt(e.target.value))
            }} max={(value)+2000}/>
        </div>
        {/* <FormFloating> */}
          <div className='col-4 align-self-center'>
            <FormControl id={props.inputId} value={value} type="number" onChange={(e) => {
              if(props.onChange){
                props.onChange(parseInt(e.target.value))
              }
              setValue(parseInt(e.target.value))
            }}/></div>
          {/* <Form.Label>{props.label}</Form.Label> */}
        {/* </FormFloating> */}
      </FormGroup>
    );
};

export default LabeledRange;
