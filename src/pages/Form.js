import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            tipo: '',
            number: ''
            
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, tipo, number } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Nome</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />    
                <label for="tipo">Tipo</label>
                <input 
                    type="text" 
                    name="tipo" 
                    id="tipo"
                    value={tipo} 
                    onChange={this.handleChange} />
                <label for="number">CPF/CNPJ</label>
                <input 
                    type="number" 
                    name="number" 
                    id="number"
                    value={number} 
                    onChange={this.handleChange} />    
                <button type="submit">
                    Cadastrar
                </button>
            </form>
        );
    }
}

export default Form;