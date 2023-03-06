import React, { Component } from "react";
import styled from "styled-components";

class Contador extends Component {
  state = {
    numero: 0
  };

  iniciar = () => {
    const diminuir = setInterval(() => {
      if (this.state.numero < 10)
        this.setState({
          numero: this.state.numero + 1
          // numero: this.state.numero < 10 ? this.state.numero +1
        });
    }, 1000);
    this.parar = () => {
      clearInterval(diminuir);
    };
  };

  limpar = () => {
    this.setState({
      numero: 0
    });
  };

  componentDidMount() {
    document.title = this.state.numero;
  }

  componentDidUpdate() {
    document.title = this.state.numero;
  }
  // iniciar = () => {
  //   const limpar = setInterval(() => {
  //     if (this.state.numero < 10) {
  //       this.setState({
  //         numero: this.state.numero + 1
  //       });
  //     }
  //   }, 1000);
  //   this.limpar = () => {
  //     clearInterval(limpar);
  //     this.setState({
  //       numero: this.state.numero
  //     });
  //   };
  // };
  //   Btn: this.state.numero + 1
  // });

  render() {
    return (
      <>
        <container>
          <div>
            <h1>ContaWeb</h1>
          </div>
          <boxNumber>
            <h1>{this.state.numero}</h1>
          </boxNumber>
          <boxCount>
            <button onClick={this.iniciar}>+</button>
            <button onClick={this.diminuir}>-</button>
            <button onClick={this.limpar}>Limpar</button>
          </boxCount>
        </container>
      </>
    );
  }
}

export default Contador;
