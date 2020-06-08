import React, { Component } from 'react';
import api from "../services/api";


export default class Navbar extends Component {

  state = {
    findPerson: '',
  };

  handleInputChange =  event => {
    this.setState({ findPerson: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { findPerson } = this.state;

    const response = await api.get(`/${findPerson}`)
    
    console.log(response.data);
    
  }

  render(){
    const { findPerson } = this.state;
    return (
      <div className="FormContainer">
          <h1> Título do Quadro  </h1>

          <form onSubmit={this.handleSubmit} >
            <input 
              type="text" 
              placeholder="Pesquisar"
              value={findPerson}
              onChange={this.handleInputChange}
            />
            <button> Pesquisar </button>
          </form>
      </div>
    );
  }
}