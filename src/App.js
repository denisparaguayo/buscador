import React, { Component} from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {


  state = {
    termino : '',
    imagenes : []
  }

  paginaAnterior = () =>{

  }

  paginaSiguiente = () =>{
    
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=15022583-2891b7e1735571b5ee32f9e27&q=${termino}&per_page=30`;
    
    fetch(url)
      .then(respuesta => respuesta.json () )
      .then(resultado => this.setState({imagenes : resultado.hits}))


  }
  
  datosBusqueda = (termino) =>{
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render() {

    return (
      <div className="app container">
        <div className="jumbotron">
          <p  className="lead text-center">Buscador de Imágenes</p>
  
          <Buscador 
          
          datosBusqueda={this.datosBusqueda}
          />
  
        </div>
        <div className="row justify-content-center">

        <Resultado
          imagenes={this.state.imagenes}
        />

        </div>
      </div>
    );

  }
}

export default App;
