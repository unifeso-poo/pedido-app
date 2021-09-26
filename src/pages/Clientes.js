import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './index.scss';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <div className="top">
                <h1>Clientes</h1>
                <p>Adicione o Nome do Cliente e o Endereço</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                </div>
                <div className="bottom">    
                <h3>Adicionar Novo</h3>
                <Form handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;